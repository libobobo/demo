const handler = require("./handler")
const express = require("express")
const router = express.Router();

//设置路由
router.get("/", handler.showIndex)
      .get("/publish", handler.showPublish)
      .post("/publish", handler.publish)

module.exports = router;