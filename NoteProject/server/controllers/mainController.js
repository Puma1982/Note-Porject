/**GET HOMEPAGE */
exports.homepage = async (req,res) => {
    const locals = {
        title: "NoteNotes",
        description: "Free NoteNotes app.",
}
res.render('index', locals);
}
  /**GET ABOUT */
exports.about = async (req,res) => {
    const locals = {
        title: "About NoteNotes",
        description: "Free NoteNotes app.",
};
res.render('about', locals);
}


