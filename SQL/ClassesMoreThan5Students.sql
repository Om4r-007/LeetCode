SELECT class
FROM Courses 
GROUP BY class
HAVING count(student) >= 5
