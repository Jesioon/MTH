import React from 'react';
import OnSaleBrezy1 from '../images/OnSale-Brezy1.jpg';
import OnSaleBrezy2 from '../images/OnSale-Brezy2.jpg';
import OnSaleBrezy3 from '../images/OnSale-Brezy3.jpg';

const OnSale = () => {
    const description1 = `Przedstawiamy Państwu nową ofertę na lubelskim rynku  - dom z
    ogrodem blisko centrum miasta. Inwestycja liczy 9 domów w
    zabudowie szeregowej, wraz z przynależnym ogródkiem i 2 miejscami
    parkingowymi.`;


    const description2 = `Każda z nieruchomości zostanie oddana do użytku w stanie
    deweloperskim w IIII kwartale 2022 roku. Budynki będą wyposażone w
    instalacje wewnętrzne: elektryczną, teletechniczną, gazową, wodno-
    kanalizacyjną, centralne ogrzewanie z instalacją podłogową na obu
    piętrach, grzejnikami w łazience i pomieszczeniu technicznym oraz
    piec gazowy kondensacyjny z zasobnikiem.`;

    const description2x2 = `Układ okien, każdego z budynków, względem stron świata (wschód-
    zachód) gwarantuje wysokie doświetlenie przestrzeni. Układ funkcjonalny
    pomieszczeń zapewnia otwartą przestrzeń w strefie dziennej na
    parterze, komfort mieszkania dla całej rodziny na piętrze oraz praktyczne
    rozwiązania poprzez wydzielenie pomieszczenia gospodarczego i spiżarni.`;

    const description2x3 = ` Teren działki zostanie wyrównany oraz wydzielony ogrodzeniem od strony
    ogrodu i między sąsiadującymi budynkami. Taras na gruncie będzie
    ułożony z desek kompozytowych. Podjazd, opaska wokół domu i chodnik
    zostanie wyłożony kostką brukową na której przewidziano indywidualne
    miejsca postojowe. Od frontu budynku przewidziano nasadzenie żywopłotu
    zapewniającego prywatność jego mieszkańcom.`;

    const description3 = `​Domy znajdują się w zielonej i bardzo dobrze skomunikowanej dzielnicy
    Lublina – Dziesiąta przy ulicy Tadeusza Brezy. Lokalizacja
    nieruchomości pozwoli Państwu na korzystanie ze wszystkich udogodnień
    wynikających z mieszkania w mieście. W niewielkiej odległości znajdują się
    sklepy, punkty usługowe, komunikacja miejska, szpital, kościół oraz szkoła.`;
    
        
    return (
        <>
            <div className='onSale'>
                <h1>w sprzedaży</h1>
                <section class='images'>
                    <div class='image'>
                        <img src={OnSaleBrezy1} alt='wizualizacja 1'></img>
                    </div>
                    <div class='image'>
                        <img src={OnSaleBrezy2} alt='wizualizacja 1'></img>
                    </div>
                </section>

            </div>
            <hr/>
            <div className='realization'>
                <h1>w trakcie realizacji</h1>
           
            <section class='projectBrezy'>
                <article class='description'>
                    <div class='textBrezy'>
                        <h2 id='title'>Domy na Brezy</h2>
                        <p>{description1}</p>
                    </div>
                    <div class='imageBrezy'>
                        <img src={OnSaleBrezy1} alt='wizualizacja 1'></img>
                    </div>
                </article>
                <article class='description'>
                    <div class='imageBrezy'>
                        <img src={OnSaleBrezy3} alt='wizualizacja 1'></img>
                    </div>
                    <div class='textBrezy'>
                        <h2>O projekcie</h2>
                        <p>{description2}</p>
                        <p>{description2x2}</p>
                        <p>{description2x3}</p>
                    </div>
                </article>
                <article class='description'>
                <div class='textBrezy'>
                        <h2 id='lokalizacjaSubtitle'>Lokalizacja</h2>
                        <p>{description3}</p>
                    </div>
                    <div class='imageBrezy'>
                        <img src={OnSaleBrezy2} alt='wizualizacja 1'></img>
                    </div>
                </article>
            </section>
            </div>
        </>

    );
}
 
export default OnSale;