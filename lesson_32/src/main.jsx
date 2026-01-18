import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import BaseLayout from "./components/BaseLayout.jsx";
import Home from "./pages/Home.jsx";
import Todo from "./pages/Todo.jsx";
import Swapi from "./pages/Swapi.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: BaseLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "todos",
                Component: Todo
            },
            {
                path: "swapi",
                Component: Swapi
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
