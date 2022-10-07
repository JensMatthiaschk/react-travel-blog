import { createClient } from "contentful";
import './App.css'

const useContentful = () => {
  const client = createClient({
    space: "qiq9w8fj2md5",
    accessToken: "WNQszWbpf5NAWJLTmFTPYa3CH7uTBUr5NPLo1cYFttA",
    host: "cdn.contentful.com"
  });

  const getBlog = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "titel",
        select: "fields"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const destinationImage = item.fields.destinationImage[0].fields;
        return {
          ...item.fields,
          destinationImage
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching content ${error}`);
    }
  };

  return { getBlog };
};

export default useContentful;