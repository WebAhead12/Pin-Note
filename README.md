# Pin Note
## Are you a hot mess.  😨
## Do you feel uslees at the end of the day.  💩
## then this website is for you. 👍
## just for today you can create your on Pin-note for just 1.99💲

DB Scheme
![](https://i.imgur.com/xR0i1Tx.png)

## Server Routes
 - "/" -> (index.html) gets you to the first page which you login on it
 - POST "/log-in" -> logs in the user in the db and cookie
 - POST "/sign-up" -> creates the user in the db
 - GET "/log-out" -> logs out the user from the website
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

#not compatible with phones 


## Work Distribution
javascript: Julio + Zahi <br>
CSS: Zahi + diana<br> 
html: Zahi + Julio +diana<br>
Backend: Julio <br>


