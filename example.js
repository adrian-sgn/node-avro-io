var sprint = require('sprint');
var DataFile = require(__dirname + "/lib/datafile");

var fileName = process.argv[2];
dataFile = DataFile();
dataFile.open(fileName);
dataFile.read(function(err, data) {
    if (err) 
        console.error(err);
    else {
        if (data.request.path === "/authZ/authorize" && data.response.status == 200)
            console.log(sprint("%30s: %s", data.customer.data.username, data.request.body.productUrl));
    }
});
