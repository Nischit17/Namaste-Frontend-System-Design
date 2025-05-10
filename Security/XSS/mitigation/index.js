const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self';" + "script-src 'self' http://unsecure.com"
  );
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const PORT = 3010;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
