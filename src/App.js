import './App.css';
import Header from './components/Header';
import Contact from './components/contact';
import { ToasterProvider } from "./components/toaster";

function App() {

  return (
    <>
    <ToasterProvider>
      <Header />
      <Contact className="contact"/>
    </ToasterProvider>
    </>
  );
}

export default App;
