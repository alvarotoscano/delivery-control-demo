const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        application: 'delivery-control-demo',
        message: 'CloudBees Unify DevSecOps Demo'
    });
});

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});