import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/Landing";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <Layout content="register" />,
    },
    {
      path: "/login",
      element: <Layout content="login" />,
    },
    {
      path: "/home",
      element: <Home />,
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
