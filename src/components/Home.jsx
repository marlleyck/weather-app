import React, { useState } from 'react';
import axios from 'axios'
import {FiSearch} from 'react-icons/fi'
import lua_nublado from '../img/lua_nublado.png'

import './Home.css'

const Home = ({city, desc, temp, setCity, setDesc, setTemp, url}) => {

    const [input, setInput] = useState()

    const handleClickInput = async (e) => {
        const {data} = await axios.get(`${url}${input}&appid=2bdef8885b55003598b381a2dc578987&lang=pt_br&units=metric`)

        setCity(data.name)
        setTemp(Math.ceil(data.main.temp))
        setDesc(data.weather[0].description)
        setInput('')
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleClickInput()
        }
    }

    return ( 
        <div className='container'>
            <main className='main'>
                <div className='cont_details'>
                    <h2 className='city'>{city}</h2>

                    <div className='cont_temp'>
                        <img src={lua_nublado} alt="noite" className='imagem' />
                        <h1 className='temp'>{temp}º</h1>
                        <h2 className='desc'>{desc}</h2>
                    </div>
                </div>

                <div className='cont_search'>
                    <input type="text" 
                    placeholder='Digite uma cidade'
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    value={input} />

                    <FiSearch size={30} color='#000' id='search'
                    onClick={handleClickInput} />
                </div>
            </main>

            <div className="background"></div>
        </div>
     );
}
 
export default Home;