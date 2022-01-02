import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "components/Layout/Layout";
import Memes from "./Memes/Memes";
import MyMemes from "./MyMemes/MyMemes";
import Meme from "./Meme/Meme";

const AuthorizedRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="memes" element={<Memes />} />
        <Route path="mymemes" element={<MyMemes />} />
        <Route path="mymemes:id" element={<Meme />} />
        <Route path="*" element={<Memes />} />
      </Route>
    </Routes>
  );
};

export default AuthorizedRoutes;
