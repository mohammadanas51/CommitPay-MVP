import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import User from "../models/Users";


dotenv.config();
const router = express.Router();

const CLIENT_ID = process.env.GITHUB_CLIENT_ID!;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET!;
const CALLBACK_URL = process.env.GITHUB_CALLBACK_URL!;

// Step 1: Redirect to GitHub (with role as state)
router.get("/github", (req, res) => {
  const role = req.query.role as string || "contributor"; // default to contributor
  const redirectURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URL}&scope=read:user user:email&state=${role}`;
  res.redirect(redirectURL);
});

// Step 2: GitHub redirects back here
router.get("/github/callback", async (req, res) => {
  const code = req.query.code as string;
  const role = req.query.state as string || "contributor"; // fallback to contributor

  try {
    // Step 1: Exchange code for access token
    const tokenRes = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const accessToken = tokenRes.data.access_token;

    // Step 2: Fetch GitHub user profile
    const userRes = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const githubData = userRes.data;
    const githubId = githubData.id.toString();
    const username = githubData.login;

    // Step 3: Save or update user in MongoDB
    let dbUser = await User.findOne({ githubId });

    if (!dbUser) {
      dbUser = new User({
        githubId,
        username,
        role,
      });
      await dbUser.save();
    } else {
      dbUser.lastLogin = new Date();
      await dbUser.save();
    }

    // Step 4: Redirect to frontend with user data
    const redirectPath = role === "maintainer" ? "maintainers-dashboard" : "Contributor-Pre-Signup";
    res.redirect(`https://commitpay-mvp.web.app/${redirectPath}?user=${encodeURIComponent(JSON.stringify({
      githubId,
      username,
      role,
      id: dbUser._id,
    }))}`);
  } catch (error) {
    console.error("OAuth error:", error);
    res.status(500).send("OAuth Failed");
  }
});

export default router;
