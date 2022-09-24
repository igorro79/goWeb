// import styled from "styled-components";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Cases } from "./components/cases/Cases";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Cases />
      </main>
    </>
  );
}

export default App;
