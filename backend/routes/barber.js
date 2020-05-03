const router = require('express').Router();
let Client = require('../models/client.model');

router.route('/').get((req, res) => {
    Client.find()
        .then(hours => res.json(hours))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
    
    const hoursArray = ["9-00", "9-30", "10-00", "10-30", "11-00",
    "11-30", "12-00", "12-30", "13-00", "13-30", "14-00",
    "14-30", "15-00", "15-30", "16-00", "16-30", "17-00"];

    const name = req.body.name;
    const phone = req.body.phone;
    const date = req.body.date;
    const key = req.body.key;
    
    const newHour = new Client({ 
        date: date,
        hours:{ 
           [hoursArray[key]]: {
                name,
                phone
            } 
        }
    });

    newHour.save()
        .then(() => res.json('Hour added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;