CREATE DATABASE myproject_db;
USE myproject_db;
-- Departments
CREATE TABLE departments (
  dept_id   INT PRIMARY KEY,
  name      VARCHAR(50) NOT NULL
);

-- Employees
CREATE TABLE employees (
  emp_id    INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name  VARCHAR(30),
  dept_id    INT,
  hire_date  DATE,
  salary     DECIMAL(10,2),
  email      VARCHAR(100),
  full_time  BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

-- Projects
CREATE TABLE projects (
  proj_id   INT PRIMARY KEY,
  proj_name VARCHAR(100),
  start_date DATE,
  end_date   DATE
);

-- Assignment linking employees to projects (many-to-many)
CREATE TABLE emp_proj (
  emp_id INT,
  proj_id INT,
  hours_allocated INT,
  PRIMARY KEY (emp_id, proj_id),
  FOREIGN KEY (emp_id) REFERENCES employees(emp_id),
  FOREIGN KEY (proj_id) REFERENCES projects(proj_id)
);

-- Insert departments
INSERT INTO departments VALUES
(1, 'Engineering'),
(2, 'HR'),
(3, 'Sales'),
(4, 'Design');

-- Insert employees
INSERT INTO employees VALUES
(101, 'Asha', 'Kumar', 1, '2024-07-01', 75000.00, 'asha.kumar@example.com', TRUE),
(102, 'Ravi', 'Sharma', 1, '2023-11-15', 82000.00, 'ravi.sharma@example.com', TRUE),
(103, 'Maya', 'Iyer', 2, '2025-01-10', 50000.00, 'maya.iyer@example.com', TRUE),
(104, 'Sundar', 'Raj', 3, '2024-12-05', 62000.00, 'sundar.raj@example.com', FALSE),
(105, 'Priya', 'Nair', 4, '2022-08-20', 68000.00, 'priya.nair@example.com', TRUE),
(106, 'Karan', 'Verma', 1, '2025-11-10', 71000.00, 'karan.verma@example.com', TRUE),
(107, 'Leela', 'Menon', 3, '2023-05-03', 59000.00, 'leela.menon@example.com', TRUE),
(108, 'Vikram', 'Das', NULL, '2024-03-18', 45000.00, 'vikram.das@example.com', FALSE),
(109, 'Anita', 'Singh', 1, '2023-12-30', 90000.00, 'anita.singh@example.com', TRUE),
(110, 'Deepak', 'Rao', 2, '2025-10-20', 48000.00, 'deepak.rao@example.com', TRUE);

-- Projects
INSERT INTO projects VALUES
(201, 'Website Redesign', '2024-09-01', '2025-03-01'),
(202, 'Mobile App', '2025-02-15', NULL),
(203, 'Recruitment Drive', '2025-05-01', '2025-06-30'),
(204, 'Sales Campaign Q4', '2024-10-01', '2024-12-31');

-- Assignments
INSERT INTO emp_proj VALUES
(101,201,120),
(102,202,200),
(105,201,80),
(107,204,150),
(104,204,100),
(103,203,40),
(109,202,180),
(108,201,60),
(106,202,50);

SELECT * FROM employees;
SELECT emp_id,first_name,last_name,salary FROM employees;
SELECT emp_id,first_name,salary
FROM employees
WHERE salary > 50000;
SELECT emp_id,first_name,dept_id,salary
FROM employees
WHERE dept_id = 1 and salary > 50000;
SELECT emp_id,first_name,dept_id,salary
FROM employees
WHERE dept_id = 2 or dept_id = 4;

SELECT emp_id, first_name
FROM employees
WHERE dept_id IS NULL;

SELECT first_name, salary
FROM employees
ORDER BY salary ASC;

SELECT * FROM employees
ORDER BY hire_date DESC
LIMIT 3;

SELECT DISTINCT dept_id FROM employees;

SELECT COUNT(*) AS total_employees,
       AVG(salary) AS avg_salary,
       MIN(salary) AS min_salary,
       MAX(salary) AS max_salary
FROM employees;



