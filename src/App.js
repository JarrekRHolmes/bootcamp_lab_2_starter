import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import axios from "axios";
import AnimalForm from "./AnimalForm";

function App() {
  const [animal, setAnimal] = useState("Cats");
  const [animalFact, setAnimalFact] = useState("");
  const [editingMode, setEditingMode] = useState(false);

  useEffect(() => {
    axios
      .get("https://cat-fact.herokuapp.com/facts/random?animal_type=dog")
      .then((response) => {
        setAnimalFact(response.data.text);
      })
      .catch(console.error);
  }, [animal]);

  const saveNewAnimalInfo = (newAnimal, newAnimalFact) => {
    setAnimal(newAnimal);
    setAnimalFact(newAnimalFact);
    setEditingMode(false);
  };

  const renderAnimalFact = () => {
    return (
      <Card>
        <Card.Header>My favorite animal</Card.Header>
        <Card.Body>
          <Card.Title>I love {animal}</Card.Title>
          <Card.Text>
            {animal} fact: {animalFact}
          </Card.Text>
          <Button variant="primary" onClick={() => setEditingMode(true)}>
            Edit
          </Button>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container>
      {editingMode ? (
        <AnimalForm
          animal={animal}
          animalFact={animalFact}
          save={saveNewAnimalInfo}
        />
      ) : (
        renderAnimalFact()
      )}
    </Container>
  );
}

export default App;
