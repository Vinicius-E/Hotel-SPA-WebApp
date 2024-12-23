import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HotelList from "./pages/hotel/HotelList";
import HotelDetail from "./pages/hotel/HotelDetail";
import ErrorBoundary from "./pages/error/ErrorBoundary";
import NotFound from "./pages/error/NotFound";
import DefaultError from "./pages/error/DefaultError";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
    ),
    errorElement: <DefaultError/>,
    children: [
      {
        path: "/",
        element: (
          <ErrorBoundary>
            <HotelList />
          </ErrorBoundary>
        ),
      },
      {
        path: "/hotels/:id",
        element: (
          <ErrorBoundary>
            <HotelDetail />
          </ErrorBoundary>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },  
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();