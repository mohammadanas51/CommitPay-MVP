import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    githubId: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    role: { type: String, enum: ['maintainer', 'contributor'], default: 'contributor' },
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
