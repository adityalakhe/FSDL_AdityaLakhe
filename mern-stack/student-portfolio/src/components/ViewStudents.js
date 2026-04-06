import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewStudents() {
    const [students, setStudents] = useState([]);

    const fetchStudents = () => {
        axios.get('http://localhost:3000/student/view')
            .then(res => setStudents(res.data))
            .catch(err => console.log(err));
    };

    useEffect(() => { fetchStudents(); }, []);

    const deleteStudent = (id) => {
        axios.delete(`http://localhost:3000/student/delete/${id}`)
            .then(() => fetchStudents());
    };

    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map(s => (
                    <li key={s._id}>
                        {s.name} - {s.course} 
                        <button onClick={() => deleteStudent(s._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ViewStudents;