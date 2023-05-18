import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// database connnection

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    console.log(`Server is running fine`);

    // listening app
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error happened", error);
  }
}

main();
