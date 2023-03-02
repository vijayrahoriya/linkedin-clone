import Message from './pages/message/Message';
import './App.css';
import Header from './components/header/Header';
import LeftSidebar from './components/leftsidebar/LeftSidebar';
import Posts from './components/posts/Posts';
import RightSidebar from './components/rightbar/RightSidebar';
import Jobs from './pages/jobs/Jobs';
import Network from './pages/network/Network';
import Notification from './pages/notification/Notification';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/' element={
            <div className='main-field container'>
              <LeftSidebar />
              <Posts />
              <RightSidebar />
            </div>
          } />
          <Route path='/network' element={<Network/>}/>
          <Route path='/jobs' element={<Jobs/>}/>
          <Route path='/message' element={<Message/>}/>
          <Route path='/notification' element={<Notification/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
