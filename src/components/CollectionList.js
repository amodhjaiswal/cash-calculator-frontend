import React, { useEffect, useState } from "react";
import axios from "axios";

function CollectionList() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL);
        setCollections(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCollections();
  }, []);

  return (
    <div>
      <h2>Collection Entries</h2>
      <ul>
        {collections.map((entry) => (
          <li key={entry._id}>
            {entry.name} - ${entry.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollectionList;
