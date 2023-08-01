import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="w-full min-h-screen h-full py-10 px-24 bg-blue-200 font-sans flex flex-col justify-center items-center">
      <h1 className="font-black text-9xl">sous</h1>
      <h2 className="text-3xl">your collaborative kitchen</h2>
    </main>
  );
}

export default App;
