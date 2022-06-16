function index(req, res) {
  res.render('skills', {
    title: "Skills"
  })
}

export {
  index
}