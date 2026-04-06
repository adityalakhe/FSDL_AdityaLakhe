<?php include "db.php"; ?>
<!DOCTYPE html>
<html>
<head>
    <title>Student CRUD</title>
    <style>
        table { border-collapse: collapse; width: 70%; }
        th, td { border: 1px solid black; padding: 8px; text-align: center; }
    </style>
</head>
<body>

<h2>Student Entry Form</h2>

<form action="insert.php" method="POST">
    Name: <input type="text" name="name" required><br><br>
    Email: <input type="email" name="email" required><br><br>
    Mobile: <input type="text" name="mobile" required><br><br>
    Department: <input type="text" name="department" required><br><br>
    <button type="submit">Add Student</button>
</form>

<hr>

<h2>Student Records</h2>

<table>
    <tr>
        <th>ID</th><th>Name</th><th>Email</th><th>Mobile</th><th>Department</th><th>Action</th>
    </tr>

<?php
$result = mysqli_query($conn, "SELECT * FROM student");

while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr>
            <td>{$row['id']}</td>
            <td>{$row['name']}</td>
            <td>{$row['email']}</td>
            <td>{$row['mobile']}</td>
            <td>{$row['department']}</td>
            <td>
                <a href='edit.php?id={$row['id']}'>Edit</a> |
                <a href='delete.php?id={$row['id']}'>Delete</a>
            </td>
          </tr>";
}
?>
</table>

</body>
</html>
