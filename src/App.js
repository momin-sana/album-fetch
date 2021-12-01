import { useEffect, useState } from "react";
import "./App.css";
import React from "react";

function App() {
    const [albumList, setAlbumList] = useState([]);
    useEffect(() => {
        const fetchList = () => {
            fetch(" https://jsonplaceholder.typicode.com/albums/")
                .then((response) => response.json())
                .then((data) => {
                    setAlbumList(data);
                });
        };
        fetchList([]);
        // console.log("FetchList", fetchList);
    }, []);

    //   useEffect(() => {
    //       const fetchDetails = () => {
    //           fetch("https://jsonplaceholder.typicode.com/users/") 
    //       };
    //       fetchDetails();
    //   }, [])

    console.log("albumList", albumList);

    return ( <
        div >
        <
        h1 > Album List < /h1> <
        h6 > Please Selece any list to get it 's details</h6>

        <
        div className = "App-AlbumList"
        style = {
            { textAlign: "left" } } >

        {
            albumList.map((userId) => ( <
                li key = { userId.id }
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
                a style = {
                    {
                        color: "black",
                    }
                }
                target = "_blank"
                href = { "https://jsonplaceholder.typicode.com/users/" } >
                { userId.title } <
                /a> { < br / > } <
                /li>
            ))
        } <
        /div> <
        /div>
    );
}

export default App;