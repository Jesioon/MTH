import React from 'react';
import '../styles/Footer.css';


const Footer = () => {
    return ( 
    <footer>
        <h1>MTH Sp. z o.o.</h1>
        <section>
            <ul>
                <li>DANE:</li>
                <li>ul. Ksawerego Dunikowskiego 19/2</li>
                <li>20-425 Lublin</li>
                <li>NIP: 9462682010</li>
                <li>KRS: 0000739675</li>
                <li>REGON: 380699267</li>
            </ul>
            <ul>
                <li>KONTAKT:</li>
                <li>Email: <span className='big'>biuro.mthome@gmail.com</span></li>
                <li>Tel: <span className='big'>+48 665 724 888</span></li>

            </ul>
        </section>
    </footer>
     );
}
 
export default Footer;