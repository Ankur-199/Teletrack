const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors()) // Remove the extra cors() call

app.get("/", (req, res) => {
  // ...
})

app.post("/", async (req, res) => {
  const { email, password } = req.body

  try {
    const check = await collection.findOne({ email: email })

    if (check) {
      res.json("exist")
    } else {
      res.json("notexist")
    }

  } catch (e) {
    res.json("fail")
  }
})

app.post("/signup", async (req, res) => {
  const { email, password } = req.body

  const data = {
    email: email,
    password: password
  }

  try {
    const check = await collection.findOne({ email: email })

    if (check) {
      res.json("exist")
    } else {
      res.json("notexist")
      await collection.insertOne(data) // Use insertOne instead of insertMany
    }

  } catch (e) {
    res.json("fail")
  }
})

app.listen(8000, () => {
  console.log("port connected");
})