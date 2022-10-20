
import { React, useContext, useState } from 'react'
import { CMSContext } from '../CMSContext';

const Home = () => {

  const { destinationEntries, continentEntries } = useContext(CMSContext)

  console.log("Home", continentEntries)

  return (

    <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel" data-bs-interval="1000">
      <div className="carousel w-full">
        {continentEntries.map(e =>
          <div className="carousel-item float-left relative w-full">
            <img src={e.carouselImages[0].fields.file.url} className="w-full" />
          </div>
        )}
      </div>
    </div>


    // <div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
    //   <div className="carousel-inner relative w-full overflow-hidden">
    //     {continentEntries.map(e =>
    //       <div className="carousel-item active relative float-left w-full">
    //         <img
    //           src={e.carouselImages[0].fields.file.url}
    //           className="w-full"
    //           alt={`${e.header}`}
    //         />
    //       </div>
    //     )}
    //   </div>
    // </div>

  );



};

export default Home;
