import mongoose from "mongoose";

const Car = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  type:{
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    name: String,
    contentType: String,
  },
});

export default mongoose.model("Cars", Car);
