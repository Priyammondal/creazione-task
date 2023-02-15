import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const query = req.query;
  console.log("query==>", query);
  let result = 0;
  switch (query.op) {
    case "add":
      result = parseInt(query.a) + parseInt(query.b);
      break;
    case "div":
      result = query.a / query.b;
      break;
    case "mul":
      result = query.a * query.b;
      break;
    case "sub":
      result = parseInt(query.a) - parseInt(query.b);
      break;
    default:
      return result;
  }
  res.status(200).json({
    a: query.a,
    b: query.b,
    op: query.op,
    c: result,
  });
});

app.listen(5050, () => {
  console.log("server connected!");
});
