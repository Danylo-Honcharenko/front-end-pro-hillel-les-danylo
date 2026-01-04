import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./pages/Main.jsx";
import {theme, ThemeContext} from "../themeContext.js";
import {useState} from "react";
import Contact from "./pages/Contact.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router";
import ErrorBoundary from "./ErrorBoundary.jsx";

function App() {
    const themeState = useState(theme.default);

    const BasePageLayout = () => {
        return (
            <>
                <ErrorBoundary>
                    <Header />
                    <main>
                        <Outlet />
                    </main>
                    <Footer />
                </ErrorBoundary>
            </>
        );
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <BasePageLayout />,
            children: [
                {
                    index: true,
                    element: <Main />,
                },
                {
                    path: "contact",
                    element: <Contact />
                },
                {
                    path: "about-me",
                    element: <AboutMe />
                }
            ]
        }
    ]);

    return (
      <ThemeContext.Provider value={themeState}>
          <RouterProvider router={router} />
      </ThemeContext.Provider>
  );
}

export default App;