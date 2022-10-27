import { createContext, useEffect, useState } from 'react';
import axios from 'axios';


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


    // useEffect(() => {
    //     const client = createClient({
    //         space: import.meta.env.VITE_DEST_SPACE,
    //         accessToken: import.meta.env.VITE_DEST_ACCESS_TOKEN,
    //         host: import.meta.env.VITE_DATABASE_URL
    //     });
    //     const entriesDest = client.getEntries(
    //         {
    //             content_type: "titel",
    //             select: "fields"
    //         })
    //         .then(res => {
    //             const sanitizedEntriesDest = res.items.map((item) => {
    //                 return item.fields
    //             });
    //             setDestinationEntries(sanitizedEntriesDest)
    //         })
    //     const entriesCont = client.getEntries(
    //         {
    //             content_type: "continentTravelInfo",
    //             select: "fields"
    //         })
    //         .then(res => {
    //             const sanitizedEntriesCont = res.items.map((item) => {
    //                 return item.fields
    //             });
    //             setContinentEntries(sanitizedEntriesCont)
    //         })
    //         .catch(err => console.log(err))
    // }, [])


    useEffect(() => {
        const getContinents = axios.get('http://localhost:8080/continentData')
        const getDestinations = axios.get('http://localhost:8080/destinationData/')
        axios.all([getContinents, getDestinations])
            .then(axios.spread((...allData) => {
                setContinentEntries(allData[0].data)
                setDestinationEntries(allData[1].data)
            }))
            .catch(err => setError(err))
    }, [])

    //https://medium.com/@jdhawks/make-fetch-s-happen-5022fcc2ddae

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