import React, { useEffect, useState } from "react";

function SampleData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log(data);
          // Display the data in the UI or perform any other actions
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default SampleData;
