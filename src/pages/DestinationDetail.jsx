import ReactMarkdown from 'react-markdown';
import { useContext } from 'react';
import { CMSContext } from '../CMSContext';
import { useParams } from "react-router-dom";

export default function ContinentDetail() {
    const { destinationEntries } = useContext(CMSContext)
    const { id } = useParams();
    const WrappedMap = withScriptjs(withGoogleMap(Map));

    return (

        <>
            <div className="detailPage mx-auto">
                {destinationEntries.map(d => id == d.title ?
                    <>
                        <div className="mb-20">
                            <div className="flex items-center justify-center mb-10" key={d.title}
                                style={{
                                    'backgroundImage': "url(" + `${d.destImage.fields.file.url}` + ")",
                                    'backgroundRepeat': 'no-repeat',
                                    'backgroundSize': 'cover',
                                    'backgroundPosition': 'center',
                                    'padding': 300,
                                }}
                            ><h1 className="uppercase text-7xl font-extrabold text-slate-50 text-center">{d.title}</h1></div>
                            <ReactMarkdown>{d.body}</ReactMarkdown>
                            <p>{d.travelTime && d.travelTime}</p>
                        </div>
                        <div style={{
                            'height': '500px',
                            'width': '100vw'
                        }}>
                            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${import.meta.env.VITE_GOOGLE_MAPS_KEY}`}
                                loadingElement={<div style={{ height: "100%" }} />}
                                containerElement={<div style={{ height: `100%` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                        </div>
                    </>
                    : "")
                }
            </div >
        </>
    )
}



