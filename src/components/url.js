import React, { useState, useEffect } from 'react';

export default function Url (props) {
    const [ url, setUrl ] = useState("");

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/url/get/${props.url}`
        ).then(res => res.json()
        ).then(data => setUrl(data)
        ).catch(err => console.log("Error attempting to fetch your URL.", err));
    }, [])

    return (
        <div className="url">
            {url ? <a href={`https://${url}`} target="_blank">{props.url}</a> : null}
        </div>
    )
}
