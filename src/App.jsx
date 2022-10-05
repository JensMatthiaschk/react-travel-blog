import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch(`https://cdn.contentful.com/spaces/qiq9w8fj2md5/environments/master/entries?access_token=WNQszWbpf5NAWJLTmFTPYa3CH7uTBUr5NPLo1cYFttA`)
      .then(response => {
        if (response.ok) {
          console.log(response)
          return response.json();

        }
        throw new Error('Request failed!');
      }, networkError => console.log(networkError.message)
      ).then(data => {
        setBlogData(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [])

  console.log(blogData.items)

  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <img src={`${blogData.items[0].fields.destinationImage[0].sys.id}`} alt="" /> */}
    </div>
  )
}

export default App
