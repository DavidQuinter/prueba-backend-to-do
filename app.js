import express from "express";
import router from "./src/routes/todo.routes.js";
import userRoute from "./src/routes/user.routes.js";
import cors from "cors";


const app = express();
const port = 3080;
const corsOption = {
  origin: "*",
};

//app options
app.use(cors(corsOption));
app.use(express.json())

//routes
app.use("/api", router);
app.use("/api/user", userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
