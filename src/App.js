import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import FavoritePage from "./pages/FavoritePage";
import Layout from "./components/Layout/Layout";
import ToHome from "./components/ToHome/ToHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritePage />} />
        <Route path="*" element={<ToHome />} />
      </Route>
    </Routes>
  );
}

export default App;
