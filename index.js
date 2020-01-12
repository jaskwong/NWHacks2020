let express = require('express')
let app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))


app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/html/index.html');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))