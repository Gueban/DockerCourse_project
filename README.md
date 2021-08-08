# Docker Course project
1st project of Tambo: Docker course

## Requirements
1. Docker
2. Docker Compose
3. Make sure you're not using ports `80, 2800, 2801 and 5200`
4. Git

## Deploy instructions

1. Clone this repository on your machine

2. Enter to DockerCourse_project directory

3. Open docker-compose.yml 

4. Search `54.188.79.21` and replace for your public ip.

5. Create a file called `secret-u.txt` and write `root` to the file.

6. Create a file called `secret-p.txt` and write your password to login to mysql

7. create a container by running `sudo docker run --rm -it mysql sh`

8. Inside the container run
`mysql -u root -p`

9. enter `gueban` as password

10. run command `ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'your password (same as file secret-p.txt)';`

11. create database by running: `create database project;`

12. use the database `use project;`

13. create the table by running `CREATE TABLE IF NOT EXISTS project.Person (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(250) NOT NULL,
  email VARCHAR(250) NOT NULL,
  password VARCHAR(250) NOT NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;`

14. Exit the container and run `docker-compose up -d`

15. if you cant access to the databases try running `curl http://localhost:2800`