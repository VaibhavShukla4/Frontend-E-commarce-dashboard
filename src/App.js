import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./routes/Products";
import AddProducts from "./routes/AddProducts";
import UpdateProducts from "./routes/UpdateProducts";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import Account from "./routes/Account";
import SignUp from "./routes/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<Account />}>
          <Route index element={<Products />} />
          <Route path="/" element={<Products />} />
          <Route path="/add" element={<AddProducts />} />
          <Route path="/update/:id" element={<UpdateProducts />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
