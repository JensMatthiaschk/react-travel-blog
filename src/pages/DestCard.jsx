import { React, useContext, useState } from 'react'
import { CMSContext } from '../CMSContext';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

export default function DestCard(id) {

    const { destinationEntries, continentEntries } = useContext(CMSContext)

    // console.log("DestCard", id, destinationEntries[1].travelRegion)

    return (
        <div className="container mx-auto flex flex-wrap justify-center gap-8 ">
            {destinationEntries.map(d => id.id == d.travelRegion ?
                <Link to={`/Destinations/${d.title}`}>
                    <div className="hover:scale-105 hover ease-in duration-200 card w-96 bg-base-100 shadow-xl card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-3xl pb-5 uppercase">{d.title}</h2>
                            <p className="mb-0">{d.body.slice(0, 220)}...</p>
                        </div>
                        <figure><img src={d.destImage.fields.file.url} className="hover:scale-110 hover ease-in duration-200 h-60 w-full" alt="Shoes" /></figure>
                    </div>
                </Link>
                : "")
            }
        </div >
    );
}