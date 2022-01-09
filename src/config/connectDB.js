const mongoose = require('mongoose');

async function connect () {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_db');
        console.log("Kết nối thành công");
    } catch (err) {
        console.log("Kết nối thất bại");
    }
}

module.exports = { connect }