import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
    default: "user",
  },
  cart: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Carts' 
},
  password: {
    type: String,
    required: true,
  },
});

export default model("User", UserSchema);