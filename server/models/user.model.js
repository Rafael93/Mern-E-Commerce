const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is mandatory"],
    },
    lastname: {
      type: String,
      required: [true, "Lastname is mandatory"],
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      //require: [true, "gender is mandatory"],
    },
    age: {
      type: Number,
      min: [18, "You have to be older than this"],
      require: [true, "age is mandatory"],
    },
    city: {
      type: String,
      min: [3, "The city must have at least 3 characters"],
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: (val) =>
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val),
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (val) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W\_])[A-Za-z\d\W\_]{8,}$/.test(
            val
          ),
        message:
          "Password must have at least 8 characters with one uppercase, one lowercase, one number, one special character",
      },
    },
  },
  { timestamps: true, versionKey: false }
);

const User = new mongoose.model("User", UserSchema);

module.exports = User;
