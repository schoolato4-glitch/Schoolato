import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import School from "../models/School.js";

dotenv.config();

// ✅ Read JSON file manually
const rawData = fs.readFileSync(
  new URL("../data/schools.json", import.meta.url)
);

const data = JSON.parse(rawData);

mongoose.connect(process.env.MONGO_URI);

const importData = async () => {
  try {
    await School.deleteMany();

    let flattenedSchools = [];

    data.forEach((stateObj) => {
      stateObj.districts.forEach((districtObj) => {
        districtObj.schools.forEach((school) => {
          flattenedSchools.push({
            name: school.name,
            url: school.url,
            description: school.description,

            state: stateObj.state,
            district: districtObj.district,

            address: school.address,
            academic_details: school.academic_details,
            infrastructure: school.infrastructure,

            // optional fake data
            fees: Math.floor(Math.random() * 50000) + 10000,
            rating: (Math.random() * 2 + 3).toFixed(1),
          });
        });
      });
    });

    await School.insertMany(flattenedSchools);

    console.log("✅ Data Imported Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();