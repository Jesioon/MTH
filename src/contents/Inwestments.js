import React from 'react';
import img1 from '../images/wizualizacja 3.jpg'
import img2 from '../images/wizualizacja 4.jpg'

const Inwestments = () => {
    const text = `Inwestycja polegająca na budowie 4 domów w zabudowie szeregowej z
    przynależnym ogródkiem i miejscem postojowym.`;

    return ( 
        <div className='inwestments'>
            <h1>inwestycje zrealizowane</h1>
            <article>
                <section>
                <h2>Domy na Porazińskiej</h2>
                <p>{text}</p>
                </section>
                <section className='images'>
                    <img src={img1} alt='coś'/>
                    <img src={img2} alt='coś'/>
                </section>
            </article>
        </div>
     );
}
 
export default Inwestments;