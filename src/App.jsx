import DestCard from "./pages/DestCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Continents from "./pages/Continents";
import ContinentDetail from "./pages/ContinentDetail";
import DestinationDetail from "./pages/DestinationDetail";
import ErrorPage from "./pages/ErrorPage";
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Continents />} />
          <Route path="Continents" element={<Continents />} />
          <Route path="ContinentDetail/:id" element={<ContinentDetail />}></Route>
          <Route path="DestCard" element={<DestCard />} />
          <Route path="DestinationDetail/:id" element={<DestinationDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;