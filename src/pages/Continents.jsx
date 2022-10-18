import { React, useContext, useState } from 'react'
import { Link } from "react-router-dom";
import { CMSContext } from '../CMSContext';

export default function Continents() {
    const { continentEntries } = useContext(CMSContext)

    return (
        <div className="#">
            {continentEntries.map(c =>
                <Link to={`/ContinentDetail/${c.header}`}>
                    <div className="overflow-hidden">
                        <div className="hover:scale-125 hover ease-in duration-500 flex items-center justify-center mt-2 mb-2" key={c.header}
                            style={{
                                'backgroundImage': "url(" + `${c.continentImage.fields.file.url}` + ")",
                                'backgroundRepeat': 'no-repeat',
                                'backgroundSize': 'cover',
                                'backgroundPosition': 'center',
                                'height': 400,
                            }}
                        ><h1 className="uppercase text-7xl font-extrabold text-slate-50 text-center">{c.header}</h1></div>
                    </div>
                </Link>
            )}
        </div>
    )

}