import contentful from "contentful";
import fs from 'fs';
import * as dotenv from 'dotenv'
dotenv.config()

// const { VITE_DEST_SPACE,
//     VITE_DEST_ACCESS_TOKEN,
//     VITE_DATABASE_URL } = process.env
// console.log(process.env)

const client = contentful.createClient({
    // space: VITE_DEST_SPACE,
    // accessToken: VITE_DEST_ACCESS_TOKEN,
    // host: VITE_DATABASE_URL
    space: //CONTENTFUL CREDENTIALS HERE
        accessToken: //CONTENTFUL CREDENTIALS HERE
    host: //CONTENTFUL CREDENTIALS HERE
})


const getItem = async (contype) => {
    try {
        const countries = await client.getEntries({
            content_type: "titel",
            select: "fields"
        });
        const countryEntries = countries.items.map((item) => {
            const countryImage = item.fields.destImage.fields.file;
            return {
                ...item.fields,
                countryImage
            };
        });
        fs.writeFile(`destinationDataClean.json`, JSON.stringify(countryEntries), (err) => {
            if (err) { console.log(err) } else { console.log("file has been written successfully") }
        });
        const continents = await client.getEntries({
            content_type: "continentTravelInfo",
            select: "fields"
        });
        const continentEntries = continents.items.map((item) => {
            const continentImage = item.fields.file;
            const carouselImages = item.fields.carouselImages.map(item => item.fields.file);
            return {
                ...item.fields,
                continentImage,
                carouselImages
            };
        });
        fs.writeFile(`continentDataClean.json`, JSON.stringify(continentEntries), (err) => {
            if (err) { console.log(err) } else { console.log("file has been written successfully") }
        });
    } catch (error) {
        console.log(`Error fetching content ${error}`);
    };
}

getItem()