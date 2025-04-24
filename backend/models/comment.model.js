import { Schema } from "mongoose";
import mongoose from "mongoose";

const commentSchema = new Schema({
media: {
 type: String,
 required: true,
},
width:{
 type: Number,
 required: true,
},
height:{
 type: Number,
 required: true,
},
title:{
 type: String,
 required: [true, "Add a title to your pin"]
},
description:{
 type: String,
 required: [true, "Tell everyone about this"]
},
pin: {
 type: Schema.Types.ObjectId,
 ref: "Pin",
 required: true,
},
user: {
 type: Schema.Types.ObjectId,
 ref: "User",
 required: true,
}
},
{timestamps: true}
)

export default mongoose.model('Comment', commentSchema);