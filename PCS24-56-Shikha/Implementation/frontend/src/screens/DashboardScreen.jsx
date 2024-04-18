import { useState } from "react";
import { Button } from "react-bootstrap";
import PredictionForm from "../components/PredictionForm";
const DashboardScreen = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <p>Dashboard</p>
      <p>Click to predict</p>
      <Button variant="primary" onClick={() => setShow(!show)} className="me-3">
        {!show ? "Check" : "Close"}
      </Button>
      {show && <PredictionForm />}
    </div>
  );
};

export default DashboardScreen;
