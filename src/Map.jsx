
import { useContext } from 'react';
import { CMSContext } from './CMSContext';
import { useParams } from "react-router-dom";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';


export default function Map() {
    const { destinationEntries } = useContext(CMSContext)
    const { id } = useParams();

    return (
        <div>
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
                <Marker position={{ lat: -34.397, lng: 150.644 }} />

            </GoogleMap>
        </div>
    )
}




