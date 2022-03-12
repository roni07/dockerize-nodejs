const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Docker is running'))

app.listen(3000, () => {
    console.log('My ap is running at port 3000');
})