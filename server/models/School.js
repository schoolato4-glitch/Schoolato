import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
  name: String,
  state: String,
  district: String,
  description: String,
  url: String,

  address: Object,
  academic_details: Object,
  infrastructure: Object,
});

export default mongoose.model("School", schoolSchema);