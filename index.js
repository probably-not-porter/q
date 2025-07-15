const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");

const e_app = express();
e_app.set("view engine", "ejs");
e_app.get("/", function (_req, res) {
    res.render("index", {});
});
e_app.use(favicon(path.join(__dirname, "public", "favicon.png")));

e_app.use(express.static(__dirname + "/public"));
e_app.listen(process.env.PORT || 8000, function () {
    console.info(
        "Express server listening on port %d in %s mode",
        this.address().port,
        e_app.settings.env,
    );
});
