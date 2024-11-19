USE TestSync;

SELECT * FROM Users;
SELECT * FROM Projects;
SELECT * FROM Project_Roles;
SELECT * FROM Meetings;
SELECT * FROM Project_Assignments;

DESCRIBE Users;
DESCRIBE Projects;
DESCRIBE Project_roles;
DESCRIBE Project_Assignments;
SELECT * FROM Project_Assignments WHERE project_id = 13;