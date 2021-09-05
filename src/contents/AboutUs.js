import React from 'react';
import image from '../images/budowa.jpg';

const AboutUs = () => {

    return ( 
        <div className='aboutUs'>
            <h1>o nas</h1>
            <section>
                <p>
                    <span>Utworzenie Spółki MTH jest wynikiem połączenia doświadczeń zawodowych jej założycieli.
                    Zdobywali je podczas realizacji inwestycji budowlanych zajmując stanowiska na każdym
                    poziomie zarządzania procesem inwestycyjnym. Tworzą ją: </span>
                    <ul>
                        <li>Menadżer firmy deweloperskiej,</li>
                        <li>Kierownik Budowy wielorodzinnych obiektów mieszkalnych,</li>
                        <li>Właściciel firmy budowlanej realizującej od podstaw budynki mieszkalne jednorodzinne.</li>
                    </ul>
                    <span class='bold'>
                    ​Misją spółki jest nie tylko
                    wznoszenie budynków ale przede wszystkich urzeczywistnianie marzeń i potrzeb naszych
                    klientów. Dbamy o każdy szczegół - począwszy od wyboru atrakcyjnej lokalizacji naszych
                    inwestycji, poprzez funkcjonalne rozwiązania, staranne i solidne wykonanie z wysokiej
                    jakości materiałów, aż do oferowanej Państwu atrakcyjnej ceny.​</span>
                </p>
                <img src={image} alt='budowa'/>
            </section>
        </div>
     );
}
 
export default AboutUs;