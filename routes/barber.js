const router = require('express').Router();
let Client = require('../models/client.model');
const mongoHoursArray = require('../mongoHoursArray');
const cors = require('cors');

router.route('/').get(cors(),(req, res) => {
    Client.find()
        .then(client => res.json(client))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post(cors(),(req, res) => {

    const name = req.body.name;
    const phone = req.body.phone;
    const date = req.body.date;
    const mainKey = req.body.key;
    const dayId = req.body.dayId;

    if (dayId === null) {

    let hours = {};
    for (const key of mongoHoursArray) {
        if (key === mongoHoursArray[mainKey]) {
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
        hours: hours
    });
    
    newClient.save()
        .then(() => res.json('Client added!'))
        .catch(err => res.status(400).json('Error: ' + err));

    } else {
        Client.findById(dayId)
            .then(client => {
                client.hours[mongoHoursArray[mainKey]].name = name;
                client.hours[mongoHoursArray[mainKey]].phone = phone;

                client.save()
                    .then(() => res.json('Client added to existing day!'))
                    .catch(err => res.status(400).json('Error: ' + err));
            })
            .catch(err => res.status(400).json('Error: ' + err));
    }
});

router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;