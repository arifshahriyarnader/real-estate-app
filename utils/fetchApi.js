import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi =async (url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '0a743e36d7msh9bc353ff62e3e9ap1761cdjsn04ddfffa0e86'
          }
    })
    return data;
}