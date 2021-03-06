var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').Pool;

var config = {
    user: 'muruga121',
    database: 'muruga121',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));

var articles = { 
'article-one': {
    title: 'Article One | Murugaprasaad',
    heading: 'Article one',
    Date: 'Sep 5,2016',
    content:
	`
    <p>
               Hi Everyone! I'm Murugaprasaad the developer of this webapp....
    </p>
    <p>
               In the next few pages , I will be introducing about myself.
    </p>`
    
},    
'Personal Info': {
    title: 'Personal Info | Murugaprasaad',
    heading: 'Personal Info',
    Date: 'Sep 15,2016',
    content:`
    <p>
    This is the content for my second article.This is the content for my second article.
    </p>`
},
'Hobbies': {
    title: 'Hobbies | Murugaprasaad',
    heading: 'Hobbies',
    Date: 'Sep 25,2016',
    content:`
    <p>
    This is the content for my third article.This is the content for my third article.
    </p>`
}
};

function createTemplate (data) {
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmlTemplate = `
<html>
  <head>
  <title>
  ${title}
    </title>
    <meta name="viewport" content="width=device width, initial-scale=1" />
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
<body>
  <div class="container">
<div>
<a href = "/">Home</a>
  <hr/>
  <h3>
${heading}
  </h3>
  <div>
${date}
  </div>
  <div>
   ${content}
  </div>
  </div>
</div>
</body>
</html>
`;
return htmlTemplate;
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new pool(config);
app.get('/test-db', function (req,res) {
  //Make a select request
  //Return a response with the result
  if (err){ 
      res.status(500).send(err.toString);
  } else {
      res.send(JSON.stringify(result.rows));
  }
});


var counter = 0;
app.get('/counter', function(req,res) {
counter = counter + 1;
res.send(counter.toString());
});

app.get('/article-one', function(req,res) {
res.send(createTemplate(articles['article-one']));
});

app.get('/article-two', function(req,res) {
res.send('Article two requested and will be served here');
});

app.get('/article-three', function(req,res) {
res.send('Article three requested and will be served here');
});
app.get('/ui/style.css', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names = [];
app.get('/submit-name', function(req,res) { // URL: /submit-name?name=xxxxx
var name = req.params.name;
names.push(name);
//JSON:Javascript Object Notation

res.send(JSON.stringify(names));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});