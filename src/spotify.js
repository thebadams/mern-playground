import axios from "axios";
import qs from 'qs'




const getSpotifyToken = async () => {
  var client_id = '8652d9426ee34d088fe1af5c71d4536e'; // Your client id
  var client_secret = 'b6daefd93bb3425788b12724389e742a'; // Your secret
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: client_id,
      password: client_secret,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

const querySpotifyAPI = async (token) => {
  const headers = {
  headers:{
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${token}`
  },
}
  try {
    const response = await axios.get('https://api.spotify.com/v1/search?query=haken&offset=0&type=album', headers)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const API = async () => {
  const token = await getSpotifyToken();
  const data = await querySpotifyAPI(token)
  console.log(data);
}

export default API;