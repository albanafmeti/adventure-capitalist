# AdVenture Capitalist
*AdVenture Capitalist, the world’s top capitalism simulator!*

## Description

AdVenture Capitalist is a game which allows you to invest in different businesses and gain revenue.

The revenue and expenses are calculated based on a specific formula. Important terms for the game are listed below:

- "Businesses" are the core part of earning money in AdVenture Capitalist. Clicking on a business, starts a timer; when the timer runs out, it makes the listed amount of money. Purchasing more than one business multiplies the earnings linearly.

- "Initial cost" indicates the cost of the first investment in that business. Is multiplied by the coefficient for each subsequent buy.

- "Coefficient", as already described, is the cost multiplier for each additional investment in the respective business. So, for the Car Wash, each additional investment increases in price by 14% every time. Is a constant for each of the businesses.

- "Initial time" is the amount of seconds - in parentheses, of hours - the production cycle of the business needs to complete without any bonuses. Initially, for long production cycles, the ideal time to buy new investments is just before the end of the cycle, as the added profit will be reaped in full at their completion. Gets halved at 25, 50, 100, 200, 300, and 400 of each business' investments and is further halved at the same milestones when all businesses reach them.

- "Initial revenue" refers to the amount of money each investment for that business makes at the end of the production cycle. It multiplies linearly to the amount of investments the player has for the business.

## Demostration

Click in the link below to try the game:

[https://adventure-capitalist.club/](https://adventure-capitalist.club/)

Steps:

- Go to __Register__ and put a username/password and register.
- If successfully registered, fill login credentials and sign in.
- Start playing the game.

Here is a video demostrating the game in action:

[https://drive.google.com/file/d/1NrPkHh_athkbZX__Qmx3CuDq0aOk6Y9o/view](https://drive.google.com/file/d/1NrPkHh_athkbZX__Qmx3CuDq0aOk6Y9o/view)

Here are some screenshots on Desktop:



My game is responsive as well so check some screenshots on mobile:

-


## Implementation

Our Game is built as a full-stack application having back and front end side, using Javascript on both sides.

In the front-end side I used Vue.js, with Nuxt.js which is a wrapper of Vue, organizing the code little better.
In the back-end side I used Node.js with Express. Code organization and architecture, it's all my personal implementation.

Both sides communicate with each other, using REST API, and websocket communication (Socket.io). The REST API is used for stuff like login/register or get list of businesses/managers etc.
Websocket communication is used to store data in the back-end side, every X amount of seconds. So, every 5 seconds I synchronize data calculated in front-end, straight to the back-end side.

The data is stored in a MySQL database.

As an environment I am using **Docker** with **Docker-Compose**. There are 3 services, frontend, backend and the database. Each of them has its *Dockerfile* and deployment stuff for local and production environment.
Based on where you are deploying there is a `docker-compose.yml` and `docker-compose.prod.yml` file, local and production respectively.

## Steps to run locally or in production

In order to setup locally or deploy in production you will need *Docker* and *Docker-Compose* installed on your host machine.

Based on my `docker-compose.yml` contents you should create the Project folder in this path `~/Projects`, so, if you do differently keep in mind to update docker-compose file.

So, go to folder `~/Projects` and run:

```
git clone https://github.com/albanafmeti/adventure-capitalist Game
```

That will create a `~/Projects/Game` directory with our repo contents.

Now based on where you want to run it local/production you should run:

```
# local:

docker-compose build
docker-compose up -d

# production:

docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up -d
```

Based on our mapped ports on our docker-compose file, we can access the front-end app.

Often, when I am working locally, I don't prefer running the front-end via Docker, so you can go to `frontend` directory and run `npm run dev` to run the frontend app.

Both frontend and backend app have their deployment stuff in `deployment` folder which are `.env` files which will be copied once we run the apps with Docker, and `sh` scripts which will start our containers.

### Migrating and Seeding

As an ORM for Mysql we are using Sequelize.
Inside the `backend` folder you will find an `artisan` sh script which I have used to help me run commands inside the containers without the need to run every time `docker-compose ...`

So, let's run the migrations:

```
./artisan sequelize db:migrate
```

And then seed data (businesses, managers etc.)

```
./artisan sequelize db:seed
```

Keep in mind that for production deployment, maybe you would want to host in a specific domain so check `nginx` directory to see virtual hosts configuration for nginx. There is the content for both *adventure-capitalist.club* and *api.adventure-capitalist.club* that I used for my demo app.

## Notes

### What I could do differently

- I implemented a simple user authentication with token based authentication, but it was simple at all. If I had time I would implement a better and more advanced authentication system.

- The progress bars are not looking very well when the money generation speeds up. So, there are some issues with rendering performance, visually. Using Canvas would be better in these cases.

### What I left out

*When you close the game, next time you open it, you should see the money that your businesses made for you. (Businesses continue to make progress while you’re away.)*

This was a feature that was requested in the specifications document, but I figured out it later. So, initially I thought that businesses should generate money while you are away, but the game need to be up and running in the browser.
Then after 4 days I figured out that the businesses should generate money even if you close the game.
So, I left this out because I don't have much time left and maybe this would need any specific change on my current code as well.
