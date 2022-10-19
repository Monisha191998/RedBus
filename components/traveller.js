import img1 from './divimgg.png';
 import img2 from './bus.png';
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export function Traveller(){

    const handlesubmit = (event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post('http://localhost:3004/trav',datastring,config)
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
         <h1 class="snup"> Traveller Sign up</h1><br/>
         <form onSubmit={handlesubmit}>
              Traveller Name:<input className='ip' name='tname' type="text" placeholder='Enter your Traveller Name'/><br/><br/>
            City:<input className='ip' name='cname'type="text" placeholder='Enter your city'/><br/><br/>
            Total no of Bus:<input className='ip' name='bname' type="text" placeholder='Enter total no of bus'/><br/><br/>
            <button  className='otp'>Sumbit</button>

          </form>
         </div>
      </div>
    );
  }
 