import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./routes/Products";
import AddProducts from "./routes/AddProducts";
import UpdateProducts from "./routes/UpdateProducts";
import Profile from "./routes/Profile";
import Logout from "./routes/Logout";
import Account from "./routes/Account";
import SignUp from "./routes/SignUp";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Account />}>
          <Route index element={<Products />} />
          <Route path="/" element={<Products />} />
          <Route path="/add" element={<AddProducts />} />
          <Route path="/update" element={<UpdateProducts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
