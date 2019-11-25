"use strict"

var path = require("path")
var express = require("express")
var cors = require("cors")
var expressStaticGzip = require("express-static-gzip")

var app = express()
var port = process.NODE_ENV || 8080

// app.use(express.static(path.join(__dirname, "dist")))
// app.use(express.static(path.join(__dirname, "public")))

app.use(
  "/",
  expressStaticGzip("dist", {
    enableBrotli: true,
    customCompressions: [
      {
        encodingName: "deflate",
        fileExtension: "zz",
      },
    ],
    orderPreference: ["br", "gz"],
  })
)

app.use(cors())

app.get("*/*", (_, res) =>
  res.sendFile(path.join(__dirname, "dist/index.html"))
)
app.listen(port, () =>
  console.log(`Development server is running at: http://localhost:${port}/`)
)
