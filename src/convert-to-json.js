const fs = require("fs");
const recipes= require("./fake-data");

const file_name = "recipes.json";
fs.writeFileSync(file_name,
    JSON.stringify(recipes),
    "utf-8",
    );

    console.log("Done!");

