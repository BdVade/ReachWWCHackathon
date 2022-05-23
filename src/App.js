import { Routes, Route } from 'react-router-dom';
import Signup from './Pages/signup';
import Login from './Pages/Login';
import Wallet from './Pages/Wallet';
import MakeBid from './Pages/Bid';

import './App.css';
import Landing from './Pages/Landing';
import Explore from './Pages/Explore';
import { NotFoundPage } from './Pages/NotFound';
// import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/bid" element={<MakeBid />} />
        {/* Other module routes should come before the landing pages */}
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
