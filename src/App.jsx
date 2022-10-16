import DestCard from "./DestCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Continent from "./Continent";
import NoPage from "./NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>  
          <Route index element={<Home />} />
          <Route path="Continent" element={<Continent />} />
          <Route path="DestCard" element={<DestCard />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
     </BrowserRouter>
  );
};

export default App;