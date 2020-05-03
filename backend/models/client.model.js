const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({
    name: {type: String},
    phone: {type: String}
});

const hoursArray = ["9-00", "9-30", "10-00", "10-30", "11-00",
"11-30", "12-00", "12-30", "13-00", "13-30", "14-00",
"14-30", "15-00", "15-30", "16-00", "16-30", "17-00"];

let hours = {};

for (const key of hoursArray) {
hours[key] = formSchema;
}

const clientSchema = new Schema({
  date: String,
  hours
}, {
  timestamps: true
});

const Client = mongoose.model('Hour', clientSchema);

module.exports = Client;