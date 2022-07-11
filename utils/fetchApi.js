import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'e2d1a6fb40msh40937bc0416ba5ap105b4djsn2eda93ac903a',
    },
  });
    
  return data;
}



// headers: {
//     'X-RapidAPI-Key': 'ff1ce3cb68mshf3f2cafeea3aef2p10001cjsn626bc47984e8',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }