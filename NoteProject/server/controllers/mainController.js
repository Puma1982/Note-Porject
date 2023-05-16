/**
 * GET /HOMEPAGE
 */
exports.homepage = async (req, res) => {
  const locals = {
    title: "NoteNotes",
    description: "Free Note App.",
  }
  res.render('index', {
    locals,
    layout: '../views/layouts/front-page'
  });
}
/**
 * GET /ABOUT
 */
 exports.cal = async (req, res) => {
  const locals = {
    title: "About Calendar",
    description: "Calendar App",
  };

  res.render("calendar", {
    locals,
    layout: "../views/layouts/calOutput",
  });
};
