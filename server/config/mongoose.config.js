const mongoose = require("mongoose");
const bdName = "ecommerce_store";

mongoose.set("strictQuery", false); //importante
mongoose
  .connect(`mongodb://127.0.0.1/${bdName}`)
  .then(() => console.log("CONNECTED TO DB"))
  .catch((err) => console.log("ERROR WITH DB: " + err));
