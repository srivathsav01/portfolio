import './App.css';
import Header from './components/header/Header';
import Contact from './components/contact/contact';
import { ToasterProvider } from "./components/toaster/toaster";

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
