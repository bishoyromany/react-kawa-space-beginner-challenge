import React from "react";
import uuid from "react-uuid";

import Person from "./Person";

const PersonList = (props) => {
  const persons = props.data.map((person) => (
    <Person
      key={uuid()}
      picture={person.picture}
      gender={person.gender}
      nat={person.nat}
      name={person.name}
      email={person.email}
      setIsShown={props.setIsShown}
    />
  ));

  // const personDisplay = result.filter((person) => person.email === email );
  //let {gender,name,location,state,postcode,country,timezone,email,picture,nat} = personDisplay;

  // let personDetail = result.filter((id) => person.id === id );

  return (
    <div className="container">
      <ul className="flex-container">{persons}</ul>
    </div>
  );
};

export default PersonList;
