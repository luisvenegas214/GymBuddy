// Import necessary dependencies as needed

// Define exerciseOptions and youtubeOptions objects outside the component
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '2287f98a63msh640cd6493ee3866p162ac4jsna3c629f14532',
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
  
  const FetchData = () => {
    // Your component code here
    return (
      <View>
        <Text>This is the FetchData component.</Text>
      </View>
    );
  };
  
  export default FetchData;
  