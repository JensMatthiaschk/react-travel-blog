import { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { preview } from 'vite';

export const CMSContext = createContext()

export const CMSContextProvider = (props) => {
    const [continentEntries, setContinentEntries] = useState([])
    const [destinationEntries, setDestinationEntries] = useState([])
    const [userPreferences, setUserPreferences] = useState({
        search: null
    })
    const [error, setError] = useState(null)

    // const client = createClient({
    //     space: import.meta.env.VITE_SPACE,
    //     accessToken: import.meta.env.VITE_ACCESS_TOKEN,
    //     host: import.meta.env.VITE_DATABASE_URL
    // });

    // const getDest = async () => {
    //     try {
    //         const entries = await client.getEntries({
    //             content_type: "titel",
    //             select: "fields"
    //         });
    //         console.log("before sanitation", entries)
    //         const sanitizedEntries = entries.items.map((item) => {
    //             return item.fields
    //         });
    //         console.log("sanitized", sanitizedEntries)
    //         setDestinationEntry(sanitizedEntries);
    //     } catch (error) {
    //         console.log(`Error fetching content ${error}`);
    //     }
    // };

    useEffect(() => {
        const client = createClient({
            space: import.meta.env.VITE_DEST_SPACE,
            accessToken: import.meta.env.VITE_DEST_ACCESS_TOKEN,
            host: import.meta.env.VITE_DATABASE_URL
        });
        const entries = client.getEntries({
            content_type: "titel",
            select: "fields"
        }).then(res => {
            const sanitizedEntries = res.items.map((item) => {
                return item.fields
            });
            setDestinationEntries(sanitizedEntries)
        })
            .catch(error => setError(error))
    }, [])

    console.log("CleanData", destinationEntries)

    // useEffect(() => {
    //     const client = createClient({
    //         space: import.meta.env.VITE_DEST_SPACE,
    //         accessToken: import.meta.env.VITE_DEST_ACCESS_TOKEN,
    //         host: import.meta.env.VITE_DATABASE_URL
    //     });
    //     client.getEntries({
    //         content_type: "titel",
    //         select: "fields"
    //     }).then(res => setDestinationEntry(res))
    //         .catch(error => setError(error))
    // }, [])

    return <CMSContext.Provider value={
        {
            continentInfo,
            setContinentInfo,
            destinationEntry,
            setDestinationEntry,
            userPreferences,
            setUserPreferences
        }
    }>
        {props.children}
    </CMSContext.Provider>
}
export default CMSContextProvider