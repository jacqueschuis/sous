import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/Landing";
import Register from "./pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "*",
      element: <LandingPage />,
    },
  ]);

  return (
    <main className="w-full min-h-screen h-full py-10 px-24 font-sans flex flex-col justify-center items-center">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
