var mongoose = require('mongoose');
const faker = require('faker');
const dummy = require('./dummyDump.js');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

// ========= CREATE DB SCHEMA =============
const MightyDev = mongoose.Schema({
  Hero: {
    firstName: String,
    lastName: String,
    photo: String,
  },
  ATeam: {
    firstName: String,
    lastName: String,
    photo: String,
    email: String,
    phone: Number,
    labels: {
      Children: Boolean,
      Sibling: Boolean,
      Parent: Boolean,
    },
    messageSend: String,
    messageReceive: String,
  },
  MemoryLane: {
    photo: String,
    voices: String,
    favorite: String
  },
  onToday: {
    date: String,
    priority: String,
    social: String,
    exercise: String,
    family: String,
    birthday: String,
  }
})

// =========== CREATE MODEL BASED ON SCHEMA ==============
const MightyData = mongoose.model('MightyData', MightyDev);

const heroURL = dummy.dummyHeroS3;
const ATeamURL = dummy.dummyATeamS3;
const MemLaneURL = dummy.dummyMemLaneS3;

const initializeData = () => {
  // Drop Database
  db.dropDatabase();

   // =========== CREATE SEEDED RECORDS==============

  for (let i = 0; i < 2; i++) {
    const MightyDataGen = new MightyData({
      Hero: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        photo: heroURL[Math.floor(Math.random() * heroURL.length)],
      },
      ATeam: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        photo: ATeamURL[Math.floor(Math.random() * ATeamURL.length)],
        email: faker.internet.email(),
        phone: 6501234567,
        labels: {
          Children: false,
          Sibling: true,
          Parent: false,
        },
        messageSend: 'Hi, can we do something fun today?',
        messageReceive: dummy.randomDescription(),
      },
      MemoryLane: {
        photo: MemLaneURL[Math.floor(Math.random() * MemLaneURL.length)],
        voices: 'PLACEHOLDER, ADD AUDIO FILE URL',
        favorite: faker.random.boolean(),
      },
      onToday: {
        date: Date.now(),
        priority: 'Call Neurologist',
        social: 'Give Jakey a call!',
        exercise: 'Walk for 30 minutes with Sylvia',
        family: 'Make Dinner with Lola',
        birthday: 'Jakes Birthday today!',
      }

    });

    MightyDataGen.save((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Successfully saved seeded record to DB v2!');
      }
    });
  }
};

  // Initialize Data
  // initializeData();

  // ================ RETRIEVE (GET) SAVED DUMY DATA ===============
  const retrieveData = (callback) => {
    // initializeData();
    console.log('reached back end side');
    MightyData.aggregate([{$sample: { size:20 }}]).exec((err, response) => {
    if (err) {
      callback(err);
    } else {
      console.log(response);
      callback(null, response);
    }})
  };

  module.exports = {
    initializeData,
    retrieveData,
  };

// =========== LEGACY CODE ==================
// var itemSchema = mongoose.Schema({
//   quantity: Number,
//   description: String
// });

// var Item = mongoose.model('Item', itemSchema);

// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

// module.exports.selectAll = selectAll;