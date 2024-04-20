import React, { Suspense, lazy } from "react";
import Header from "../src/components/Header";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const LazyHomePage = lazy(() => import("./pages/HomePage"));
const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Header />
      <Routes>
        <Route path="/" element={<LazyHomePage />} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
      <Footer/>
    </Suspense>
  );
};

export default App;
