import { React, useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { CMSContext } from './CMSContext';

export default function Continent() {
    const { continentEntries } = useContext(CMSContext)

    return (
        <div className="container mx-auto">
            {continentEntries.map(c =>
                <div>
                    <Link to="/DestCard">
                    <h1 className="#">{c.header}</h1>
                    </Link>
                    <p className="#">{c.descriptionText}</p>
                    <p className="#">###test</p>
                </div>
            )}
        </div>
    )

}