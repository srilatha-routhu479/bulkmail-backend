const mongoose = require("mongoose");

const credentialSchema = new mongoose.Schema({
  user: String,
  pass: String,
}, { collection: "bulkmail" }); 

const Credential = mongoose.model("Credential", credentialSchema);

module.exports = Credential;
