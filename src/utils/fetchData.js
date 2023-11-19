export const exerciseOptions = {
    method: 'GET',
    headers: {
       
           'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
           'X-RapidAPI-Key': '63ca411424msh5c444e6df0af4c0p1239c7jsnf330660faee9'
    }
  };
  
  export const youtubeOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '63ca411424msh5c444e6df0af4c0p1239c7jsnf330660faee9',
      // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData= async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}