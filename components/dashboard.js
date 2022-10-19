import React, { useState,useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
//import {Link} from 'react-router-dom';

export function Dashboard(){

    var id = localStorage.getItem('id');

    const [userdetails,setUserdetails] = useState([]);

    useEffect(()=>{
        load_userdetails();
    });

    const load_userdetails = () => {
        var datastring = {id:id};
        axios.post("http://localhost:3004/getuserdetails",datastring)
        .then(function(res){
            setUserdetails(res.data);
        })
    }

    const logout = () => {
        localStorage.clear();
        window.location.href="./";
    }

  return(
    <div>
   <nav>
        <div class="topnav">
            <div class="navleft">
                <div>
                    <img class="logo" src="https://s3.rdbuz.com/web/images/home/sgp/r_logo.png" alt=""/>
                </div>
                <div class="nav">
                    <a class="bustickets" href="">BUS TICKETS</a>
                    <a href="">rPool <sup><b>New</b></sup></a>
                    <a href="">BUS HIRE</a>
                    <a href="">redRail</a>
                </div>
            </div>
            <div class="navright">
                    <a id="help" href="">Help</a>
                    <a id="managebooking" href="">
                        <label for="Manage Booking">Manage Booking</label>
                        <select name="Manage Booking">
                            <option value=""></option>
                        </select>
                    </a>
                    <a id="signin" href="">
                        <label for="signin"><i id="user" class="far fa-user-circle"></i></label>
                        <select name="signin">
                            <option value=""></option>
                        </select>
                    </a>
            </div>
        </div>
    </nav>
    <header>
        <div class="head">
            <div class="searchbox">
                <span class="from"><i class="fas fa-city"></i><input id="from" type="text" placeholder="FROM"/><span class="fas fa-exchange-alt"/></span><span class="to"><i class="fas fa-city"></i><input id="to" type="text" placeholder="TO"/></span><span class="date"><i class="fas fa-calendar-alt"></i><input id="date" type="text" placeholder="DATE"/></span><span><button id="searchbutton">Search Buses</button></span>
            </div>
            <div class="headcard">
                <div class="headcardimg">
                    <img src=" https://st.redbus.in/Images/natak/100x100.png " alt=""/>
                </div>
                <div class="headcardtext">
                    <h3>SAVE THE DRAMA FOR THE STAGE!</h3>
                    <p>Book your favourite seat online with redBus.</p>
                </div>                    
            </div>
        </div>    
    </header>    
    <section>
        <div class="cardscont">
            <div class="cards">
                <div>
                    <div class="cardstext">Save up to Rs 150 on bus tickets</div>
                    <div class="cardsimg"><img src="https://st.redbus.in/Images/INDOFFER/Nonatak/new/80x80.png"/></div>
                    <div class="cardstext">Use code FIRST</div>
                </div>
            </div>
            <div class="cards">
                <div>
                    <div class="cardstext">Get 10% off upto Rs 100 on AP & Telangana Routes</div>
                    <div class="cardsimg"><img src="https://st.redbus.in/Images/INDOFFER/HOLIDAY10/247X147.png"/></div>
                    <div class="cardstext">Use Code HOLIDAY10</div>
                </div>
            </div>
            <div class="cards">
                <div>
                    <div class="cardstext">State wise Guidelines</div>
                    <div class="cardsimg"><img src="https://st.redbus.in/Images/buscommon/guidelines.png"/></div>
                    <div class="cardstext">Click here for latest updates</div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="main_cont">
            <div class="safety">
                <div class="safety_img">
                    <img src="https://s3.rdbuz.com/Images/safety/srp/safety.svg" width="75px" alt=""/>
                </div>
                <div class="safety_text">
                    <div class="safety_text_top">
                        <h1>Safety+</h1>
                        <p>Opt to Travel Safe with redBus <a href=""><b>KNOW MORE</b></a></p>
                        <div class="p2">
                            <i class="far fa-lightbulb"></i> Look for buses with 
                            <i class="fas fa-shield-virus"></i> <b>Safety+ </b> 
                            tag while booking your journey,
                        </div>
                    </div>
                    <div class="safety_text_bottom">
                        <div>
                            <h1>Sanitized Bus</h1>
                            <p>All Safety+ buses are sanitized and disinfected before and after every trip.</p>
                        </div>
                        <div>
                            <h1>Mandatory masks</h1>
                            <p>Proper masks are mandatory for all passengers and bus staff.</p>
                        </div>
                        <div>
                            <h1>Thermal Screening</h1>
                            <p>All passengers will undergo thermal screening. Temperature checks for bus drivers and service staff are done before every trip.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="maintext">
                    <div class="landscape_img">
                        <img src="https://s2.rdbuz.com/web/images/home/city_scape_app_download.png" width="100%" alt=""/>
                    </div>
                    <div class="maintext1">
                        <h1>CONVENIENCE ON-THE-GO.</h1>
                        <p>Enjoy the following exclusive features on the redBus <br/> app <br/><br/>
                            Last Minute Booking - In a hurry to book a bus at the <br/> last minute? 
                            Choose the bus passing from your <br/> nearest boarding point and book in a few easy steps. <br/><br/>
                            Boarding Point Navigation - Never lose your way while <br/> travelling to your boarding point! <br/><br/>
                            Comprehensive Ticket Details- Everything that you <br/> need to make the travel 
                            hassle free - rest stop details, <br/> boarding point images, chat with co-passengers, <br/> wake-up 
                            alarm and much more! <br/><br/>
                            Enter your mobile number below to <br/> download the redBus mobile app.
                        </p><br/>
                        <select class="code"><option class="code">91</option></select>
                        <input class="mob_num" type="text" placeholder="Enter your mobile number"/><br/>
                        <button class="sms">SMS ME THE LINK</button><br/><br/>
                        <i class="fab fa-app-store-ios"></i> &nbsp;
                        <i class="fab fa-google-play"></i>   
                    </div>
                    <div class="phone_img">
                        <img src="https://s1.rdbuz.com/web/images/home/IOS_Android_device.png" width="430px" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="promise_cont">i
            <div class="promise_head">
                <img src="https://s1.rdbuz.com/web/images/home/promise.png" alt=""/>
                <h1>WE PROMISE TO DELIVER</h1>
            </div>
            <div class="promise_cards">
                <div class="promise_card">
                    <div class="promise_img">
                        <img src="https://s3.rdbuz.com/Images/safety/srp/safety.svg" width="80px" alt=""/>
                    </div>
                    <div class="promise_subhead">
                        <p>SAFETY+</p>
                    </div>
                    <div class="promise_cont1">
                        <p>With Safety+ we have brought in <br/> 
                            a set of measures like Sanitized <br/> buses, mandatory 
                            masks etc. to <br/> ensure you travel safely.
                       </p>
                    </div>
                </div>
                <div class="promise_card">
                    <div class="promise_img">
                        <img src="https://s1.rdbuz.com/web/images/home/customer_care.png" width="90px" alt=""/>
                    </div>
                    <div class="promise_subhead">
                        <p>SUPERIOR CUSTOMER <br/> SERVICE</p>
                    </div>
                    <div class="promise_cont2">
                        <p>We put our experience and <br/> relationships to 
                            good use and are <br/> available to solve your travel <br/> issues.</p>
                    </div>      
                </div>
                <div class="promise_card">
                    <div class="promise_img">
                        <img src="https://s1.rdbuz.com/web/images/home/lowest_Fare.png" width="120px" alt=""/>
                    </div>
                    <div class="promise_subhead"> 
                        <p>LOWEST PRICES</p>
                    </div>
                    <div class="promise_cont3">
                        <p>We always give you the lowest <br/> price with the best partner offers.</p>
                    </div>
                </div>
                <div class="promise_card PC-last">
                    <div class="promise_img">
                        <img src=" https://s2.rdbuz.com/web/images/home/benefits.png" width="110px" alt=""/>
                    </div>
                    <div class="promise_subhead">
                        <p>UNMATCHED BENEFITS</p>
                    </div>
                    <div class="promise_cont4">
                        <p>We take care of your travel <br/> beyond ticketing by providing <br/>
                            you with innovative and unique <br/> benefits.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="awards_cont">
            <div class="awards_head"> 
                <h1>AWARDS & RECOGNITION</h1>
            </div>
            <div class="award_secs">
                <div class="award_sec1 award_sec">
                    <div>
                        <img src="https://s2.rdbuz.com/web/images/home/awards/Business_Standard1.png" alt=""/>
                    </div>
                    <div>
                        <p>Most Innovative <br/> Company</p>
                    </div>
                </div>
                <div class="award_sec2 award_sec">
                    <div>
                        <img src="https://s1.rdbuz.com/web/images/home/awards/Brand_Trust_Report.png" alt=""/>
                    </div>
                    <div>
                        <p>Most Trusted <br/> Brand</p>
                    </div>
                </div>
                <div class="award_sec3 award_sec">
                    <div>
                        <img src="https://s3.rdbuz.com/web/images/home/awards/Eye_for_Travel1.png" alt=""/>
                    </div>
                    <div>
                        <p>Mobile Innovation <br/> Award</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="flag_cont">
            <div>
                <h1>OUR GLOBAL PRESENCE</h1>
            </div>
            <div class="flag1">
                <div class="colombia">
                    <img src="Colombia flag.png" width="120px" height="80" alt=""/>
                    <p>COLOMBIA</p>
                </div>
                <div class="india">
                    <img src="India flag.png" width="121px" height="80" alt=""/>
                    <p>INDIA</p>
                </div>
                <div>
                    <img src="Indonesia flag.png" width="121px" height="80" alt=""/>
                    <p>INDONESIA</p>
                </div>
            </div>
            <div class="flag2">
                <div>
                    <img src="Malaysia flag.png" width="158px" height="80" alt=""/>
                    <p>MALAYSIA</p>
                </div>
                <div>
                    <img src="Peru-flag.png" width="120px" height="80" alt=""/>
                    <p>PERU</p>
                </div>
                <div>
                    <img src="Singapore flag.png" width="121px" height="80" alt=""/>
                    <p>SINGAPORE</p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="num_cont">
            <div class="num_head">
                <h1>THE NUMBERS ARE GROWING!</h1>
            </div>
            <div class="num">
                <div>
                    <p class="subhead">CUSTOMERS</p>
                    <h1>36 M</h1>
                    <p class="brief">redBus is trusted by over 36 <br/> million happy customers <br/> globally</p>
                </div>
                <div>
                    <p class="subhead">OPERATORS</p>
                    <h1>3500</h1>
                    <p class="brief">network of over 3500 bus <br/> operators worldwide</p>
                </div>
                <div>
                    <p class="subhead">BUS TICKETS</p>
                    <h1>220+ M</h1>
                    <p class="brief">Over 220 million trips <br/> booked using redBus</p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="service_cont">
            <div class="routes">
                <div class="routes1">
                    <h4>Top Bus Routes</h4>
                    <a href="">Hyderabad to Bangalore Bus</a>
                    <a href="">Bangalore to Chennai Bus</a>
                    <a href="">Pune to Bangalore Bus</a>
                    <a href="">Mumbai to Bangalore Bus</a>
                    <a href="">More </a>
                </div>
                <div class="routes2">
                    <h4>Top Cities</h4>
                    <a href="">Hyderabad Bus Tickets</a>
                    <a href="">Bangalore Bus Tickets</a>
                    <a href="">Chennai Bus Tickets</a>
                    <a href="">Pune Bus Tickets</a>
                    <a href="">More </a>
                </div>
                <div class="routes3">
                    <h4>Top RTC's</h4>
                    <a href="">APSRTC</a>
                    <a href="">MSRTC</a>
                    <a href="">HRTC</a>
                    <a href="">UPSRTC</a>
                    <a href="">More </a>
                </div>
                <div class="routes4">
                    <h4>Other</h4>
                    <a href="">GSRTC</a>
                    <a href="">RSRTC</a>
                    <a href="">KTCL</a>
                    <a href="">PEPSU</a>
                    <a href="">More </a>
                </div>
                <div class="routes5">
                    <h4>Tempo Traveller in Cities</h4>
                    <a href="">Tempo traveller in Bangalore</a>
                    <a href="">Tempo traveller in Chennai</a>
                    <a href="">Tempo traveller in Mumbai</a>
                    <a href="">Tempo traveller in Hyderabad</a>
                    <a href="">Tempo traveller in Ahmedabad</a>
                </div>
            </div>
            <div>
                <hr/>
            </div>
            <div class="operators">
                <h4>Top Operators</h4>
                <div class="operators_list">
                    <a href="">SRS Travels</a> | <a href="">Evacay Bus</a> | <a href="">Kallada Travels</a> | <a href="">KPN Travels</a>
                    | <a href="">Orange Travels</a> | <a href="">Parveen Travels</a> | <a href="">Rajdhani Express</a> | <a href="">VRL Travels</a> 
                    | <a href="">Chartered Speed Bus</a> | <a href="">Bengal Tiger</a> | <a href="">SRM Travels</a> | <a href="">Infant Jesus</a> | <a href="">Patel Travels</a> | <a href="">JBT Travels</a> 
                    | <a href="">Shadabdi Travels</a> | <a href="">Eagle Travels</a> | <a href="">Kanker Roadways</a> |<a href="">Komitla</a> 
                    | <a href="">Sri Krishna Travels</a> | <a href="">Humsafer Travels</a> | <a href="">Mahasagar Travels</a> 
                    | <a href="">Raj Express</a> | <a href="">Sharm Travels</a> | <a href="">Shrinath Travels</a> | <a href="">Universal Travels</a> 
                    | <a href="">Verma Travels</a> | <a href="">Gujarat Travels</a> |<br/> <a href="">madurai Radha Travels</a> | <a href="">Patel Tours and Travels</a> | <a href="">Paulo Travels</a> 
                    | <a href="">Royal Travels</a> | <a href="">Amarnath Travels</a> | <a href="">Vaibhav Travels</a> 
                    | <a href="">Ganesh Travels</a> | <a href="">Jabbar Travels</a> |<br/> <a href="">Jain Travels</a> | <a href="">Manish Travels</a> 
                    | <a href="">Pradhan Travels</a> | <a href="">YBM Travels</a> | <a href="">Hebron Transports</a> | <a href="">Mahalaxmi Travels</a> | <a href="">MR Travels</a> 
                    | <a href="">Vivegam Travels</a> | <a href="">VST Travels</a> |<br/> <a href="">Jakhar Travels</a> | <a href="">Kaleswari Travels</a> | <a href="">Mahendra Travels</a> | <a href="">Neeta Tours and Travels</a> 
                    | <a href="">Yamani Travels</a> | <a href="">Arthi Travels</a>
                </div>
                <div class="all_operators">
                    <a href="">All Operators </a>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div class="foot_cont">
            <div class="foot">
                <div>
                    <h4>About redBus</h4>
                    <a href="">About Us</a>
                    <a href="">Contact Us</a>
                    <a href="">Mobile Version</a>
                    <a href="">redBus on Mobile</a>
                    <a href="">SiteMap</a>
                    <a href="">Offers</a>
                    <a href="">Careers</a>
                    <a href="">Values</a>
                </div>
                <div>
                    <h4>Info</h4>
                    <a href="">T & C</a>
                    <a href="">Privacy Policy</a>
                    <a href="">FAQ</a>
                    <a href="">Blog</a>
                    <a href="">Bus Operator Registeration</a>
                    <a href="">Agent Registeration</a>
                    <a href="">Insurance Partner</a>
                    <a href="">User Agreement</a>
                </div>
                <div>
                    <h4>Global Sites</h4>
                    <a href="">India</a>
                    <a href="">Singapore</a>
                    <a href="">Malaysia</a>
                    <a href="">Indonesia</a>
                    <a href="">Peru</a>
                    <a href="">Colombia</a>
                </div>
                <div>
                    <h4>Our Partners</h4>
                    <a href="">Goibibo</a>
                    <a href="">Makemytrip</a>
                </div>
                <div>
                    <img src="https://s3.rdbuz.com/web/images/home/sgp/r_logo.png" alt=""/>
                    <p>
                        redBus is the world's largest online bus ticket <br/> booking service trusted by over 25 million <br/>
                        happy customers globally. redBus offers bus <br/> ticket booking through its website,iOS and <br/>
                        Android mobile apps for all major routes.
                    </p>
                    <i class="fab fa-facebook-square"></i>&nbsp;&nbsp;
                    <i class="fab fa-twitter-square"></i>
                    <p>&copy; 2021 ibibogroup All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>














    </div>
  );
}
