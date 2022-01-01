import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "components/Layout/Layout";
import Memes from "./Memes/Memes";
import MyMemes from "./MyMemes/MyMemes";
import Meme from "./Meme/Meme";

const AuthorizedRoutes = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  return (
    <Routes>
      <Route
        element={
          <Layout
            isButtonPressed={isButtonPressed}
            setIsButtonPressed={setIsButtonPressed}
          />
        }
      >
        <Route
          path="memes"
          element={
            <Memes
              isButtonPressed={isButtonPressed}
              setIsButtonPressed={setIsButtonPressed}
            />
          }
        />
        <Route path="mymemes" element={<MyMemes />} />
        <Route path="mymemes:id" element={<Meme />} />
        <Route path="*" element={<Memes />} />
      </Route>
    </Routes>
  );
};

export default AuthorizedRoutes;
