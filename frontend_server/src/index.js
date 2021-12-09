// TODO Add better debug logging throughout the whole Front End App

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { MainMenu } from "./routes/MainMenu";
import { AddViewEditInst } from "./routes/AddViewEditInst";
import { SearchInst } from "./routes/SearchInst";

import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu/>} />
        <Route path="/add-new-inst" element={<AddViewEditInst mode={'add'}/>} />
        <Route path="/search-instruments" element={<SearchInst/>} />
        <Route path="/edit-view-inst/:instId" element={<AddViewEditInst mode={'edit'}/>} />
      </Routes>
    </Router>);
}

ReactDOM.render(<App />, document.getElementById('root'));