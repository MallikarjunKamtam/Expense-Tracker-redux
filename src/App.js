import Home from "./pages/home";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/add-expense" element={<AddExpense />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
