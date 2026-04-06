import React from 'react';
import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Student Portfolio - MERN Stack</h1>
      <hr />
      <AddStudent />
      <hr />
      <ViewStudents />
    </div>
  );
}

export default App;