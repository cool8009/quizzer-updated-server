const express = require("express");
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
const Urls = require("./settings/staticUrls");

const Routers = require("./routes/Routers");

app.use(cors());
app.use(bodyParser.json());
app.listen(Urls.serverPort, () =>
  console.log(
    `YahalomTests server is running at ${Urls.serverDomain}:${Urls.serverPort}`
  )
);

app.use("/Test",Routers.TestRoutes);
app.use("/Question",Routers.QuestionRoutes);
app.use("/Tag", Routers.TagRoutes);
app.use("/Company", Routers.CompanyRoutes);
app.use("/FieldOfStudy", Routers.FieldOfStudyRoutes);
app.use("/Answer", Routers.AnswerRoutes);
app.use("/TestInstancesRoutes", Routers.TestInstanceRoutes);
app.use("/AnswerInstanceRoutes", Routers.AnswerInstanceRoutes);