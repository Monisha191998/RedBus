import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import img1 from './divimgg.png';
 import img2 from './bus.png';
export function Signup(){

    const handlesubmit = (event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post('http://localhost:3004/signup',datastring,config)
        .then(function(res){
            if(res.data.status ==='Created'){
                alert('Created');
                window.location.reload();
                window.location.href="./signin";
            }
            else{
                alert('Error');
                window.location.reload();
            }
        })
        .catch(function(err){
            alert(err);
            window.location.reload();
        }); 
    }
    
  return (
    <div className='div'>
     < div className='div1'>
        <img src ={img1} className='divimgg'/> 
     </div>
      <div className='div2'>
         { <img src ={img2} className='bus'/>}
       <h1 className='uph'>Sign up</h1>
       <form onSubmit={handlesubmit}>
        <span class="sh">Signup:</span>
        <select class="sel"> 
            <option>Choose</option>
            <option >Traveller</option>
            <option>User</option>
        </select><br/><br/>
                  Name:<input className='ip' type="text" name='sname' placeholder='Enter your Name'/><br/>
                  Email:<input className='ip' type="email" name='semail' placeholder='Enter your Emaid id'/><br/>
                   Mobile no:<input className='ipm' type="text"  name='sphone'placeholder='Enter your mobile number'/><br/>
                    Password: <input className='ipp' type="password" name='spassword' placeholder='Enter password'/><br/>
       <button  className='otp'>Sumbit</button>
       <button  className='otp'>trav</button>
        </form>
       </div>
    </div>
  );
}
