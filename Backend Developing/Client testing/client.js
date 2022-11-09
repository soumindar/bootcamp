const axios = require('axios');

(async () => {
  try {
    const resLogin = await axios.post('http://127.0.0.1:3001/auth/login', {
                              username: 'sou',
                              password: 'sou123'
                            });
    const userId = resLogin.data.data.user_id;
    const token = resLogin.data.data.token;

    const config = {
      method: 'get',
      url: 'http://127.0.0.1:3001/transaksi/',
      headers: {
        "authorization": `Bearer ${token}`
      }
    }
    const resGetTransaksi = await axios(config);
    const transaksiData = resGetTransaksi.data;
    console.log(transaksiData);
  } catch (error) {
    console.log(error);
  }
})();