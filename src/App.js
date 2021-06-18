import logo from './logo.svg';
import './App.css';
import Profile from "./profil/Profile"

const App =()=> {
  const container= {
    "margin-top":"100px",
    "background": "#F08080",
   " border-radius": "20px",
    "padding": "30px 80px",
    "max-width": "350px",
    "margin": "0 auto",
    "box-shadow": "0 15px 16px .17px rgba(0,0,0,0.05)",
    "border-radius": "10px 100px / 120px"
    
  
  }

  return (
    <div style={container}>
    
     
    
     <Profile bio="je suis un developpeur web front ent et back end ,je maitrise la bibliotheque react" />
      
    </div>
  );
}

export default App;
