# iOStock-API
An API for authenticating users, registering and listing products and registering and listing inventory movements. Developed in NodeJS.

# Instalação:
It is important that when cloning the application, execute the command "npm i" to install all project dependencies listed in the package.json file.

For the database to function normally, it is important that the following steps are followed:

1 - Create a MySQL database on your machine with the name "io_stock".

2 - Enter the directory "src" and the folder "database", with that, you will find a file called db.js.

3 - In line 3 of the file, replace the words "root" with your MySQL user and the numbers "1117" with your MySQL password.

4 - Now go to the "models" folder in the "src" directory.

5 - Access the "Product.js", "StockMove.js" and "User.js" files.

6 - In these files you will find a commented line like this: "//Product.sync({force: true});" , it is important that in the first execution of the program this line is
uncommented so that it creates the corresponding table in its database. After the first execution of the program, the line
be commented so that it will not be executed again, otherwise the database will recreate all tables at each execution!
Remembering that these lines of code that execute this command are found in all files in the "models" folder and it is important
that this step is completed on all these files.

7 - With that, the database will be ready for use and in perfect working order.

# Execução

To start the API, just run the command "yarn dev".

![StockAPI](https://user-images.githubusercontent.com/68878604/100753642-d7af5580-33c8-11eb-88bb-b33f1a3a73ae.PNG)
