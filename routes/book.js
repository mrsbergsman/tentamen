findAll = (req, res, next) => {
  req.models.Book.find(req.query).then((books) => { 
    let status   = books.length === 0 ? 404 : 200
    let response = books
    return res.status(status).send(response);
    }).catch((error) => next(error))
}
findOne = (req, res, next) => {
  let {id} = req.params
  req.models.Book.findOne({_id: id}).then((book) => {
    let status   = book === null ? 404 : 200
    let response = book === null ? {} : book
    return res.status(status).send(response);
    }).catch((error) => next(error))
}

create = (req, res, next) => {
  let {body} = req
  req.models.Book.create(body).then((books) => {
    return res.status(201).send(books);
  }).catch((error) => next(error))
}

updateOne = (req, res, next) => {
  let {id} = req.params
  let {body} = req
  req.models.Book.updateOne({_id: id}, body).then((book) => {
    let status   = book.nModified === 0 ? 201 : 200
    let response = book
    return res.status(status).send(response);
  }).catch((error) => next(error))
} 

deleteOne = (req, res, next) => {
  let {id} = req.params
  req.models.Book.deleteOne({_id: id}).then((book) => {
    let status   = book.deletedCount === 0 ? 204 : 200
    let response = book
    return res.status(status).send(response);
  }).catch((error) => next(error))
}

module.exports = {
  findAll,
  findOne,
  create,
  updateOne,
  deleteOne,
}