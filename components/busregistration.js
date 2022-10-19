import img1 from './divimgg.png';
 import img2 from './bus.png';
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export function Busregistration(){

    const handlesubmit = (event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post('http://localhost:3004/bus',datastring,config)
        .then(function(res){
            if(res.data.status ==='error'){
                alert('Login Invalid');
                window.location.reload();
            }
            else{
                alert('Login valid');
                var id = res.data.status;
                localStorage.setItem('id',id);
                window.location.href="./dashboard";
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
          <img src ={img1} className='divimg'/> 
       </div>
        <div className='div2'>
           { <img src ={img2} className='bus'/>}
         <h1> Traveller Sign up</h1>
         <form onSubmit={handlesubmit}>
              Traveller Name:<input className='ip' name='tname' type="text" placeholder='Enter your Name'/><br/>
            Bus No:<input className='ip' name='cname'type="email" placeholder='Enter your Emaid id'/><br/>
            Sitting capacity:<input className='ip' name='bname' type="text" placeholder='Enter your mobile number'/><br/>
            Standing capacity:<input className='ip' name='tname' type="text" placeholder='Enter your Name'/><br/>
            location start:<input className='ip' name='tname' type="text" placeholder='Enter your Name'/><br/>
            location end :<input className='ip' name='tname' type="text" placeholder='Enter your Name'/><br/>
            <button  className='otp'>Sumbit</button>
          </form>
         </div>
      </div>
    );
  }
 