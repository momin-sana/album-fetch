import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Artist = () => {
    let { id } = useParams();
    const [artistDetails, setArtistDetails] = useState(null);
    useEffect(() => {
        const fetchList = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setArtistDetails(data);
                });
        };
        fetchList();
    }, []);
    return ( <
        >
        <
        h1 style = {
            {
                margin: 5,
                padding: 5,
                textAlign: "center",
                listStyle: "none",
            }
        } >
        { " " }
        Album Fetch { " " } <
        /h1> {
            artistDetails ? ( <
                div > { JSON.stringify(artistDetails) } < /div>
            ) : ( <
                div > Loading! < /div>
            )
        } { " " } <
        />
    );
};

export default Artist;