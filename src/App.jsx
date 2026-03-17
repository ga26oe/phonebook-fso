import { useState } from "react";
import Filter from './components/Filter'
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";



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
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  );
};

export default App;
