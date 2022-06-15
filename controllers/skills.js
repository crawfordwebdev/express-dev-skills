import { skills } from '../data/skill-data.js';

function index(req, res) {
  res.render('skills', {
    title: "Skills",
    skills: skills
  })
}

export {
  index
}