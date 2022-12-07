const app = require("./app");

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Server is Closing gracefully!🧨");
    process.exit(1);
  });
});
