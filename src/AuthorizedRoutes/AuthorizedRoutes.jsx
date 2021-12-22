import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Memes from "./Memes/Memes";
import MyMemes from "./MyMemes/MyMemes";
import Meme from "./Meme/Meme";

const AuthorizedRoutes = () => {
  return (
    <Routes>
      <Route path="/memes" element={<Memes />} />
      <Route path="/mymemes" element={<MyMemes />} />
      <Route path="/mymemes:id" element={<Meme />} />
      <Route path="*" element={<Memes />} />
    </Routes>
  );
};

export default AuthorizedRoutes;
