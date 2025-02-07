import { BrowserRouter, Routes, Route} from "react-router-dom";
import './styles/App.css';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

/*npm install react-router-dom */;


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* Gestion des routes non trouvées */}
          <Route path= "/*" element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
