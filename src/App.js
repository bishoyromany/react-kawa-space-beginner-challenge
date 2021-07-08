import React, { useState, useEffect } from "react";
import axios from "axios";

import PersonList from "./components/person/PersonList";
import PersonDetail from "./components/person/PersonDetail";

const App = () => {
  const [isShown, setIsShown] = useState(false);
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get(
        "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
      );

      setResult(response.data.results); //results is the array name in the provided API
    };
    fetchDetails().catch((error) => {
      setError(error.message);
      console.log(error);
    });
  }, []);

  if (error) {
    return (
      <section>
        <p>Fetching failed !</p>
      </section>
    );
  }

  const showPersonDetailHandler = (person) => {
    setIsShown(person);
  };

  return (
    <React.Fragment>
      {!isShown ? "Nothing to display" : <PersonDetail person={isShown} />}
      <PersonList data={result} setIsShown={showPersonDetailHandler} />
    </React.Fragment>
  );
};

export default App;
