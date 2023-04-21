/**
 * GET /
 * Homepage 
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
 * GET /
 * About 
*/
exports.about = async (req, res) => {
  const locals = {
    title: "About - NodeJs Notes",
    description:"About NoteNotes",
  }
  res.render('about', locals);
}