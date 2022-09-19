import React from "react";
import { Route, Routes } from "react-router-dom";
import PopularPage from "./PopularPage";
import AccessionBookPage from "./AccessionBookPage";
import LibrarianBookPage from ".//LibrarianBookPage";

function DiscoveryPage() {
  return (
    <>
      <Routes>
        <Route path='popularBook' element={<PopularPage />}></Route>
        <Route path='accessionBook' element={<AccessionBookPage />}></Route>
        <Route path='libBook' element={<LibrarianBookPage />}></Route>
      </Routes>
    </>
  );
}

export default DiscoveryPage;
