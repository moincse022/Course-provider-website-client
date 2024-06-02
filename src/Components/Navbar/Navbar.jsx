import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch } from "@mui/material";
import photoURL from "../../assets/home/girl.jpg";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#00ff00",
    },
  },
});

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navBg, setNavBg] = useState("bg-[#15151580]");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHome, setIsHome] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const user = false;

  const navLinks = [
    { name: "Home", route: "/home" },
    { name: "Instructors", route: "/instructors" },
    { name: "Classes", route: "/classes" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const darkClass = "dark";
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add(darkClass);
    } else {
      root.classList.remove(darkClass);
    }
  }, [isDarkMode]);

  useEffect(() => {
    setIsHome(location.pathname === "/");
    setIsLogin(location.pathname === "/login");
    setIsFixed(location.pathname === "/register");
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 100) {
      if (isHome) {
        setNavBg(
          "bg-white backdrop-filter backdrop-blur-xl bg-opacity-0 dark:text-white text-black"
        );
      } else {
        setNavBg("bg-white dark:text-black dark:text-white text-black");
      }
    } else {
      setNavBg(
        `${
          isHome || location.pathname === "/"
            ? "bg-transparent"
            : "bg-white dark:bg-black"
        } dark:text-white text-white`
      );
    }
  }, [scrollPosition, isHome, location.pathname]);
 const handleLogOut=()=>{
  console.log('log out')
 }
  return (
    <nav className={`sticky top-0 z-50 ${navBg}`}>
      <div className="w-[90%] mx-auto ">
        <div className="flex justify-between items-center gap-5">
          <div>
            <h1 className="flex gap-3 items-center font-bold ">
              courseMaster
              <img
                src="../../../public/yoga-logo.png"
                alt=""
                className="w-8 h-8"
              />
            </h1>
            <p className="font-bold text-[13px] tracking-[4px]">
              Quick explore
            </p>
          </div>

          <div className="hidden md:block pr-4">
            <div className="flex">
              <ul className="ml-8 space-x-2 flex items-center">
                {navLinks.map((link) => (
                  <li key={link.route}>
                    <NavLink
                      to={link.route}
                      className={({ isActive }) =>
                        `font-bold ${
                          isActive
                            ? "text-secondary"
                            : `${
                                navBg.includes("bg-transparent")
                                  ? "text-white"
                                  : "text-black dark:text-white"
                              }`
                        } hover:text-secondary duration-75`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                {user ? null : isLogin ? (
                  <li>
                    <NavLink
                      to="/register "
                      className={({ isActive }) =>
                        `font-bold ${
                          isActive
                            ? "text-secondary"
                            : `${
                                navBg.includes("bg-transparent")
                                  ? "text-white"
                                  : "text-black dark:text-white"
                              }`
                        } hover:text-secondary duration-75`
                      }
                    >
                      Register
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        `font-bold ${
                          isActive
                            ? "text-secondary"
                            : `${
                                navBg.includes("bg-transparent")
                                  ? "text-white"
                                  : "text-black dark:text-white"
                              }`
                        } hover:text-secondary duration-75`
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                )}
                {user && (
                  <li>
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        `font-bold ${
                          isActive
                            ? "text-secondary"
                            : `${
                                navBg.includes("bg-transparent")
                                  ? "text-white"
                                  : "text-black dark:text-white"
                              }`
                        } hover:text-secondary duration-75`
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                )}
                {user && (
                  <li>
                    <img
                      src={photoURL}
                      alt=""
                      className="h-[40px] rounded-full w-[40px]"
                    />
                  </li>
                )}
                {
                  user && <NavLink onClick={handleLogOut} className={'font-bold px-3 py-1 bg-secondary rounded-xl text-white'}>Logout</NavLink>
                }
                {/* color toggle */}
                <li>
                  <ThemeProvider theme={theme}>
                    <div className="flex flex-col justify-center items-center">
                      <Switch onChange={() => setIsDarkMode(!isDarkMode)} />
                      <h1 className="text-[13px]">Light/Dark</h1>
                    </div>
                  </ThemeProvider>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
