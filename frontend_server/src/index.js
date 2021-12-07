import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { MainMenu } from "./routes/MainMenu";
import { AddViewEditInst } from "./routes/AddViewEditInst";
import { SearchInst } from "./routes/SearchInst";
import { SearchResults } from "./routes/SearchResults";

import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu/>} />
        <Route path="/add-new-inst" element={<AddViewEditInst mode={'add'}/>} />
        <Route path="/search-inst" element={<SearchInst/>} />
        <Route path="/search-results" element={<SearchResults/>} />
        <Route path="/edit-view-inst/:instId" element={<AddViewEditInst mode={'edit'}/>} />
      </Routes>
    </Router>);
}

ReactDOM.render(<App />, document.getElementById('root'));