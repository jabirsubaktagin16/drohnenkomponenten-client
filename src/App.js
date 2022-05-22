import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header";
import SignIn from "./Pages/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
