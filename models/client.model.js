const mongoose = require('mongoose');
const mongoHoursArray = require('../mongoHoursArray');

const Schema = mongoose.Schema;

const formSchema = new Schema({
    name: {type: String},
    phone: {type: String}
});

let hours = {};

for (const key of mongoHoursArray) {
hours[key] = formSchema;
}

const clientSchema = new Schema({
  date: String,
  hours
}, {
  timestamps: true
});

const Client = mongoose.model('Client', clientSchema);
 
module.exports = Client;