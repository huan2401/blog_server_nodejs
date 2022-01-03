const siteRouter = require('./siteRouter');
const newsRouter = require('./newsRouter');

function router(app) {
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = router;