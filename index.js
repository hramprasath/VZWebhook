
var router = express.Router(); // get an instance of the express Router
// test route to make sure everything is working (accessed at GET http://localhost:8085/api)
router.get('/', function (req, res) {
    res.json({ message: 'GET request works' });
});
router.post('/webhook', function (req, res) {
    var intent = req.body.result.metadata.intentName;
    switch (intent) {
        case "Initiate":
            return {"im from webhook"};
            break;
        case "Billing":
            res.json(billInquiry());
            break;
        case "yes-initiate":
            res.json(recommendTV());
            break;
        case "Recommendation":
            res.json(recommendTV());
            break;
        default:
            res.json(recommendTV());
    }
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Node server started...');
//# sourceMappingURL=server.js.map
