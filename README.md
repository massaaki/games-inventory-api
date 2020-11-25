## Won Games
Game inventory API

## Starting a project

1. Set Database informations in docker-compose file

```
docker-compose-up
```

2. Navigate to /api folder and run
```
npm run develop
```

3. The project will be running on port 1337
```
http://localhost:1337
```

4. Create a admin user

5. Set /popular router to public in settings->roles->public->edit

6. Send a post to http://localhost:1337/games/populate?query(optional), and wait crawler save informations into your database

7. Enjoy! now you can be fun in graphql playground
```
http://localhost:1337/graphql
```
