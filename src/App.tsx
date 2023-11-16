import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Header />
      <Footer />

      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
