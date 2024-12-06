import express from 'express';
import bcrypt from 'bcrypt';
import adminModel from '../models/admin.model.js';
import StudentModel from '../models/students.model.js';


const router=express.Router();


// Signup route
router.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    // Basic input validation
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        // Check if the user already exists
        const existingUser = await adminModel.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        await adminModel.create({
            username: username,
            password: hashedPassword,
        });

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error during user signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    // Basic input validation
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    try {
        // Check if the user exists
        const user = await adminModel.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        // If credentials are valid, send a success response
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

router.get("/allstudents", async (req, res) => {
    try {
        // Fetch all students from the database
        const allstudents = await StudentModel.find({});

        // Check if students exist
        if (allstudents.length > 0) {
            res.status(200).json({
                message: "Successfully fetched all students",
                data: allstudents, // Include the list of students in the response
            });
        } else {
            res.status(404).json({
                message: "No students found",
            });
        }
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
});

router.post("/createstudent", async (req, res) => {
    const { studentname } = req.body;

    // Validate input
    if (!studentname) {
        return res.status(400).json({ message: "Student name is required" });
    }

    try {
        // Create a new student record
        const newStudent = await StudentModel.create({
            studentname: studentname,
        });

        // Respond with success
        res.status(201).json({
            message: "Student created successfully",
            data: newStudent, // Include the created student in the response
        });
    } catch (error) {
        console.error("Error creating student:", error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
});


router.delete("/deletestudent", async (req, res) => {
    const { studentid } = req.body;

    // Validate input
    if (!studentid) {
        return res.status(400).json({ message: "Student ID is required" });
    }

    try {
        // Find and delete the student by ID
        const deletedStudent = await StudentModel.findByIdAndDelete(studentid);

        // Check if the student exists
        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({
            message: "Student deleted successfully",
            data: deletedStudent, // Optionally return the deleted student details
        });
    } catch (error) {
        console.error("Error deleting student:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


router.put("/updatestudent", async (req, res) => {
    const { studentid, studentname } = req.body;

    // Validate input
    if (!studentid || !studentname) {
        return res.status(400).json({ message: "Student ID and new name are required" });
    }

    try {
        // Find and update the student name by ID
        const updatedStudent = await StudentModel.findByIdAndUpdate(
            studentid,
            { studentname },
            { new: true } // Return the updated document
        );

        // Check if the student exists
        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({
            message: "Student name updated successfully",
            data: updatedStudent, // Return the updated student details
        });
    } catch (error) {
        console.error("Error updating student:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});




export default router;