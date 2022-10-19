
import img1 from './divimgg.png';
 import img2 from './bus.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle, } from "@fortawesome/free-brands-svg-icons";
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export function Signin(){

    const handlesubmit = (event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);

        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }

        axios.post('http://localhost:3004/signin',datastring,config)
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
         <h1 class="hin">Sign in to avail exciting discounts and cashbacks!</h1>
         <form onSubmit={handlesubmit}>
            <input className='ip' type="text" name="username" placeholder='Enter your username'/><br/>
            <br/>
            <input className='ippas' type="password" name="password" placeholder='Enter your password'/><br/><br/>
            <button  className='otp'>GENERATE OTP (One Time Password)</button><br/>
             <button type="submit" name="data_submit" id="data_submit" value="submit"className="btn btn-primary inbtn" > Signin</button>
                <Link to='/Signup'><button type="button" class="upbtn"className="btn btn-danger">Signup</button></Link>
                    </form>
         <h3>OR,Connect using social accounts</h3>
             <button className='goog'><span className='sp1'><FontAwesomeIcon icon={faGoogle} className='g'/></span>Sign in with Google</button><br/><br/>
             <button  className='faceb'><span className='sp2'><FontAwesomeIcon icon={faFacebook}  className='f'/></span>Facebook</button><br/><br/>
          <h6>By Signing up,you agree to</h6>
          <h6> our <span>Terms & Condition</span> and<span>privacy policy</span></h6>
         </div> 
      </div>
    );
}

                
//  function Login(){
//   return (
//     <div className='div'>
//       < div className='div1'>
//         <img src ={img1} className='divimg'/> 
//      </div>
//       <div className='div2'>
//          { <img src ={img2} className='bus'/>}
//        <h1>Sign in to avail exciting discounts and cashbacks!</h1>
//           <input className='ip' type="text" placeholder='Enter your mobile number'/><br/>
//           <br/>
//           <button  className='otp'>GENERATE OTP (One Time Password)</button>
//        <h3>OR,Connect using social accounts</h3>
//            <button className='goog'><span className='sp1'><FontAwesomeIcon icon={faGoogle} className='g'/></span>Sign in with Google</button><br/><br/>
//            <button  className='faceb'><span className='sp2'><FontAwesomeIcon icon={faFacebook}  className='f'/></span>Facebook</button>
//         <h6>By Signing up,you agree to</h6>
//         <h6> our <span>Terms & Condition</span> and<span>privacy policy</span></h6>
//        </div> 
//     </div>
//   );
// }
// export default Login;