import { React, useContext, useState } from 'react'
import { CMSContext } from './CMSContext';

export default function DestCard() {

    const { destinationEntries, continentEntries } = useContext(CMSContext)

    return (
        <div className="container mx-auto">
            {destinationEntries.map(d =>
                <div>
                    <img className="object-cover" src={d.destImage.fields.file.url} />
                    <h1 className="#">{d.title}</h1>
                    <p className="#">{d.body}</p>
                    <p className="#">###test</p>
                    <p>{d.travelTime && d.travelTime}</p>
                </div>
            )}
        </div>
    );
}