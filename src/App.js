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
        fetchList();
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
                div key = { albumList.userId }
                style = {
                    {
                        margin: 5,
                        padding: 5,
                        border: "1px solid black",
                        textDecoration: "none",
                        listStyle: "none",
                    }
                } >
                { /*<div>{`Title: ${albumList[''].title}`}</div> ---- TypeError: Cannot read properties of undefined (reading 'title') */ } { /* below [0] first tilte is repeating */ } <
                div > { `Title: ${albumList[0].title}` } < /div> <
                div >
                <
                a style = {
                    {
                        color: "black",
                    }
                }
                target = "_blank"
                href = { `https://jsonplaceholder.typicode.com/users/${userId.userId}` } >

                { userId.title } <
                /a> { < br / > } <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div>
    );
}

export default App;