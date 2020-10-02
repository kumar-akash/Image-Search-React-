import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID 3KqzZHBr-K6ojOGVd_jg-gVHj_ydqi5l7ye2sJhHQX0",
      }
});