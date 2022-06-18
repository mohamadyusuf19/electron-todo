import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "../containers/Home";
import Todo from "../containers/Todo";

const index = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default index;
