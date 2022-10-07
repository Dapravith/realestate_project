import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '3788edf091msh4a19f78d75222fcp1a4c92jsn430a64e8f28c' ,
    },
  });
    
  return data;
}