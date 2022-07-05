import axios from 'axios';

export const authAxios = ({ url, data, setAxiosError }: any) => {
  const urlAxios = `http://localhost:4000${url}`;

  axios
    .post(urlAxios, {
      data,
    })
    .then(function (response) {
      setAxiosError(response.data.message)
    })
    .catch(function (error) {
      setAxiosError(error)
    });
};
