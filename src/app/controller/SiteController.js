const Course = require('../models/course');
class SiteController {
    home(req, res) {
        Course.find({}, function (err, courses) {
            if(!err){
                res.json({courses})
                return;
            }else {
                res.status(400).json({err: "Lỗi"});
            }
          });

        // res.render('index');
    };
    search(req, res) {
        res.render('../views/pages/search');
    }
}

module.exports = new SiteController;