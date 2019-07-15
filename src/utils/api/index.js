import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  responseType: 'json',
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_API_ACCESS_KEY}`,
    'Accept-Version': 'v1',
  },
});
