import { useEffect, useState } from "react";
import { CMSContext } from './CMSContext'
import DestCard from "./DestCard";

const App = () => {
  return (
    <div className="gap-10">
      <DestCard />
    </div>
  );
};

export default App;