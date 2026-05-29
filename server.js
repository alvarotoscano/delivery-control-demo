const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    application: "delivery-control-demo",
    message: "CloudBees Unify DevSecOps Demo"
  });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;