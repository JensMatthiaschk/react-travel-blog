import { React, useContext, useState } from 'react'
import { CMSContext } from './CMSContext';

export default function DestCard() {

    const { destinationEntry } = useContext(CMSContext)

    console.log("Forwarded Data", destinationEntry)

    return (
        <div className="Card">
            {destinationEntry.map(d =>
                <div>
                    <img src={d.items.fields.destImage.fields.file.url} />
                    <h1>{d.items.fields.title}</h1>
                    <p className="prose content-body">{d.items.fields.body}</p>
                    <p>{d.travelTime && d.items.fields.travelTime}</p>
                </div>
            )}
        </div>
    );
}