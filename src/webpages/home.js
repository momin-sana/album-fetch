import React from "react";
import { useEffect, useState } from "react";


const Home = () => {
    const [albumList, setAlbumList] = useState([]);
    useEffect(() => {
        const fetchNewList = () => {
            const list = fetch(" https://jsonplaceholder.typicode.com/albums/ ")
                .then((response) => response.json())
                .then((data) => {
                    setAlbumList(data);
                });
            console.log("list", list);
        };
        fetchNewList();
    }, []);

    return ( <
        div >
        <
        h1 > Album List < /h1> <
        h6 > Please Selece any list to get it 's details</h6>

        <
        div className = "App-AlbumList" > {
            albumList.map((userId) => ( <
                li key = { userId.id } >
                <
                a href = "https://jsonplaceholder.typicode.com/users" > { userId.title } <
                /a> { < br / > } <
                /li>
            ))
        } <
        /div> <
        /div>
    );
};
export default Home;