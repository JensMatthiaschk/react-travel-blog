import { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';

export const CMSContext = createContext()

export const CMSContextProvider = (props) => {
    const [continentEntries, setContinentEntries] = useState([])
    const [destinationEntries, setDestinationEntries] = useState([])
    const [userPreferences, setUserPreferences] = useState({
        search: null
    })
    const [error, setError] = useState("Warning: Fetching Error!")

    useEffect(() => {
        const client = createClient({
            space: import.meta.env.VITE_DEST_SPACE,
            accessToken: import.meta.env.VITE_DEST_ACCESS_TOKEN,
            host: import.meta.env.VITE_DATABASE_URL
        });
        const entriesDest = client.getEntries(
            {
                content_type: "titel",
                select: "fields"
            })
            .then(res => {
                const sanitizedEntriesDest = res.items.map((item) => {
                    return item.fields
                });
                setDestinationEntries(sanitizedEntriesDest)
            })
        const entriesCont = client.getEntries(
            {
                content_type: "continentTravelInfo",
                select: "fields"
            })
            .then(res => {
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