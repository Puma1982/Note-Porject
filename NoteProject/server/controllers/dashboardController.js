/**GET DASHBOARD */
exports.dashboard = async (req,res) => {
    const locals = {
        title: "Dashboard",
        description: "Free NoteNotes app.",
}
res.render('dashboard/index',{
    locals,
    layout: '../views/layouts/dashboard'
});
}

