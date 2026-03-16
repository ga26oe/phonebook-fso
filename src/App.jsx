import { useState } from "react";

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: Date.now(),
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
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input value={filter} onChange={handleFilterChange}></input>
      </div>
      <h2>add a new</h2>
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
      {filter === "" ? (
        <ul>
          {persons.map((person) => (
            <div>
              <li key={person.id}>
                {person.name + " "}
                {person.number}
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <ul>
          {persons
            .filter((person) => person.name.includes(filter))
            .map((person) => (
              <li>
                {person.name + " "}
                {person.number}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default App;
