import React, {useEffect, useRef} from "react";

export default function Modal(props) {
    const modalForm = useRef(null);
    const modalElement = useRef(null);

    function open() {
        modalForm.current.reset();
        modalElement.current.style.display = "block";
    }

    function close() {
        modalElement.current.style.display = "none";
    }

    useEffect(() => {
        if (props.plusElement) props.plusElement.onclick = open;
    });

    return (
        <div id="personModal" ref={modalElement}>
            <div>
                <h1>Adding a new Person</h1>
                <form id='personForm' ref={modalForm} onSubmit={e => props.addPerson(e)} action="#">
                    <p>First name<br/><input placeholder="Enter first name" name="firstName" required="required"/></p>
                    <p>Last Name
                        <br/><input placeholder="Enter last name" name="lastName" required="required"/></p>
                    <p>Score<br/><input type='number' min='0' placeholder="Enter score" name="score"
                                        required="required"/>
                    </p>
                    <div id="buttons">
                        <button type="submit">Create</button>
                        <button type="button" onClick={close}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}