import React, {useState, useEffect,useRef} from 'react';
import axios from 'axios';
import Modal from './Modal';
import Person from './Person';

function App() {
    const [persons, setPersons] = useState([]);
    const plusElement = useRef(null);

    async function getPersons(minScore = 0) {
        const persons = (await axios.get('http://localhost:8000/persons?minScore=' + minScore)).data;
        setPersons(persons);
    }

    useEffect(() => {
        getPersons()
    }, []);

    function resetScore() {
        document.getElementById('inputScore').value = "";
        getPersons();
    }

    function updateScore() {
        const v = document.getElementById('inputScore').value;
        const min = /^\+?(0|[1-9]\d*)$/.test(v)
            ? Number.parseInt(v)
            : 0;
        getPersons(min);
    }

    async function addPerson(e) {
        e.preventDefault();
        const newPerson = {
            firstname: e.target.firstName.value,
            lastname: e.target.lastName.value,
            score: e.target.score.value
        };
        await axios.post('http://localhost:8000/persons/', newPerson);
        await getPersons();
        document.getElementById('personModal').style.display = "none";
    }

    async function deletePerson(idPerson) {
        await axios.delete('http://localhost:8000/persons/' + idPerson);
        await getPersons()
    }

    return (
        <div>
            <h1>People are People<span id="addPerson" ref={plusElement} >+</span>
            </h1>
            <input type="button" onClick={resetScore} id="resetScore" value="Reset"/>
            <input type="number" onChange={updateScore} id="inputScore" placeholder="Minimum score of persons"/>
            <main>
                {persons.map(p => <Person key={p.id} deletePerson={deletePerson} {...p}/>)}
            </main>
            <Modal addPerson={addPerson} plusElement={plusElement.current} />
        </div>);
}

export default App;
