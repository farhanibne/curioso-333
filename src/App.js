import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className='sta' style={{display:'flex'}}>

   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h6 style={{backgroundColor:'#282c34',color:'#282c34'}}> If You Need the Image <a style={{textDecoration:'none',color:'#282c34'}} href="https://drive.google.com/file/d/1HCsKASp1p_R8Wc53yUxL1jFknfAQYp2P/view" target={"_blank"}>Click Here</a></h6>
        <div>
        <p>
        Hello. <br/>

        We are looking for something amazing around you. <br/>
        To find them, we have to take a test. <br/>

        There is a hidden item in the image.<br/>
        Find it, It will lead you to the path.<br/>


        Good Luck.<br/>

        333
        </p>
       
        </div>
       
      </header>
    </div>
   

        // </div>
  );
}

export default App;
