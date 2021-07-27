import React from 'react';

const Realizations = () => {
    const text =`Inwestycja polegająca na budowie 8 domów w zabudowie szeregowej z
    przynależnym ogródkiem i miejscami postojowymi. Budowa rozpoczenie się w III kwartale 2021 roku.
    Budynki zostaną oddane do użytkowania w IV kwartale 2022 roku.`
    return ( 
        <div className='realization'>
            <h1>w trakcie realizacji</h1>
        <h2>Domy na Brezy</h2>
        <p>{text}</p>
        </div>
     );
}
 
export default Realizations;