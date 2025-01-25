import React, { useState, useEffect } from "react";

function App() {
  const [dogPic, setDogPic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogPic = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogPic(data.message);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the dog picture:", error);
        setLoading(false);
      }
    };

    fetchDogPic();
  }, []);

  if (loading) return <p>Loading...</p>;

  return <img src={dogPic} alt="A Random Dog" />;
}

export default App;
