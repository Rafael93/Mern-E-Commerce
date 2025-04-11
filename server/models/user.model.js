const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
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
      enum: ["Masculino", "Femenino", "Otros"],
      require: [true, "gender is mandatory"],
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
      unique: true,
    },
  },
  { timestamps: true, versionKey: false }
);

UserSchema.plugin(uniqueValidator, {
  message: "Este email ya esta registrado",
});

UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password must match confirm password");
  }
  next();
});

UserSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

const User = new mongoose.model("User", UserSchema);

module.exports = User;
