let id = 0;

const images = [
    "avatar1.png",
    "avatar2.png",
    "avatar3.png",
    "avatar4.png",
    "avatar5.png",
    "avatar6.png",
    "avatar7.png"
];

let persons = [
    {
        id: id++,
        firstname: "Jane",
        lastname: "Smith",
        score: 1250,
        color: '#ADC698',
        avatar: 'avatar2.png'
    }, {
        id: id++,
        firstname: "John",
        lastname: "Dow",
        score: 1780,
        color: '#B74F6F',
        avatar: 'avatar1.png'
    }, {
        id: id++,
        firstname: "Betty",
        lastname: "O'Brian",
        score: 2120,
        color: '#F92A82',
        avatar: 'avatar3.png'
    }
];


function getPersons(minScore) {
    return persons.filter(p=>p.score>=minScore);
}

function getPerson(id) {
    return persons.find(p => p.id === +id);
}

function insertPerson(p) {
    p.id = id++;
    p.avatar= images[Math.floor(Math.random() * images.length)];
    persons.push(p);
    return p;
}

function removePerson(id) {
    persons = persons.filter(p => p.id !== +id);
}

function updatePerson(person) {
    persons = persons.map(p => p.id === +person.id ? person : p);
}

module.exports = {
    getPersons,
    getPerson,
    insertPerson,
    removePerson,
    updatePerson
};

