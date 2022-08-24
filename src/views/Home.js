import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [albumList, setAlbumList] = useState([]);
    useEffect(() => {
        const fetchList = () => {
            fetch(" https://jsonplaceholder.typicode.com/albums/")
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setAlbumList(data);
                    console.log(albumList, "sjkadsa");
                });
        };
        fetchList();
    }, []);
    return ( <
        div >
        <
        h1 style = {
            {
                margin: 5,
                padding: 5,
                textAlign: "center",
                listStyle: "none",
            }
        } >
        Album List < /h1> <
        h4 > Please Selece any list to get it 's details</h4> <
        div className = "App-AlbumList"
        style = {
            { textAlign: "left" } } > {
            albumList.map((data) => ( <
                div key = { data.id }
                style = {
                    {
                        margin: 5,
                        padding: 5,
                        border: "1px solid black",
                        textDecoration: "none",
                        listStyle: "none",
                    }
                } >
                <
                div >
                Title:
                <
                Link to = { `/artist-details/${data.userId}` }
                style = {
                    {
                        margin: 5,
                        padding: 5,
                        textDecoration: "none",
                        color: "black",
                        listStyle: "none",
                        hoverBackgound: 'black',
                    }
                } >
                { data.title } < /Link> <
                br / >
                <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div>
    );
};

export default Home;