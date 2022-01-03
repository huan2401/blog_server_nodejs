
class NewsController {
    index(req, res) {
        res.render('../../resource/views/pages/news');
    };
}

module.exports = new NewsController;