const express = require('express')
const router = express.Router()

const book = require('./book.js')

router.get("/books", book.findAll)
router.get("/books/:id", book.findOne)
router.post("/books", book.create)
router.put("/books/:id", book.updateOne)
router.delete("/books/:id", book.deleteOne)

module.exports = router