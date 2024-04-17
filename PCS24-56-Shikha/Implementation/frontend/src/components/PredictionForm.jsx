// import React from 'react'
import FormContainer from "./FormContainer";
import { Form, Button } from "react-bootstrap";
// import { toast } from "react-toastify";
import Loader from "./Loader";
import { useState } from "react";

const PredictionForm = () => {
  const isLoading = false;
  const [data, setData] = useState({
    speed: "",
    xacceleration: "",
    yacceleration: "",
    zacceleration: "",
    roll: "",
    yaw: "",
    pitch: "",
  });
  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  //   console.log(data);
  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <h1>Predict Driver Safety</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="speed">
          <Form.Label>Speed</Form.Label>
          <Form.Control
            type="number"
            name="speed"
            min="0"
            step="any"
            onWheel={(e) => {
              e.currentTarget.blur();
            }}
            placeholder="Enter speed"
            value={data.speed}
            onChange={handleDataChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="xacceleration">
          <Form.Label> X-Acceleration</Form.Label>
          <Form.Control
            type="number"
            name="xacceleration"
            step="any"
            onWheel={(e) => {
              e.currentTarget.blur();
            }}
            placeholder="Enter X-Acceleration"
            value={data.xacceleration}
            onChange={handleDataChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="yacceleration">
          <Form.Label> Y-Acceleration</Form.Label>
          <Form.Control
            type="number"
            name="yacceleration"
            step="any"
            onWheel={(e) => {
              e.currentTarget.blur();
            }}
            placeholder="Enter Y-Acceleration"
            value={data.yacceleration}
            onChange={handleDataChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="zacceleration">
          <Form.Label> Z-Acceleration</Form.Label>
          <Form.Control
            type="number"
            name="zacceleration"
            step="any"
            onWheel={(e) => {
              e.currentTarget.blur();
            }}
            placeholder="Enter Z-Acceleration"
            value={data.zacceleration}
            onChange={handleDataChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="roll">
          <Form.Label>Roll</Form.Label>
          <Form.Control
            type="number"
            name="roll"
            step="any"
            onWheel={(e) => {
              e.currentTarget.blur();
            }}
            placeholder="Enter Roll"
            value={data.roll}
            onChange={handleDataChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="yaw">
          <Form.Label>Yaw</Form.Label>
          <Form.Control
            type="number"
            name="yaw"
            value={data.yaw}
            step="any"
            onWheel={(e) => {
              e.currentTarget.blur();
            }}
            placeholder="Enter Yaw"
            onChange={handleDataChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="my-2" controlId="pitch">
          <Form.Label>Pitch</Form.Label>
          <Form.Control
            type="number"
            name="pitch"
            data={data.pitch}
            step="any"
            onWheel={(e) => {
              e.currentTarget.blur();
            }}
            placeholder="Enter Pitch"
            onChange={handleDataChange}
          ></Form.Control>
        </Form.Group>

        <Button
          disabled={isLoading}
          type="submit"
          variant="primary"
          className="mt-3"
        >
          Submit
        </Button>
      </Form>

      {isLoading && <Loader />}
    </FormContainer>
  );
};

export default PredictionForm;
