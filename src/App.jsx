import { useEffect, useState } from "react";
import useContentful from "./useContentful";
import Images from "./images";

const App = () => {
  const [blog, setBlog] = useState([]);
  const { getBlog } = useContentful();

  useEffect(() => {
    getBlog().then((response) => response && setBlog(response));
  }, []);

  console.log("blog", blog)

  return (
    <div>
      {blog.map((content, index) => (
        <Images key={index} content={content} />
      ))}
    </div>
  );
};

export default App;