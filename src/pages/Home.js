import React from 'react'
import "../App.css";
import TopBar from "../components/TopBar";
import { ThemeProvider } from "@emotion/react";
import theme from '../styles/theme';
import HeroSection from "../components/HeroSection";
import Benefits from "../components/Benefits";
import Information from "../components/Information";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="App">
        <HeroSection />
        <Benefits />
        <Information />
        <Features />
      </div>  )
}

export default Home