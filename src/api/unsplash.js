import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID MV2AW0Eygz3ptG2pOxzQKCoxQUaHVuJc_EMdT4-QPRk',
  },
});
