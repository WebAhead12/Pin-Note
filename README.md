# Pin Note
Pin any task / note you have

DB Scheme
![](https://i.imgur.com/xR0i1Tx.png)

## Server Routes
 - "/" -> (index.html) gets you to the first page which you login on it
 - POST "/log-in -> logs in the user in the db and cookie
 - GET "/notes" notes.html
 - GET "/notes/data" gets the data from the db

## Folder Structure
- Main Folder:
    - Database
        - connection.js 
        - init.sql
    - Middleware:
        - verifyUser.js
    - Handlers
        - logIn.js
        - notes.js
    - server.js
    - router.sj
    - public
        - index.html
        - style.css
        - notes.html
        - notes.css
        - index.js
        - notes.js
    - .env
    - package.json †

## Features
- add/save notes which u can write in them
- drag notes and place them whereever you want
- edit/delete notes
- login
- filter between completed and uncompleted notes

## WireFrames
### HomePage:
![](https://i.imgur.com/89x9miP.png)

### NotesPage (pc):
![](https://i.imgur.com/Djv3Kzr.png)

### NotesPage (phone):
![](https://i.imgur.com/FmCkusV.png)


## Work Distribution
script.js: Julio + Zahi <br>
CSS: Zahi + diana<br> 
index.html: Zahi + Julio +diana<br>
server.js/database: Julio + Zahi<br>


