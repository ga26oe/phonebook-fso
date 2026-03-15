import { useState } from "react";

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: Date.now()
    };

    const repeat = persons.some((p) => p.name === newName);

    if (!repeat) {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");

      console.log("button clicked", event.target);
    } else if (repeat) {
      alert(`${newName} has already been added.`);
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <div>
            <li key={person.id}>
              {person.name + ' '}
              {person.number}
            </li>
          </div>
        ))}
      </ul>

      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
