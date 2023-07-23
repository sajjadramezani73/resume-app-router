const mongoose = require('mongoose')
const Schema = mongoose.Schema

const educationSchema = new Schema({
    title: { fa: { type: String, required: true }, en: { type: String, required: true } },
    university: { fa: { type: String, required: true }, en: { type: String, required: true } },
    location: { fa: { type: String, required: true }, en: { type: String, required: true } },
    dateStart: { fa: { type: String, required: true }, en: { type: String, required: true } },
    dateEnd: { fa: { type: String, required: true }, en: { type: String, required: true } },
    grade: { fa: { type: String, required: true }, en: { type: String, required: true } },
})

module.exports = mongoose.model('Education', educationSchema)