import React from 'react';

import './Home.css'

const Home = ({city, desc, temp}) => {

    return ( 
        <div className='container'>
            <main className='main'>
                <div className='cont_details'>
                    <h3>{city}</h3>

                    <div className='contain_temp'>
                        <h1>{temp}</h1>
                        <img src="" alt="" />
                    </div>
                    
                    <h4>{desc}</h4>
                </div>

                <input type="text" />
            </main>

            <div className="background"></div>
        </div>
     );
}
 
export default Home;