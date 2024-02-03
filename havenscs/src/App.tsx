import React, { useEffect } from "react";
import ProtectedRoute from "./Dash/Protected/ProtectedRoute";
import Dashboard from "./Dash/Dashboard";
import Login from "./Dash/Login/Login";
import HomePage from "./Dot/Pages/HomePage";
import NotFound from "./Dot/Pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useThemeContext } from "./Contexts/ThemeContext";
import { Box, ThemeProvider } from "@mui/material";
import { AuthProvider } from "./Contexts/Auth";
import CssBaseline from "@mui/material/CssBaseline";
import Clients from "./Dash/ChildrenComponents/News/News";
import { ApiProvider } from "./Contexts/ApiContext";
import News from "./Dash/ChildrenComponents/News/News";
import NewsPage from "./Dot/Pages/NewsPage";
import Matches from "./Dot/Pages/MatchesPage";
import NewsDetails from "./Dot/Pages/NewsDetails";
// import './i18n';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/news",
    element: <NewsPage />, // Shows all news
  },
  {
    path: "/matches", // The new route for the Highlights page
    element: <Matches />,
  },
  {
    path: "/news/:id", // A route to view individual newss
    element: <NewsDetails />,
  },
  {
    path: "/admin-dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
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
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  const { theme } = useThemeContext();
  useEffect(() => {
    console.log(theme.palette.mode);
  }, [theme]);
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ApiProvider>
          <Box
            width={"100%"}
            height={"100%"}
            bgcolor={theme.palette.background.default}
          >
            <RouterProvider router={router} />
          </Box>
        </ApiProvider>
      </AuthProvider>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
