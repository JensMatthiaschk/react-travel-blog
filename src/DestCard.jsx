import { React, useContext, useState } from 'react'
import { CMSContext } from './CMSContext';
import reactMarkdown from 'react-markdown';

export default function DestCard() {

    const { destinationEntries, continentEntries } = useContext(CMSContext)

    return (
        <div className="container mx-auto">
            {destinationEntries.map(d =>
                <div className="mb-20">
                    <div className="flex items-center justify-center mb-10"
                        style={{
                            'background-image': "url(" + `${d.destImage.fields.file.url}` + ")",
                            'background-repeat': 'no-repeat',
                            'background-size': 'cover',
                            'background-position': 'bottom',
                            'height': 800,
                        }}
                    ><h1 className="uppercase text-7xl font-extrabold text-slate-50 text-center">{d.title}</h1></div>
                    <div className="#">{d.body}</div>
                    <p>{d.travelTime && d.travelTime}</p>
                </div>
            )
            }
        </div >
    );
}