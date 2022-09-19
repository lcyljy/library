import React from "react";
import { Route, Routes } from "react-router-dom";
import PopularPage from "./PopularPage";
import AccessionBookPage from "./AccessionBookPage";
import LibrarianBookPage from ".//LibrarianBookPage";
import BookListContainer from "../container/common/BookListContainer";
import SiteRootNavContainer from "../container/common/SiteRootNavContainer";
function DiscoveryPage() {
  return (
    <>
      <Routes>
        <Route path='/discovery/popularBook' element={<PopularPage />}></Route>
        <Route
          path='/discovery/accessionBook'
          element={<AccessionBookPage />}
        ></Route>
        <Route
          path='/discovery/libBook'
          element={<LibrarianBookPage />}
        ></Route>
      </Routes>
      <SiteRootNavContainer></SiteRootNavContainer>
      <BookListContainer></BookListContainer>
    </>
  );
}

export default DiscoveryPage;
