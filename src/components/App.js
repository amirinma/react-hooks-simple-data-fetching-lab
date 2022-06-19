// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogPic, setDogPic] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogPic(data.message);
        setIsLoaded(true)
      });
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE
    if(!isLoaded) return <p>Loading...</p>

  return <img src={dogPic} alt="A Random Dog" />;
}

export default App;