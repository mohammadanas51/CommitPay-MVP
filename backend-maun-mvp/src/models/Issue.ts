// src/models/Issue.ts
import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
  {
    projectName: { type: String, required: true },
    repoUrl: { type: String, required: true },
    description: { type: String, required: true },
    bounty: { type: Boolean, default: false },  // Keep this as Boolean for true/false
    bountyAmount: { type: String },  // This field will store the amount, like "$50"
    labels: { type: [String], default: [] }, // Labels field to store array of labels like ['frontend', 'paid', etc.]
  },
  { timestamps: true }
);

export default mongoose.model("Issue", issueSchema);
