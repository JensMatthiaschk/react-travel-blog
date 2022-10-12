import { createClient } from "contentful";
import './App.css'

console.log(import.meta.env)

const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_SPACE,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
    host: "cdn.contentful.com"
  });



  const getBlog = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "titel",
        select: "fields"
      });
      console.log("before sanitation", entries)
      const sanitizedEntries = entries.items.map((item) => {
        return item.fields
        const destinationImage = item.fields.destImage.fields.file;
        console.log("item", item)
        return {
          ...item.fields,
          destinationImage
        };
      });
      console.log("sanitized", sanitizedEntries)
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching content ${error}`);
    }
  };

  return { getBlog };
};

export default useContentful;