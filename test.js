const http = require("http");
const app = require("./server");

const PORT = 3001;

const server = app.listen(PORT, () => {
  http.get(`http://localhost:${PORT}`, (res) => {
    let data = "";

    res.on("data", chunk => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        const response = JSON.parse(data);

        if (
          response.status === "ok" &&
          response.application === "delivery-control-demo"
        ) {
          console.log("Test passed: application health endpoint is working");
          server.close();
          process.exit(0);
        }

        console.error("Test failed: unexpected response", response);
        server.close();
        process.exit(1);
      } catch (error) {
        console.error("Test failed: invalid JSON response");
        server.close();
        process.exit(1);
      }
    });
  }).on("error", (error) => {
    console.error("Test failed:", error.message);
    server.close();
    process.exit(1);
  });
});