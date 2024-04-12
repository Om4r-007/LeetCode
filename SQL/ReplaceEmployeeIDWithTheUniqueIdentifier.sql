SELECT unique_id , name
FROM Employees a
LEFT JOIN
EmployeeUNI b
on a.id = b.id
