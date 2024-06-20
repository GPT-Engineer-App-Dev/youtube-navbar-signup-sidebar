import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Subscriptions from "./pages/Subscriptions.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/subscriptions" element={<Subscriptions />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
