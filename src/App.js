import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Forgotpassword from './Forgotpassword';
import Resetpassword from './Resetpassword';
import Signup from './Signup';
function App() {

  return (
    <>
          <Routes>
              <Route path="/" element={<Forgotpassword/>} />    
              <Route path="/Signup" element={<Signup/>} />    
              <Route path="/Forgotpassword" element={<Forgotpassword/>} />    
              <Route path="/Resetpassword/:token" element={<Resetpassword/>} />    
          </Routes>
    </>
  );
}

export default App;
