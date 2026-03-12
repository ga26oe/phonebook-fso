import { useState } from "react";

const App = (props) => {
  const [numbers, setNumbers] = useState(props.numbers);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      id: newName,
    };

    const repeat = props.numbers.find((name) => name === setNewName)

    if (!repeat) {
    setNumbers(numbers.concat(personObject));
    setNewName("");
    console.log("button clicked", event.target);
    } else {
      alert(`${newName} has already been added.`)
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {numbers.map((number) => (
          <li key={number.id}>{number.name}</li>
        ))}
      </div>

      <div>debug: {newName}</div>
      
    </div>
  );
};

export default App;
