const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const RagSchema = new Schema({

  ragDomain:String,

  })
const RagModel = model("ragdata",RagSchema)
const DataSchema = new Schema({
  chatbotID:String,
  chatbotName: String,
  combinedData:[],
  domain: String,
}, {
  timestamps: true
});

const DataModel = model("data", DataSchema);

module.exports = { DataModel ,RagModel};
