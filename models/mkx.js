var mongoose = require('mongoose');

var mkxSchema = new mongoose.Schema({
    name: String,
    charImage: String,
    variations: {
        vOne: { name: String, img: String},
        vTwo: { name: String, img: String},
        vThree: { name: String, img: String}
    }
});

var MKX = mongoose.model("MKX", mkxSchema);

// MKX.create({
//     name: 'Tanya',
//     charImage: 'https://res.cloudinary.com/reyes181/image/upload/v1535065941/mkx/Tanya.png',
//     variations: {
//         vOne: { name: 'Pyromancer', img: 'https://res.cloudinary.com/reyes181/image/upload/v1535065942/mkx/tanya_pyromancer.png'},
//         vTwo: { name: 'Kobu Jutsu', img: 'https://res.cloudinary.com/reyes181/image/upload/v1535065942/mkx/tanya_kobujutsu.png'},
//         vThree: { name: 'Dragon Naginata', img: 'https://res.cloudinary.com/reyes181/image/upload/v1535065941/mkx/tanya_dragonnaginata.png'}
//     }
// });

module.exports = MKX;