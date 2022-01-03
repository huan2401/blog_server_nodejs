
class SiteController {
    home(req, res) {
        res.render('index');
    };
    search(req, res) {
        res.render('../views/pages/search');
    }
}

module.exports = new SiteController;