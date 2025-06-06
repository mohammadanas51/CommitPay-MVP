import express from "express";
import Issue from "../models/Issue";

const router = express.Router();

// POST: Create a new issue
router.post("/create", async (req, res) => {
  try {
    const newIssue = new Issue(req.body);
    const savedIssue = await newIssue.save();
    res.status(201).json(savedIssue);
  } catch (err) {
    console.error("Issue creation failed:", err);
    res.status(500).json({ message: "Failed to create issue" });
  }
});

// GET: Get all issues (serve the gigs data)
router.get("/all", async (_req, res) => {
  try {
    const issues = await Issue.find().sort({ createdAt: -1 }).select("projectName repoUrl description bounty bountyAmount labels"); // Explicitly select required fields
    res.status(200).json(issues);
  } catch (err) {
    console.error("Failed to fetch issues:", err);
    res.status(500).json({ message: "Failed to fetch issues" });
  }
});


export default router;
