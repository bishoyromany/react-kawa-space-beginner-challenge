import React, { useState } from "react";

// import {useState} from 'react';
import Card from "../UI/Card";
import "./Person.css";

const Person = (props) => {
  const [display1, setDisplay1] = useState({});

  let fullName =
    props.name.title + " " + props.name.first + " " + props.name.last;
  const showDetail = (event) => {
    props.setIsShown({
      fullName,
      name: props.name,
      picture: props.picture,
      email: props.email,
      gender: props.gender,
      nat: props.nat,
    });
    console.log(event);
  };

  return (
    <li>
      <Card>
        <article className="container" onClick={showDetail}>
          <img
            className="avatar"
            src={props.picture.thumbnail}
            alt={props.fullName}
          />
          <div className="div">
            <p>
              {props.gender} - {props.nat}
            </p>
            <h4>{fullName}</h4>
            <p>{props.email}</p>
          </div>
        </article>
      </Card>
    </li>
  );
};

export default Person;
