import React from 'react'
import HeadOffice from './images/ho.jpg';
import './style/Branch.css';

export default function Branches() {
  return (
    <div className='divbody'>
      <div className="head">
        <h1>BRANCHES</h1>
    </div>
    <div className="headoffice">
        <h2 className="HO">Head Office</h2>
        <p className="HO">SAYA ENTERPRISES<br />
        Puttur
        </p>
        <div className="hoff">
           <div className="horow" id="officeimg"><img src={HeadOffice} />
           </div>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.2272241523915!2d75.2075706!3d12.763750499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4bdbe5de45253%3A0xc9851bc493de6503!2sSAYA%2C%20Puttur!5e0!3m2!1sen!2sin!4v1670078255962!5m2!1sen!2sin" className='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        
        <p></p>
    </div>
    <div className="branch">
        <center className="b-text" id="b-text"><h2>KARNATAKA BRANCHES</h2></center>
        <div className="brow">
        <a href="https://goo.gl/maps/tzENJDJY2EYS5jf27">
            <div className="bcolumn" id="bc1">
                <h1>VITTAL</h1>
                Saya Enterprises<br />
                Leelavathi Compound, Puttur Road,<br />
                Vittal - 574243<br />
                Dakshina Kannada Dist.<br />
                Ph: 08255-239212, 94489 45852<br />            
            </div>
        </a>
        <a href="https://goo.gl/maps/Qzubffkye8w2yL84A">
            <div className="bcolumn" id="bc2">
                <h1>SULLIA</h1>
                Saya Enterprises<br />
                Mogarpane, Main Road,<br />
                Sullia - 574239<br />
                Dakshina Kannada Dist.<br />
                Ph: 94487 65852, 73384 01852,  08251 235852<br />
            </div>
        </a>
        <a href="https://goo.gl/maps/BkBjhpxgp7hkjwZJ6">
            <div className="bcolumn" id="bc3">
                <h1>KADABA</h1>
                Saya Enterprises<br />
                No. I-40, Opp. Kadaba Police Station,<br />
                Main Road, Kadaba - 574221<br />
                Ph: 81975 68043, 94812 65852<br />
            </div>
        </a>
        <a href="https://goo.gl/maps/bsD52ZMuginFYBnXA">
            <div className="bcolumn" id="bc1">
                <h1>BELTHANGADY</h1>
                Saya Enterprises<br />
                No. I-49/1, Near IOCL Petrol Pump,<br />
                Halekote, Main Road,<br />
                Belthangady - 574214<br />
                Ph: 94812 50852, 89044 73852<br />
            </div>
        </a>
        <a href="https://goo.gl/maps/dtCE6tGuHvimvre29">
            <div className="bcolumn" id="bc2">
                <h1>MOODABIDRE</h1>
                Saya Enterprises<br />
    Aaco Classic Complex, Alangar,<br />
    Moodabidire - 574 227, Dakshina Kannada Dist.<br />
    Ph: 82968 87852, 94802 50852<br />
            </div>
        </a>
        <a href="https://goo.gl/maps/9cBSEX49DWBwiZod6">
            <div className="bcolumn" id="bc3">
                <h1>KINNIGOLI</h1>
                Saya Enterprises<br />
    Battakodi,Shibaroor Road,<br />
    Kinnigoli - 574 150, Dakshina Kannada Dist.<br />
    Ph: 82774 33852<br />
            </div>
        </a>
        <a href="https://goo.gl/maps/n3xpYMqTpLSTSoi87">
            <div className="bcolumn" id="bc3">
                <h1>MANGALORE</h1>
                Saya Enterprises<br />
    Shyam Complex, Opp: Capitanio School, Garodi,<br />
    Mangalore - 575 002, Dakshina Kannada Dist.<br />
    Ph: 0824-2438852, 98455 32942<br />
            </div>
        </a>
        </div>
    </div>
    <div className="branch">
        <center className="b-text" id="b-text"><h2>KERALA BRANCHES</h2></center>
        <div className="brow">
        <a href="https://goo.gl/maps/VY7GNGPTm8USGNJy9">
            <div className="bcolumn" id="bc1">
                <h1>UPPALA</h1>
                Machine Bazaar<br />
    Saya Venture Private Limited<br />
    Natakal Commercial Complex<br />
    Kaikamba, Uppala - 671 322<br />
    Kasaragod Dist.<br />
    Ph: 04998-240501, 94955 21500<br />
            </div>
        </a>
        <a href="https://goo.gl/maps/P7NkA4eDPW1RK9An9">
            <div className="bcolumn" id="bc2">
                <h1>BADIYADKA</h1>
                Saya Enterprises<br />
    Lakshmi Venkatesh Building<br />
    Kasaragod Road, Badiadka - 671551<br />
    Kasaragod Dist.<br />
    Ph: 04998-285194, 94462 65852<br />
            </div>
        </a>
        <a href="https://goo.gl/maps/GmxPUqYH4mftpjJz7">
            <div className="bcolumn" id="bc3">
                <h1>KANHANGAD</h1>
                Saya Enterprises<br />
    NH-66, Opp: Sri Ram Temple,<br />
    Mavungal, Kanhangad - 671 531<br />
    Kasaragod Dist.<br />
    Ph: 0467-2204200, 97470 66699<br />
            </div>
        </a>
        </div>
    </div>
    <div></div>
    </div>
  )
}

