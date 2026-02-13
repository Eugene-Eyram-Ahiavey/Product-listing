import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound.jsx";
import SignUpPage from "./pages/SignupPage.jsx";
import LoginPage from "./pages/Login-page.jsx";
import HomePage from "./components/homepage.jsx";
import "./index.css";
import App from "./App.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "/login", element: <LoginPage /> },
//       { path: "/login", element: <SignUpPage /> }
//     ]
//   }
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>
);
