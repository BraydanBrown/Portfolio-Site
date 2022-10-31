# Portfolio-Site #
- Web &amp; Script Programming Assignment2

Website made using ExpressJS and NodeJS


# Sources #
- Bootstrap documentation and examples:
    - https://getbootstrap.com/docs/5.2/getting-started/introduction/

# EJS Skeleton Website Information #
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website

# Additional Information #

# run app #
- Powershell: "$env:DEBUG='myapp:*'; npm start:" -> run app using node

# adding new page to website #
- go to \routes
    - create new js file
    - add new route to app.js
        - var indexRouter = require('./routes/index');
            - replace index with new js file name
- go to \views
    - create new ejs file
    - add new route to app.js
        - app.use('/', indexRouter);
