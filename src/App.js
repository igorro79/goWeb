// import styled from "styled-components";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Cases } from "./components/cases/Cases";
import { Blog } from "./components/blog/Blog";
import { Team } from "./components/team/Team";
import { Contacts } from "./components/contacts/Contacts";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Cases />
        <Blog />
        <Team />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
