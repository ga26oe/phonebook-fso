const Persons = ({ persons, filter }) => {
  return filter === "" ? (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name + " "}
          {person.number}
        </li>
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
  );
};

export default Persons;
