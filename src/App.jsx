import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";

import Main from './components/Main';
import Card from './components/Card'
import CompanySignUp from "./components/CompanySignUp";
import CandidateSignUp from "./components/CandidateSignUp";
import ThirdPage from "./components/ThirdPage";
import ResumeBuilder from "./components/ResumeBuilder";
function App() {
  return (<>
    <NavBar/>
    <Main/>
    <SecondPage/>
    <Card/>
    <ThirdPage/>
    <Footer/>
  </>
  ) 
}

export default App;
