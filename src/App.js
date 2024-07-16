import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/TopBar";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits";
import Information from "./components/Information";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Resources from "./pages/Resources";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Partner from "./pages/Partner";
import Platform from "./pages/Platform";
import Company from "./pages/Company";
import Pricing from "./pages/Pricing";
function App() {
  return (
    // <ThemeProvider theme={theme}>
    //   <Products />
    // </ThemeProvider>
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/partners" element={<Partner />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/company" element={<Company />} />
            <Route path="/pricing" element={<Pricing />} />
            
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
