/**
 * GET /HOMEPAGE
 */
exports.homepage = async (req, res) => {
  const locals = {
    title: "NoteNotes",
    description: "Free NodeJS Notes App.",
  }
  res.render('index', {
    locals,
    layout: '../views/layouts/front-page'
  });
}
/**
 * GET /ABOUT
 */
exports.about = async (req, res) => {
  const locals = {
    title: "About - NoteNotes",
    description: "Free NodeJS Notes App.",
  }
  res.render('about', locals);
},
exports.features = async (req, res) => {
  const locals = {
    title: "Features - NoteNotes",
    description: "Free NoteNotes App.",
  }
  res.render('features', locals);
},
exports.time = async (req, res) => {
  const locals = {
    title: "Time - NoteNotes",
    description: "Free NoteNotes App.",
  }
  res.render('time', locals);
}
