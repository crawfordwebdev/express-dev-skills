import { Skills } from '../models/skills.js'

function index(req, res) {
  Skills.find({})
  .then(skills => {
    res.render('skills/index', {
      title: "Skills List",
      skills: skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req, res) {
  res.render('skills/new', {
    title: "Add a new skill",
  })
}

function create(req, res) {
  Skills.create(req.body)
  .then(skill => {
    console.log(skill)
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function show(req, res) {
  Skills.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  Skills.findByIdAndDelete(req.params.id)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function updateSkill(req, res) {
  Skills.findByIdAndUpdate(req.params.id, req.body)
  .then(skill => {
    console.log("Updated Skill: ", skill)
    res.redirect(`/skills/${req.params.id}`) // redirect to force the refresh
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function edit(req, res) {
  Skills.findById(req.params.id)
  .then(skill => {
    res.render('skills/edit', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
  edit,
  updateSkill as update,
}