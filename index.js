const express = require('express');

function rootCall(req,res) {

    res.send('thank you very much fahim');

}
const app = express();

app.get('/',rootCall);
app.listen(3000,()=>console.log('Listen port to 3000'));