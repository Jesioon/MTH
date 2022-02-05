import React from 'react';
import img1 from '../images/Inwestments-Porazinska1.jpg'
import img2 from '../images/Inwestments-Porazinska2.jpg'
import img3 from '../images/Inwestments-Porazinska3.jpg'

const Inwestments = () => {
    const text = `Inwestycja polegająca na budowie 4 domów w zabudowie szeregowej z przynależnym ogródkiem i miejscem postojowym. 
    Każda z nieruchomości została oddana do użytku w stanie deweloperskim w III kwartale 2021 roku. Budynki są wyposażone w instalacje 
    wewnętrzne: elektryczną, teletechniczną, gazową, wodno-kanalizacyjną, centralne ogrzewanie z instalacją podłogową na obu piętrach, 
    grzejnikami w łazience i pomieszczeniu technicznym oraz piec gazowy kondensacyjny z zasobnikiem. Domy znajdują się w zielonej i 
    bardzo dobrze skomunikowanej dzielnicy Lublina - Dziesiąta.`;

    return ( 
        <div className='inwestments'>
            <h1>inwestycje zrealizowane</h1>
            <article>
                <section>
                <h2>Domy na Porazińskiej</h2>
                <p>{text}</p>
                </section>
                <section className='images'>
                    <div class='img'>
                        <img src={img1} alt='Domy Porazińska'/>
                    </div>
                    <div class='img'>
                        <img src={img2} alt='Domy Porazińska'/>
                    </div>
                    <div class='img'>
                        <img src={img3} alt='Domy Porazińska'/>
                    </div>
                    
                    
                </section>
            </article>
        </div>
     );
}
 
export default Inwestments;