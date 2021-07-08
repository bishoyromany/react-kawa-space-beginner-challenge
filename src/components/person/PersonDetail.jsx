import React from "react";

const PersonDetail = ({person}) => {
    return (
        <div id="PersonDetail">
            <ul>
                <li>Full Name: {person.fullName}</li>
                <li>Email: {person.email}</li>
                <li>Gender: {person.gender}</li>
                <li>Picture: <img src={person.picture.thumbnail} alt={person.name.first + " Image"} /></li>
            </ul>
        </div>
    )
}

export default PersonDetail;