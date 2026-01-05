const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    console.log(data.postId);

    const status = data.content.includes("orange") ? "Rejected" : "Approved";
    console.log(status);

    await axios
      .post("http://event-bus-srv:4005/events", {
        type: "CommentModerted",
        data: {
          id: data.id,
          content: data.content,
          postId: data.postId,
          status: status,
        },
      })
      .catch((err) => {
        console.log(err);
      });
  }

  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
