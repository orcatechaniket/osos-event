
import './App.css';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import FlashScreen from './component/FlashScreen';
import LoginScreen from './component/LoginScreen';
import EventScreen from './component/EventScreen';
import EventDetail from './component/EventDetail';
import PaperScreen from './component/PaperScreen';
import TopicScreen from './component/TopicScreen';
function App() {
  return (
    <div>
       <BrowserRouter>
       <ToastContainer/>
        <Routes>
          <Route path="/" element={<FlashScreen/>}  />
          <Route path="/login" element={<LoginScreen/>}  />
          <Route path="/event" element={<EventScreen/>} />
          <Route path="/event-detail" element={<EventDetail/>} />
          <Route path="/event-paper" element={<PaperScreen/>} />
          <Route path="/event-topic" element={<TopicScreen/>} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
