const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const messagesRoutes = require("./routes/messages.js");
const servicesRoutes = require("./routes/services.js");
const app = express();

app.use(bodyParser.json({limit: "50mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
app.use(cors());

app.use("/api/messages", messagesRoutes);
app.use("/api/services", servicesRoutes);

const PORT = process.env.PORT || 3001;
/* process.env.MONGODB_CONNECTION */
mongoose
  .connect(
    "mongodb+srv://mahmoudalmoukhtar10:aPxXXAo9CGahqVTo@cluster0.tavp1if.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("success connection database");

    app.listen(PORT, () => {
      console.log(`success listning on ${PORT}`);
    });
  })
  .catch(err => {
    console.log("error connection database!!!");
    console.log(err.message);
  });
