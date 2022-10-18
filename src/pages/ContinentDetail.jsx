import { React, useContext, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { CMSContext } from '../CMSContext';
import ReactMarkdown from 'react-markdown';
import DestCard from './DestCard';

export default function ContinentDetail() {
    const { continentEntries, destinationEntries } = useContext(CMSContext)
    const { id } = useParams();

    // console.log("ContinentDetail", id, destinationEntries[0].travelRegion)

    return (
        // <h1>{id}</h1>
        //Kontinent Info here
        //then cards with destinations
        <>
            <div className="mx-auto">
                {continentEntries.map(d => id == d.header ?
                    <div className="detailPage mb-20">
                        <div className="imageContainer flex items-center justify-center mb-10"
                            style={{
                                'backgroundImage': "url(" + `${d.continentImage.fields.file.url}` + ")",
                                'backgroundRepeat': 'no-repeat',
                                'backgroundSize': 'contain',
                                'backgroundPosition': 'center',
                            }}
                        ><h1 className="uppercase text-7xl font-extrabold text-slate-50 text-center">{d.header}</h1></div>
                        <ReactMarkdown>{d.descriptionText}</ReactMarkdown>
                        <p>{d.travelTime && d.travelTime}</p>
                    </div>
                    : "")
                }
            </div >
            <h2>Explore travel destinations in that region</h2>
            <DestCard id={id} />
        </>
    )

}