const dateFns = require('date-fns');

let mongoHours = (openingHour, openingMinutes, numberOfHours) => {
    let arr = [];
    let startHour = dateFns.setMinutes(dateFns.setHours(new Date(), openingHour), openingMinutes);
    for (let i = 0; i < (numberOfHours * 2); i++) {
        arr.push(dateFns.format(startHour, "H-mm"));
        startHour = dateFns.addMinutes(startHour, 30);
    }
    return arr;
};

const mongoHoursArray = mongoHours(9, 0, 8.5);

module.exports = mongoHoursArray;