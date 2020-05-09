const router = require('express').Router();
let Client = require('../models/client.model');

router.route('/').get((req, res) => {
    Client.find()
        .then(client => res.json(client))
        .catch(err => res.status(400).json('Error: ' + err));
});

const hoursArray = ["9-00", "9-30", "10-00", "10-30", "11-00",
    "11-30", "12-00", "12-30", "13-00", "13-30", "14-00",
    "14-30", "15-00", "15-30", "16-00", "16-30", "17-00"
];

router.route('/').post((req, res) => {

    const name = req.body.name;
    const phone = req.body.phone;
    const date = req.body.date;
    const mainKey = req.body.key;
    const dayId = req.body.dayId;

    if (dayId === null) {

    let hours = {};
    for (const key of hoursArray) {
        if (key === hoursArray[mainKey]) {
            hours[key] = {
                name,
                phone
            }
        } else {
            hours[key] = {
                name: null,
                phone: null
            }
        }
    }

    const newClient = new Client({
        date: date,
        hours
    });
    

    newClient.save()
        .then(() => res.json('Client added!'))
        .catch(err => res.status(400).json('Error: ' + err));

    } else {
        Client.findById(dayId)
            .then(client => {
                client.hours[hoursArray[mainKey]].name = name;
                client.hours[hoursArray[mainKey]].phone = phone;

                client.save()
                    .then(() => res.json('Client added to existing day!'))
                    .catch(err => res.status(400).json('Error: ' + err));
            })
            .catch(err => res.status(400).json('Error: ' + err));
    }

});



module.exports = router;