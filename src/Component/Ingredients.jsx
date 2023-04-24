import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Style/Ingredients.css';
import { Container, Row, Col, Form, FormGroup, FormControl, FormCheck, Button, Alert } from "react-bootstrap";

const IngredientForm = () => {
  const [ingredients, setIngredients] = useState([
    { id: 1, name: "Ingrediente 1", quantity: "", unit: "", checked: false },
    { id: 2, name: "Ingrediente 2", quantity: "", unit: "", checked: false },
    { id: 3, name: "Ingrediente 3", quantity: "", unit: "", checked: false }
  ]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleQuantityChange = (event, ingredientId) => {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === ingredientId) {
        return { ...ingredient, quantity: event.target.value };
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
  };

  const handleUnitChange = (event, ingredientId) => {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === ingredientId) {
        return { ...ingredient, unit: event.target.value };
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
  };

  const handleCheckboxChange = (event, ingredientId) => {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === ingredientId) {
        return { ...ingredient, checked: event.target.checked };
      }
      return ingredient;
    });
    setIngredients(updatedIngredients);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Ingredientes:", ingredients);
    setShowSuccessMessage(true);
  };

  const handleAlertClose = () => {
    setShowSuccessMessage(false);
  };

  return (
    <Container>
      {showSuccessMessage && (
        <Alert variant="success" onClose={handleAlertClose} dismissible>
          Sus ingredientes se han enviado correctamente.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        {ingredients.map((ingredient) => (
          <Row key={ingredient.id}>
            <Col md={1}>
              <FormGroup>
                <FormCheck
                  type="checkbox"
                  checked={ingredient.checked}
                  onChange={(event) => handleCheckboxChange(event, ingredient.id)}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Ingrediente"
                  value={ingredient.name}
                  disabled
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Cantidad"
                  value={ingredient.quantity}
                  onChange={(event) => handleQuantityChange(event, ingredient.id)}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                
                <FormControl
                  type="text"
                  placeholder="Unidad de medida"
                  value={ingredient.unit}
                  onChange={(event) => handleUnitChange(event, ingredient.id)}
                />
              </FormGroup>
            </Col>
          </Row>
        ))}
        <Button type="submit">Enviar</Button>
        
      </Form>
    </Container>
  );
};

export default IngredientForm;

