import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import OnSaleZarembiny1 from '../images/OnSale-Zarembiny1.jpg';
import OnSaleZarembiny2 from '../images/OnSale-Zarembiny2.jpg';
import OnSaleZarembiny3 from '../images/OnSale-Zarembiny3.jpg';
import OnSaleZarembiny4 from '../images/OnSale-Zarembiny4.jpg';
import OnSaleZarembiny5 from '../images/OnSale-Zarembiny5.jpg';
import OnSaleZarembiny6 from '../images/OnSale-Zarembiny6.jpg';
import OnSaleZarembiny7 from '../images/OnSale-Zarembiny7.jpg';

const OnSale = () => {

    const description1 = (
        <Fragment>
            <b>Zapraszamy do zapoznania się z ofertą zakupu domu w zabudowie szeregowej. 
            Jest to nowa inwestycja deweloperska mieszcząca się przy ulicy Ewy Szelburg-Zarembiny w Lublinie.</b>
            <br></br>
            <br></br>
            Inwestycja obejmuje 9 domów w zabudowie szeregowej wraz z prywatnymi ogródkami 
            i 2 przynależnymi miejscami postojowymi. Obecnie w sprzedaży dysponujemy 8 segmentami o powierzchni 
            użytkowej od 92,54m<sup>2</sup> do 93,85m<sup>2</sup>.
        </Fragment>
    )

    const description2 = (
        <Fragment>
            Inwestycja mieści się przy ulicy Ewy Szelburg-Zarembiny w dzielnicy Dziesiąta. Umiejscowienie inwestycji pośród zabudowy 
            jednorodzinnej, na jednokierunkowej, ślepej uliczce zapewnia komfort mieszkania w bardzo cichym i spokojnym miejscu, przy 
            jednoczesnej bliskości centrum Lublina oraz niezbędnych do codziennego funkcjonowania punktów usługowych. W pobliżu 
            inwestycji mieszczą się miedzy innymi : 
            <ul>
                <li>biedronka – 700m,</li>
                <li>apteka – 300 m,</li>
                <li>szkoła podstawowa – 1,5km,</li>
                <li>przystanek komunikacji miejskiej  - 300m.</li>
            </ul>

        </Fragment>
    )

    const description3 = (
        <Fragment>
            Każda z nieruchomości zostanie oddana do użytku w stanie deweloperskim w III kwartale 2023 roku. 
            <br></br>
            Budynki będą wyposażone w instalacje wewnętrzne: elektryczną, gazową, wodno-kanalizacyjną, centralne 
            ogrzewanie z instalacją podłogową na obu piętrach, grzejnikami w łazience i pomieszczeniu technicznym 
            oraz piec gazowy kondensacyjny z zasobnikiem. 
            <br></br>
            Układ funkcjonalny pomieszczeń zapewnia otwartą przestrzeń w strefie dziennej na parterze, komfort 
            mieszkania dla całej rodziny na piętrze oraz praktyczne rozwiązania poprzez wydzielenie pomieszczenia 
            gospodarczego i spiżarni. 
        </Fragment>
    );

    const description4 = (
        <Fragment>
            Dojazd do budynków, będzie zapewniony prywatną drogą, wydzieloną specjalnie dla przyszłych mieszkańców. 
            Każdy z nabywców otrzyma dodatkowo w cenie drugie miejsce postojowe w obrębie działki stanowiącej drogę dojazdową. 
            <br></br>
            <br></br>
            Teren działki będzie wyrównany oraz wydzielony ogrodzeniem od strony ogrodu i między sąsiadującymi budynkami. 
        </Fragment>
    )

    const description5 = (
        <Fragment>
            <ul>
                <li>1 - 133,46m2 - ZAREZERWOWANY</li>
                <li>2a - 93,85m2 - ZAREZERWOWANY</li>
                <li><b>2b - 93,85m2 - WOLNY</b></li>
                <li><b>3a - 93,85m2 - WOLNY</b></li>
                <li><b>3b - 93,85m2 - WOLNY</b></li>
                <li><b>4a - 93,85m2 - WOLNY</b></li>
                <li><b>4b - 93,85m2 - WOLNY</b></li>
                <li><b>5a - 92,54m2 - WOLNY</b></li>
                <li><b>5b - 92,53m2 - WOLNY</b></li>
            </ul>
        </Fragment>
    )
       
    return (
        <>
            <div className='onSale'>
                <h1>w sprzedaży</h1>
                <section class='images'>
                    <div class='image'>
                        <img src={OnSaleZarembiny1} alt='wizualizacja 1'></img>
                    </div>
                    <div class='image'>
                        <img src={OnSaleZarembiny2} alt='wizualizacja 1'></img>
                    </div>
                    <div class='image'>
                        <img src={OnSaleZarembiny5} alt='wizualizacja 1'></img>
                    </div>
                    <div class='image'>
                        <img src={OnSaleZarembiny6} alt='wizualizacja 1'></img>
                    </div>
                </section>

            </div>
            <hr/>
            <div className='realization'>
           
            <section class='projectZarembiny'>
                <article class='description'>
                    <div class='textZarembiny'>
                        <h2 id='title'>DOMY NA ZAREMBINY</h2>
                        <p>{description1}</p>
                    </div>
                    <div class='imageZarembiny'>
                        <img src={OnSaleZarembiny1} alt='Domy Zarembiny'></img>
                    </div>
                </article>
                <article class='description'>
                    <div class='imageZarembiny'>
                        <img src={OnSaleZarembiny2} alt='Domy Zarembiny'></img>
                    </div>
                    <div class='textZarembiny'>
                        <h2>LOKALIZACJA</h2>
                        <p>{description2}</p>
                    </div>
                </article>
                <article class='description'>
                    <div class='textZarembiny'>
                        <h2>PROJEKT</h2>
                        <p>{description3}</p>
                    </div>
                    <div class='imageZarembiny'>
                        <img src={OnSaleZarembiny3} alt='Domy Zarembiny'></img>
                    </div>
                </article>
                <article class='description'>
                    <div class='imageZarembiny'>
                        <img src={OnSaleZarembiny4} alt='Domy Zarembiny'></img>
                    </div>
                    <div class='textZarembiny'>
                        <h2>OTOCZENIE</h2>
                        <p>{description4}</p>
                    </div>
                </article>
                <article class='description'>
                    <div class='textZarembiny'>
                        <h2>DOSTĘPNOŚĆ LOKALI</h2>
                        <p>{description5}</p>
                    </div>
                    <div class='imageZarembiny'>
                        <img src={OnSaleZarembiny7} alt='Domy Zarembiny'></img>
                    </div>
                </article>
            </section>
            </div>
        </>
    );
}
 
export default OnSale;