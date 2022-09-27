import { useState } from "react";

import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Cases } from "./components/cases/Cases";
import { Blog } from "./components/blog/Blog";
import { Team } from "./components/team/Team";
import { Contacts } from "./components/contacts/Contacts";
import { Footer } from "./components/footer/Footer";

function App() {
  const [visibleSection, setVisibleSection] = useState(null);

  const handleVisibleSectionChande = (sectionName) =>
    setVisibleSection(sectionName);

  return (
    <>
      <Header visibleSection={visibleSection} />
      <main>
        <Hero onChange={handleVisibleSectionChande} />
        <About onChange={handleVisibleSectionChande} />
        <Cases onChange={handleVisibleSectionChande} />
        <Blog onChange={handleVisibleSectionChande} />
        <Team />
        <Contacts onChange={handleVisibleSectionChande} />
      </main>
      <Footer />
    </>
  );
}

export default App;
