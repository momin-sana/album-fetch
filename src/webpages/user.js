import React, { useEffect, useState } from 'react';

const User = props => {
    const userId = props.match.params.userId
    const [albumList, setAlbumList] = useState([]);
    useEffect(() => {
        const fetchNewList = () => {
            fetch("https://jsonplaceholder.typicode.com/users/" + userId)
                .then((response) => response.json())
                .then((data) => {
                    setAlbumList(data);
                });

        };
        fetchNewList();
    }, []);
    if (albumList) {
        return ( <
            div >
            <
            h3 > Details are displayed Here < /h3>
            ID: { userId }
            Title: { userId.title } <
            /div>
        );
    }

}

export default User;