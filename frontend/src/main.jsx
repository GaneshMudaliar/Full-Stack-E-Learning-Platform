import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51QnbfRB6lBboRr1j8d3tDrj5spgdUesywgJNeQdm7376UqE2CUlFHn5QXiylYiqkfVfO1RiZ7aZKWLmkDcPpCpZH00hJXStHwO"
);


createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);
