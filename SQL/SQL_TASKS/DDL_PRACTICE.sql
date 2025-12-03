CREATE DATABASE Company;
USE Company;

CREATE TABLE Employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    department VARCHAR(50) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    join_date DATE NOT NULL,
    email VARCHAR(100) UNIQUE
);

INSERT INTO Employees (emp_id, name, department, salary, join_date, email)
VALUES
(1, 'Arun Kumar', 'HR', 45000, '2025-01-10', 'arun@example.com'),
(2, 'Divya Sharma', 'IT', 72000, '2025-02-05', 'divya@example.com'),
(3, 'Rahul Singh', 'Finance', 68000, '2025-01-28', 'rahul@example.com'),
(4, 'Meena Devi', 'IT', 55000, '2025-02-20', 'meena@example.com'),
(5, 'John David', 'Marketing', 48000, '2025-01-18', 'john@example.com');

UPDATE Employees 
SET name = UPPER(name)
WHERE emp_id = 1;

SELECT department, SUM(salary) AS total_salary
FROM Employees
GROUP BY department;

SELECT *
FROM Employees
WHERE join_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY);

SELECT name, salary, ROUND(salary, 2) AS rounded_salary
FROM Employees;

SELECT *
FROM Employees
WHERE LENGTH(name) > 5;

SELECT department, AVG(salary) AS avg_salary
FROM Employees
GROUP BY department
HAVING AVG(salary) > 50000;

ALTER TABLE Employees
ADD bonus INT;

SELECT name, salary, join_date, YEAR(join_date) AS join_year
FROM Employees
ORDER BY join_date ASC;


