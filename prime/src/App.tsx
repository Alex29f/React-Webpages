// src/App.tsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BlogPage from "./Pages/BlogPage";
import IndividualBlogPage from "./Pages/IndividualBlogPage";
import { Container, ThemeProvider } from "@mui/material";
import theme from "./Theme/theme";
import NavBar from "./Components/Organs/NavBar";

import ProtectedRoute from "./Dash/Protected/ProtectedRoute"; // Import ProtectedRoute
import Dashboard from "./Dash/Dashboard"; // Import Dashboard
import Login from "./Dash/Login/Login"; // Import Login
import { AuthProvider } from "./Contexts/Auth"; // Import AuthProvider
import { ApiProvider } from "./Contexts/ApiContext"; // Import ApiProvider
import News from "./Dash/ChildrenComponents/News/News"; // Import News

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar /> {/* Include NavBar as part of the element */}
        <HomePage />
      </>
    ),
  },
  {
    path: "/blogs",
    element: (
      <>
        <NavBar />
        <BlogPage />
      </>
    ),
  },
  {
    path: "/blogs/:blogId",
    element: (
      <>
        <NavBar />
        <IndividualBlogPage />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <NavBar />
        <Login />
      </>
    ),
  },
  {
    path: "/admin-dashboard",
    element: (
      <ProtectedRoute>
        <>
          <NavBar />
          <Dashboard />
        </>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "news",
        element: (
          <ProtectedRoute>
            <News />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ApiProvider>
        <ThemeProvider theme={theme}>
          <Container
            maxWidth={false}
            sx={{
              paddingLeft: 0,
              paddingRight: 0,
              "@media (min-width:600px)": {
                padding: 0,
              },
              "@media (min-width:900px)": {
                padding: 0,
              },
            }}
          >
            <RouterProvider router={router} />
          </Container>
        </ThemeProvider>
      </ApiProvider>
    </AuthProvider>
  );
};
export default App;
