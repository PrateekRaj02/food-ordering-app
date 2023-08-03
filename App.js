import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
root.render(<App />);
