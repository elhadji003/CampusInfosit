import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppNavigator from "./navigations/AppNavigator";

export default function App() {
  return (
    <Router>
      <AppNavigator />
    </Router>
  );
}
