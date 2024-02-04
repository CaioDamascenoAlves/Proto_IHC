import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import FormPessoa from "./components/FormPessoa"; // Supondo que seja o seu componente de cadastro
import Login from "./components/Login";
import FormDenuncia from "./components/FormDenuncia";
import Home from "./components/Home";
function Rotas() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<FormPessoa />} />
        <Route path="/login" element={<Login />} />
        <Route path="/denunciar" element={<FormDenuncia />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
