import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/auth/GlobalStyles";
import HomePage from "./pages/HomePage";
import CategorySearch from "./pages/CategorySearch";
import LocalSearchPage from "./pages/LocalSearchPage";
import BaroLoanPage from "./pages/BaroLoanPage";
import DiscoveryPage from "./pages/DiscoveryPage";
import HeaderNavContainer from "./container/common/HeaderNavContainer";
import KdcSearchPage from "./pages/KdcSearchPage";
import Footer from "./components/common/Footer";
import Redirect from "./pages/Redirect";
import AuthPage from "./pages/AuthPage";
import { useAuthContext } from "./components/auth/hooks/useAuthContext";

function App() {
  const url = "https://ebook.suwonlib.go.kr/";
  const url2 = "https://www.suwonlib.go.kr/";
  const { isAuthReady, user } = useAuthContext();

  return (
    <>
      <GlobalStyles />
      <HeaderNavContainer></HeaderNavContainer>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/discovery/*' element={<DiscoveryPage />}></Route>
        <Route path='/baroLoan' element={<BaroLoanPage />}></Route>
        <Route path='/localSearch' element={<LocalSearchPage />}></Route>
        <Route path='/categorySearch' element={<CategorySearch />}></Route>
        <Route path='/kdcSearch' element={<KdcSearchPage />}></Route>
        <Route path='/redirectA' element={<Redirect url={url} />}></Route>
        <Route path='/redirectB' element={<Redirect url={url2} />}></Route>
        <Route path='/auth' element={!user ? <AuthPage /> : null}></Route>
        {/* 임시로 null값을 넣어놨는데 잘못된 경로입니다 Page만들어야할 듯? */}
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
