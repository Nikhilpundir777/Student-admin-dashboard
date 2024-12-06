import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        studentname: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 50,
        },
    },
    { timestamps: true } 
);

const StudentModel = mongoose.model("Student", studentSchema);

export default StudentModel;
