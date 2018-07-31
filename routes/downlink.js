var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var deviceID = req.query.device;
    console.log(deviceID);

    if(typeof(deviceID) == "undefined")
        return res.status(404).json({"error":"Lack of device param"});
    else {

        if(req.query.ack === 'true'){
            var dl_response = {};
            dl_response[deviceID] = {'downlinkData':'0102030405060708'};
            return res.status(200).json(dl_response);
        } else
            return res.status(200).json({"success":"Uplink received!"});
    }
});

module.exports = router;
