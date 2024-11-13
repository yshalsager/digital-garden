---
title: Node.js Express
created: 2022-11-13 15:19:47
updated: 2023-08-10 22:45:56
aliases:
  - Node.js Express
share: true
cssclass: ltr
website: en/notes/programming
---

المعرفة:: [[NodeJS|NodeJS]]  
الحالة:: #ملاحظة/مؤرشفة  
المراجع:: [[The Complete Node.js Developer Course 3rd Edition|The Complete Node.js Developer Course 3rd Edition]], [coggro's Notes](https://github.com/coggro/node-notes-2021/tree/main/Section%20007)

---

- Express is a fast, unopinionated, minimalist web framework for [Node.js](http://nodejs.org/).

```bash
npm install express
```

## Getting Started

- The simplest Express app you can create.  

```js
// const express = require('express')
// import express
import express from "express";

// call express to start server
const app = express();
const port = 3000;

// .get takes route and fx for what to do
// args are req object and res object
app.get("/", (req, res) => {
  // Send something back to user
  res.send("Hello World!");
});

// Set the server to listen on a prescribed port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

- This app starts a server and listens on port 3000 for connections and responds with “Hello World!” for requests to the root URL (`/`) or *route*. For every other path, it will respond with a **404 Not Found**.
- [[./Node.js nodemon package|nodemon]] can be used to restart the server on changes.
- `send()` can send text, HTML, or JSON object or array.

```js
res.send(`<h1>Weather</h1>`);
res.send({
  name: `Corey`,
  age: 31,
});
```

## Serving static files

- If we are using [[./JavaScript Modules#Native JavaScript (ES6) Modules]|ES6 Modules]] instead of [[./JavaScript Modules#CommonJS Modules|CommonJS Modules]] we will have to apply [[Node.js __dirname and __filename while using ES6 modules|this workaround]].
- Node's `path.join()` is used to get the full absolute path to the public folder `/public/`.

```js
import { join } from "path";

// .. is one dir up
console.log(`joined path`, path.join(__dirname, `..`, `/public`));
```

- Finally, we set express's `app.use()` to serve static files.

```js
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));
```

## Dynamic Pages with Templating

- [Handlebars template engine](https://handlebarsjs.com/) will be used to serve dynamic content ([on npm](https://www.npmjs.com/package/handlebars)).
- We need to install [hbs - handlebars for express](https://www.npmjs.com/package/hbs) package. `npm i hbs`
- Next, we can set `hbs` as view engine of express.

```js
app.set(`view engine`, `hbs`);
```

- By default, views are expected to be found in `/views/` directory.
- Instead of using `res.send()`, we need to use `res.render(viewName)` to render our views.
- `res.render()` also accepts a second argument which is the dynamic values to pass to the view.

```html:/views/index.hbs
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="/styles/styles.css" />
  </head>
  <body>
    <h1>{{ title }}</h1>
    <p>{{ name }}</p>

    <script src="/scripts/script.js"></script>
  </body>
</html>
```

```js
app.get("", (req, res) => {
  // first arg is view to render
  // second arg is dynamic values to pass
  res.render(`index`, {
    title: `Weather App`,
    name: `Andrew Mead`,
  });
});
```

### Customizing Views and Partials Directories

- We can change the location and name of the views directory.

```js
const viewsPath = path.join(__dirname, '../templates/views');
app.set('views', viewsPath);
```

- Also, we can do the same for partials directory.

```js
import hbs from "hbs";
const partialsPath = path.join(__dirname, '../templates/partials');
hbs.registerPartials(partialsPath);
```

### Partials and Advanced Templating

- Partials are small parts of markup than can exist in different templates, e.g. headers or footers.
- It can help unifying the website look without having much duplicated markup.
- Partials can load in on other pages using `{{>partial}}` syntax.
- [[./Node.js nodemon package|Nodemon]] won't load the changes automatically unless we adjust our nodemon command to `nodemon src/app.js -e js,hbs`. ^e9662e
- We can reference variables in the partial just like we do in normal templates.

```html:/templates/partials/header.hbs
<!-- <h1>Static Header.hbs Text</h1> -->
<h1>{{title}}</h1>

<div>
    <a href="/">Weather</a>
    <a href="/about">About</a>
    <a href="/help">Help</a>
</div>
```

```html
  <body>
    {{>header}}
    <p>{{ name }}</p>
  </body>
```

## Setting up 404 Pages

- Set up `app.get("*", …)` as **the last route** in the app.
  - Express looks for matches in order listed. First, it looks for static pages, then at our routes, including our final wildcard route.
- We can add sub-routes, too.
- Something like this will work **above** the full wildcard:

```js
app.get(`/help/*`, (req, res) => {
  res.send(`Help article not found`);
});

app.get(`*`, (req, res) => {
  res.send(`Page not found`);
});
```

## Query Strings

- A way to send data from browser to the server and get it easily using `req.qurey`.

```js
// http://localhost:3000/products?search=games&rating=5
app.get("/products", (req, res) => {
  console.log(req.query); // {search: "games", rating: "5"}
});
```

- Express doesn't provide a way to force requiring a query, instead we can use simple if statement.

```js
app.get(`/products`, (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: `You must provide a search term`,
    });
  }
  res.send({
    products: [],
  });
});
```

- We can also send back query data normally in response.

```js
app.get(`/weather`, (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: `You must provide a location.`,
    });
  }
  res.send({
    forecast: `The weather forecast is that there will be weather whether or not you can weather it.`,
    location: req.query.address,
  });
});
```
