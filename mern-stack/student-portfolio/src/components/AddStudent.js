import React, { useState } from 'react';
import axios from 'axios';

function AddStudent() {
    const [formData, setFormData] = useState({ name: '', email: '', course: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/student/add', formData)
            .then(() => {
                alert("Student Added!");
                window.location.reload(); // Refresh to show new data
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Name" onChange={e => setFormData({...formData, name: e.target.value})} />
            <input placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} />
            <input placeholder="Course" onChange={e => setFormData({...formData, course: e.target.value})} />
            <button type="submit">Add Student</button>
        </form>
    );
}
export default AddStudent;