import { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';
import database from '../database.json';

export const CMSContext = createContext()

export const CMSContextProvider = (props) => {
    const [continentEntries, setContinentEntries] = useState([])
    const [destinationEntries, setDestinationEntries] = useState([])
    const [userPreferences, setUserPreferences] = useState({
        search: null
    })
    const [error, setError] = useState("Warning: Fetching Error!")

    console.log("Destinations", destinationEntries)
    console.log("Continents", continentEntries)

    useEffect(() => {
        // const client = createClient({
        //     space: import.meta.env.VITE_DEST_SPACE,
        //     accessToken: import.meta.env.VITE_DEST_ACCESS_TOKEN,
        //     host: import.meta.env.VITE_DATABASE_URL
        // });
        // const entriesDest = client.getEntries(
        //     {
        //         content_type: "titel",
        //         select: "fields"
        //     })
        fetch('http://localhost:8080')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                const sanitizedEntriesDest = res.items.map((item) => {
                    return item.fields
                });
                setDestinationEntries(sanitizedEntriesDest)

            })
        fetch('http://localhost:8080')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                const sanitizedEntriesCont = res.items.map((item) => {
                    return item.fields
                });
                setContinentEntries(sanitizedEntriesCont)
            })
            .catch(err => console.log(err))

    }, [])


    return <CMSContext.Provider value={
        {
            continentEntries,
            setContinentEntries,
            destinationEntries,
            setDestinationEntries,
            userPreferences,
            setUserPreferences
        }
    }>
        {props.children}
    </CMSContext.Provider>
}
export default CMSContextProvider