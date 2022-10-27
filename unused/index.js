let connect = require('connect');

let app = connect();

function about(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('About Me');
}

function contact(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Contact Me');
}

function home(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Home Page');
}

app.use(home);
app.use('/about', about);
app.use('/contact', contact);

app.listen(3000);

console.log('Server running at http://localhost:3000/');
