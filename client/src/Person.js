import React from "react";

export default function Person(props) {
    return (
        <div className='card'>
            <span className="delCard" onClick={() => props.deletePerson(props.id)}>&times;</span>
            <img src={'http://localhost:8000/img/' + props.avatar} alt="Avatar"/>
            <div>
                <h4>
                    <b>{props.firstname + " " + props.lastname}
                        <small>({props.id})</small>
                    </b>
                </h4>
                <p>{props.score + " Points"}</p>
                <div className="colored" style={{
                    backgroundColor: props.color
                }}/>
                <span className={props.score > 2000
                    ? "gold"
                    : props.score > 1500
                        ? "silver"
                        : "bronze"}/>
            </div>
        </div>);
}