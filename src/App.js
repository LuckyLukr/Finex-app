import { useState } from 'react';
import './App.css';

import Navbar from './components/navbarComponent/navbarComponent';
import Header from './components/headerComponent/headerComponent';
import Background from './components/backgroundComponent/backgroundComponent';
import Sidemenu from './components/sidemenuComponent/sidemenuComponent';
import About from './components/aboutComponent/aboutComponent';
import Courses from './components/coursesComponent/coursesComponent';
import Footer from './components/footerComponent/footerComponent';
import Video from './components/videoComponent/videoComponent';
import Confirmation from './components/confirmComponent/confirmComponent';

function App() {
  const [ sidemenu, setSidemenu ] = useState(false);
  const [ play, setPlay ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ isSuccess, setIsSuccess ] = useState(false);

  const handleOpen = () => setSidemenu(!sidemenu);
  const handlePlay = () => setPlay(!play);

  const handleEmailChange = ( e ) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const sendEmail = () => {
    /*    
     *    send validation email to users email through email services like EmailJS 
     *    and post that users email to database trough client HTTP API like Axios
     */   
    setIsSuccess(true);
    setEmail('');
    setTimeout(()=> { setIsSuccess(false); }, 3000);
  }

  return (
    <div className='App'>
      { isSuccess && <Confirmation email={email} /> }
      { play && <Video onVideo={handlePlay} /> }

      <Background />

      <div className='container'>
        <Navbar onOpen={handleOpen} />
        { sidemenu && <Sidemenu onOpen={handleOpen} /> }
        <Header onPlay={handlePlay} />
        <About />
        <Courses onEmailChange={handleEmailChange} email={email} sendEmail={sendEmail} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
