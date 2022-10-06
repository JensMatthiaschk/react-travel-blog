import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [blogData, setBlogData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // setLoading(true)
    fetch(`https://cdn.contentful.com/spaces/qiq9w8fj2md5/environments/master/entries?access_token=WNQszWbpf5NAWJLTmFTPYa3CH7uTBUr5NPLo1cYFttA`)
      .then(response => {
        if (response.ok) {
          // console.log(response)
          return response.json();

        }
        throw new Error('Request failed!');
      }, networkError => console.log(networkError.message)
      )
      .then(data => {
        setBlogData(data);
        // setLoading(false);
        // console.log(data.items);
      })
      .catch((error) => {
        setError(error);
        // setLoading(false);
      });
  }, [])

  console.log(blogData && blogData.items[0].fields.test1)

  return (
    <div className="App">
      <h1>{blogData && blogData.items[0].fields.title}</h1>
      <p>{blogData && blogData.items[0].fields.body}</p>
      <img src={blogData && blogData.includes.Asset[0].fields.file.url + '?w=250'} alt="" />
      <ul>
        {blogData && blogData.items[0].fields.test1.map((item) =>
          <li>{item}</li>
        )}
      </ul>
    </div>
  )
}

export default App

