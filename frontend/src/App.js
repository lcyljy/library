import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/auth/GlobalStyles";
import HomePage from "./pages/HomePage";
import AccessionBookPage from "./pages/AccessionBookPage";
import CategorySearch from "./pages/CategorySearch";
import LibrarianBookPage from "./pages/LibrarianBookPage";
import LocalSearchPage from "./pages/LocalSearchPage";
import PopularPage from "./pages/PopularPage";
import BaroLoanPage from "./pages/BaroLoanPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/popularBook' element={<PopularPage />}></Route>
        <Route path='/accessionBook' element={<AccessionBookPage />}></Route>
        <Route path='/libBook' element={<LibrarianBookPage />}></Route>
        <Route path='/baroLoan' element={<BaroLoanPage />}></Route>
        <Route path='/localSearch' element={<LocalSearchPage />}></Route>
        <Route path='/categorySearch' element={<CategorySearch />}></Route>
      </Routes>
    </>
  );
}

export default App;
