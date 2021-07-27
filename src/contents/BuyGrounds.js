import React from 'react';
import img1 from '../images/kupimy.jpg';

const BuyGrounds = () => {
    return ( 
        <div className='buy'>
            <section>
                <p>Kupimy grunty pod zabudowe jednorodzinną i wielorodzinną w następujących lokalizacjach:</p>
                <ul>
                    <li>Lublin (okolice do 5km)</li>
                    <li>Łęczna</li>
                    <li>Świdnik</li>
                    <li>Lubartów</li>
                    <li>Puławy</li>
                    <li>Zamość</li>
                </ul>
                <p>Zapraszamy do składania ofert właścicieli gruntów i pośredników na adres mailowy <span className='big'>biuro.mthome@gmail.com
                    </span> lub do rozmów pod nr telefonu <span className='big'>665 724 888.</span></p>
            </section>
            <img src={img1} alt='coś'/>
        </div>
     );
}
 
export default BuyGrounds;