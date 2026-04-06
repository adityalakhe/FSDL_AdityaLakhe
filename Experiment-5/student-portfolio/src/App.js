import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <Header dark={dark} setDark={setDark} />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
