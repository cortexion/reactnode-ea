
Live app:
https://reactnode-ea.herokuapp.com/

Tips:

Install and start:
npm install
npm run start
Go to localhost:8080

For local DB:
import movies-compact.json into your Mongo database "newdb" on port 27017

Frontend:
npm run start:react
- runs on localhost:1234 -> live development frontend

Backend:
npm run start
- runs on localhost:8080 -> built frontend served on browser

Build frontend:
npm run build
- will build frontend that is served on localhost:8080

git status
git add .
git commit -m "make it better"
git push heroku master