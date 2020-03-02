# people
This application is an example.
You must clone the code on your own computer and then :
1. Try the server in *array mode* (the default version) :

        cd server
        npm install
        npm start
    
Your server app should run on port *8000*. Try it by using  [postman](https://learning.postman.com/)
1. On another terminal, try the client app :

        cd client
        npm install
        npm start
Your default browser should launch the client app on port *3000*.
1. Try the server in *database* mode :
    - If not installed, install the [SQLite database](https://www.sqlite.org/index.html)
    - On server.js file, comment the second line and uncomment the third one as follows :
    
            //const router = require('./router');
            const router = require('./routerDB');
Then try the application

