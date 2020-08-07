const mongoose = require('mongoose');

// Define Agent Schema

const agentSchema = new mongoose.Schema(
  {
    AgentId: Number,
    AgtFirstName: String,
    AgtMiddleInitial: String,
    AgtLastName: String,
    AgtBusPhone: String,
    AgtEmail: String,
    AgtPosition: String,
    AgencyId: Number
  }
);

// Compile and export model using the above Schema.
module.exports = mongoose.model('Agent', agentSchema);
