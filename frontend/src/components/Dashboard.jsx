import axios from "axios";
import { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import Card from "./Card";

const Dashboard = () => {
  const [showstudents, setShowstudents] = useState(true);
  const [allstudents, setAllstudents] = useState([]);
  const [newStudentName, setNewStudentName] = useState(""); // For adding a new student

  // Fetch students from the server
  const fetchStudents = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/admin/allstudents");
      setAllstudents(data.data); // Assume `data.data` contains the list of students
      console.log("Fetched students:", data.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // Run fetchStudents when the component loads
  useEffect(() => {
    fetchStudents();
  }, []);

  // Update a student's name
  const updateStudents = async (studentid, studentname) => {
    try {
      if (!studentid || !studentname) {
        console.error("Missing _id or student name");
        return;
      }

      const { data } = await axios.put("http://localhost:3000/admin/updatestudent", {
        studentid, // backend defined studentid
        studentname, // Updated student name
      });

      console.log("Update Successful:", data);

      // Refresh the student list after the update
      fetchStudents();
    } catch (e) {
      console.error("Error updating student:", e.response ? e.response.data : e);
    }
  };

  // Delete a student
  const deleteStudents = async (studentid) => {
    try {
      const { data } = await axios.delete("http://localhost:3000/admin/deletestudent", {
        data: { studentid }, // Pass the studentid in the body
      });
      console.log("Deleted successfully:", data);

      // Refresh the student list after deletion
      fetchStudents();
    } catch (e) {
      console.error("Error deleting student:", e.response ? e.response.data : e);
    }
  };

  // Add a new student
  const addStudent = async () => {
    try {
      if (!newStudentName) {
        console.error("Student name cannot be empty");
        return;
      }

      const { data } = await axios.post("http://localhost:3000/admin/createstudent", {
        studentname: newStudentName, // New student's name
      });

      console.log("Student added successfully:", data);

      // Clear the input field after adding the student
      setNewStudentName("");

      // Refresh the student list
      fetchStudents();
    } catch (e) {
      console.error("Error adding student:", e.response ? e.response.data : e);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AdminNav />

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="sidebar w-52 bg-blue-900 text-white p-6">
          <span className="text-xl font-bold">Dashboard</span>
          <h2 className="font-semibold mt-4">Manage Students</h2>
          <h2 className="font-semibold mt-2">Add Students</h2>
        </div>

        <div className="flex-1 p-6">
          <h1 className="text-2xl font-semibold">Student Record Management System</h1>

          <div className="cards flex gap-20">
            <Card text={"Student"} desc={"List of All Students"} />
            <button
              className="p-3 rounded-md bg-yellow-600 text-white"
              onClick={() => setShowstudents(!showstudents)}
            >
              {showstudents ? "Hide Students" : "All Students"}
            </button>
            <Card text={"Modify Student"} desc={"Add or delete Students"} />
          </div>
        </div>
      </div>

      {/* Add New Student Section */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Add New Student</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter student name"
            className="p-2 border rounded-md"
            value={newStudentName}
            onChange={(e) => setNewStudentName(e.target.value)} // Update name as user types
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={addStudent} // Call addStudent when clicked
          >
            Add Student
          </button>
        </div>
      </div>

      {/* Student List Section */}
      {showstudents && (
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">List of Students</h1>
          <div className="bg-purple-400 p-4 rounded-lg">
            {allstudents.length > 0 ? (
              allstudents.map((student) => (
                <div
                  key={student._id}
                  className="flex items-center justify-between p-3 bg-white mb-2 rounded-md"
                >
                  {/* Editable Name Field */}
                  <input
                    type="text"
                    defaultValue={student.studentname}
                    className="p-2 border rounded-md w-2/3"
                    onChange={(e) =>
                      setAllstudents((prev) =>
                        prev.map((s) =>
                          s._id === student._id
                            ? { ...s, studentname: e.target.value }
                            : s
                        )
                      )
                    }
                  />
                  <div className="flex gap-4">
                    {/* Update Button */}
                    <button
                      className="px-4 py-2 bg-yellow-500 text-white rounded-md"
                      onClick={() => updateStudents(student._id, student.studentname)}
                    >
                      Update
                    </button>

                    {/* Delete Button */}
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded-md"
                      onClick={() => deleteStudents(student._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No students found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
