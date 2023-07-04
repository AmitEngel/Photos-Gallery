import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PhotosDisplay from "./components/PhotosDisplay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PhotosDisplay />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
