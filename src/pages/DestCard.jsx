import { React, useContext, useState } from 'react'
import { CMSContext } from '../CMSContext';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

export default function DestCard() {

    const { destinationEntries, continentEntries } = useContext(CMSContext)
    console.log("yep", destinationEntries)

    return (
        <div className="container mx-auto flex flex-wrap justify-center gap-8 ">
            {destinationEntries.map(d =>
                <Link to={`/DestinationDetail/${d.title}`}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{d.title}</h2>
                            <p>{d.body.slice(0, 200)}...</p>
                        </div>
                        <figure><img src={d.destImage.fields.file.url} alt="Shoes" /></figure>
                    </div>
                </Link>
            )
            }
        </div >
    );
}