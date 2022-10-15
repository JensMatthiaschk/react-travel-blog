import { createClient } from "contentful";
import './App.css'

const useContentful = () => {
  // const client = createClient({
  //   space: import.meta.env.VITE_SPACE,
  //   accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  //   host: "cdn.contentful.com"
  // });
  const client = createClient({
    space: "qiq9w8fj2md5",
    accessToken: "WNQszWbpf5NAWJLTmFTPYa3CH7uTBUr5NPLo1cYFttA",
    host: "cdn.contentful.com"
  });


  const getBlog = async () => {
    try {
      const countries = await client.getEntries({
        content_type: "titel",
        select: "fields"
      });
      // console.log('countries',countries)
      const countryEntries = countries.items.map((item) => {
        const countryImage = item.fields.destImage.fields.file;
        return {
          ...item.fields,
          countryImage
        };
      });
      // console.log('country entries',countryEntries)
      // // for continents
      const continents = await client.getEntries({
        content_type: "continentTravelInfo",
        select: "fields"
      });
      // console.log('continents----', continents.items)
      const continentEntries = continents.items.map((item) => {
        const continentImages = item.fields.carouselImages.map(item => item.fields.file);
        return {
          ...item.fields,
          continentImages
        };
      });
      
      console.log('--------')
      // console.log('continents', continentEntries)
      // console.log('countries', countryEntries)
      // // // the next few lines changes the two arrays to objects 
      // // // For continents, the keys are contId 
      // // // For countrires, the keys are entryId
      const objContinent = {}
      continentEntries.map((item) => {objContinent[item.contId]=item});
      
      // // const objCountry = countryEntries.reduce(
      // //   (obj, cur) => ({...obj, [cur.entryId]: cur}), {})
      
      
      // const n = countryEntries.length;
      // console.log(n)
      // const combined = {...objContinent}
      // combined.africa['selected'] = countryEntries.slice(n-7,n-2) 
      // combined.asia['selected'] = countryEntries.slice(n-2,n-7)
      // combined.europe['selected'] = countryEntries.slice(n-2,n+1)
      // console.log('combined', combined)

      const mergedArray = [continentEntries, countryEntries];
      
      return mergedArray;//countryEntries;//.concat(continentEntries);
    } catch (error) {
      console.log(`Error fetching content ${error}`);
    }
  };
  return { getBlog };
};

export default useContentful;