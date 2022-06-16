import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillsSchema = new Schema({
  text: String,
  fontawesome: String,
})

const Skills = mongoose.model('skills', skillsSchema)

export {
  Skills
}