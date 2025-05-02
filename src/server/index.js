import express from "express";
import cors from "cors";
import * as React from "react";
import ReactDOM from "react-dom/server";
import { matchPath } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import serialize from "serialize-javascript";
const bodyParser = require("body-parser");
import App from "../shared/App";
import routes from "../shared/routes";
import ItemsRouter from "./router/itemRouter";
import UserRouter from "./router/UserRouter.js";
import OrderRouter from "./router/OrderRouter.js";

const app = express();

app.use(cors());
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/items", ItemsRouter);
app.use("/api/order", OrderRouter);
app.use("/api/user", UserRouter);

app.get("*", (req, res, next) => {
  const activeRoute =
    routes.find((route) => matchPath(route.path, req.url)) || {};

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise
    .then((data) => {
      const markup = ReactDOM.renderToString(
        <StaticRouter location={req.url}>
          <App serverData={data} />
        </StaticRouter>
      );

      res.send(`
      <!DOCTYPE html>
      <html>
        <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
          <title>SSR123 with React Router</title>
          <script src="/bundle.js" defer></script>
          <link href="/main.css" rel="stylesheet">
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>

        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `);
    })
    .catch(next);
});

//error handling

app.use((error, req, res, next) => {
  console.log('error',error);
  
  res.status(500).json({ error });
});

require("./mongoose/db.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
