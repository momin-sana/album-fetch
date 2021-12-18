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
  return (
    <>
      {artistDetails ? (
        <div>{JSON.stringify(artistDetails)}</div>
      ) : (
        <div>Loading!</div>
      )}
    </>
  );
};

export default Artist;
