var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  (async () => {
    const config = {
      method:'post',
      url: 'http://127.0.0.1:3001/auth/login',
      headers: {
        origin: `http://localhost:3002`,
        credentials: true
      },
      data: {
        username: "sou",
        password: "sou123",
      }
    }

    const login = await axios(config);
    const userId = login.data.data.user_id;
    const token = login.data.data.token;
    
    const getTransaksi = await axios({
      method: 'get',
      url: 'http://127.0.0.1:3001/transaksi/',
      headers: {
        authorization: `Bearer ${token}`,
        origin: `http://localhost:3002`,
        credentials: true,
      },
    });

    const transaksiData = getTransaksi.data;

    console.log(transaksiData);
  })();
  
  res.render('index', { title: 'Express' });
});


// 

module.exports = router;
