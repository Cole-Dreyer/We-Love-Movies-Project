const service = require("./theaters.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//The list function either will return all theaters with movies showing listed
// or filter the thearters depending on if the moveId is present.

async function list(req, res) {
  const { movieId } = req.params;
  const data = await service.list(movieId);
  res.json({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};
