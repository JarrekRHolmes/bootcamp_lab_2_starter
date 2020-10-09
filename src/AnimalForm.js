import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AnimalForm = ({ animal, animalFact, save }) => {
  const [animalValue, setAnimal] = useState(animal || "");
  const [animalFactValue, setAnimalFact] = useState(animalFact || "");

  return (
    <Form>
      <Form.Group controlId="animalType">
        <Form.Label>Animal</Form.Label>
        <Form.Control
          aria-label="animal-input"
          type="text"
          placeholder="add favorite animal"
          onChange={(event) => setAnimal(event.target.value)}
          value={animalValue}
        />
      </Form.Group>

      <Form.Group controlId="animalType">
        <Form.Label>Animal Fact</Form.Label>
        <Form.Control
          aria-label="animal-fact-input"
          type="text"
          placeholder="add favorite fact"
          onChange={(event) => setAnimalFact(event.target.value)}
          value={animalFactValue}
        />
      </Form.Group>

      <Button
        variant="primary"
        onClick={() => save(animalValue, animalFactValue)}
      >
        Save
      </Button>
    </Form>
  );
};

export default AnimalForm;
