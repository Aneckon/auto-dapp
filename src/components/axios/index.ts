import axios from 'axios';

export const authAxios = ({ url, data, setAxiosError }: any) => {
  const urlAxios = `https://autodappserver.herokuapp.com${url}`;

  axios
    .post(urlAxios, {
      data,
    })
    .then(function (response) {
      console.log(response);
      setAxiosError(response.data.message);
    })
    .catch(function (error) {
      setAxiosError(error);
    });
};

export const croAxios = ({ setPayCro }: any) => {
  const urlAxios =
    'https://api.coingecko.com/api/v3/simple/price?ids=binancecoin%2Ccrypto-com-chain&vs_currencies=bnb';

  axios
    .get(urlAxios)
    .then(function (response) {
      const res = response.data['crypto-com-chain'].bnb;
      setPayCro(res);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const bnbAxios = ({ setPayBnb }: any) => {
  const urlAxios =
    'https://api.coingecko.com/api/v3/simple/price?ids=binancecoin%2Ccrypto-com-chain&vs_currencies=bnb';

  axios
    .get(urlAxios)
    .then(function (response) {
      const res = response.data.binancecoin.bnb;
      setPayBnb(res);
    })
    .catch(function (error) {
      console.log(error);
    });
};
