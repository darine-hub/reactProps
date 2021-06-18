import React from "react";
import monProfile from "./profile.jpg"

const Profile = props =>{
   const buttonstyle = {
        "position": "fixed",
        "text-align": "center",
        "font-size": "42px",
        "font-family": "Raleway",
        "color": "#F08080",
        "width": "300px",
        "height": "100px",
        "margin-top": "50px ",
       " margin-left": "calc(50vw - 175px)",
    
       
      
       "cursor":"pointer" ,
        "border-radius": "100px 30px 100px 30px"
    
    }


return (
<div >   
<img src={monProfile}  alt="profile"/>   
<div><h2> NAME:</h2><h3>{props.name}</h3><h2> Profession:</h2><h3>{props.profession}</h3> <h2> BIO:</h2><h3>{props.bio}</h3> </div>
<button style= {buttonstyle} onClick={()=> alert(props.name)

}>
clickMe

</button>

</div> 

);

};
Profile.defaultProps = {
    name: "Darine Ben Mahmoud",
    
    profession:"Full stack web developer"
  };

  Profile.propTypes = {
    name: String,
    bio:String,
    profession:String
  };
export default Profile;  
  
  
  