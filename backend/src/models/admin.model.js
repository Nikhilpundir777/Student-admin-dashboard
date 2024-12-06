import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
           
        },
        password:{
            type: String,
            required: true,
            trim: true,
            minlength: 3,
          

        }
    },
    { timestamps: true } 
);

const adminModel = mongoose.model("Admin", adminSchema);

export default adminModel;