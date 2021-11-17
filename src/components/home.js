import React, { useState, useEffect } from 'react';
import AddUrl from './addUrl';
import Url from './url';

export default function Home(props) {

    const {  } = props;

    const [ allUrlKeys, setAllUrlKeys ] = useState([])
    const [ submitted, setSubmitted ] = useState([])
    const [ formattedUrlKeys, setFormattedUrlKeys ] = useState([])

    const getAllUrlKeys = () => {
        fetch('http://127.0.0.1:5000/url/get'
        ).then(res => res.json()
        ).then(resData => setAllUrlKeys(resData)
        ).catch(err => console.log("Error with getting keys/url's.", err));
    }

    const deleteKey = (key) => {
        fetch(`http://127.0.0.1:5000/url/delete/${key}`,  { method: "DELETE" }
        ).then(res => res.json()
        ).then(resData => console.log(resData)
        ).catch(err => console.log("Error deleting key:", err));
    }

    const handleSubmitReload = () => {
        setSubmitted(true);
    }

    useEffect(() => {
        getAllUrlKeys();
        separateUrlKeys();
        setSubmitted(false);
    },[submitted])

    useEffect(() => {
        separateUrlKeys();
    },[allUrlKeys])

    const separateUrlKeys = () => {
        return allUrlKeys.map(key => {
            return(<div className="url-keys-wrap" key={key}>
                Short URL: <Url url={key} />
                <button onClick={() => deleteKey(key)}>Delete URL key?</button>
            </div>
        )})
    }

    return (
        <div className="home">
            <div className="add-url-container"><AddUrl handleSubmitReload={handleSubmitReload} /></div>
            <h2>URL keys: {separateUrlKeys()}</h2>
        </div>
    )
}
