import React, { useState } from 'react';
import axios from 'axios'
import {FiSearch} from 'react-icons/fi'

import lua_chuva from '../img/lua_chuva.png'
import lua_nublado from '../img/lua_nublado.png'
import lua from '../img/lua.png'
import sol_chuva from '../img/sol_chuva.png'
import sol_nublado from '../img/sol_nublado.png'
import sol from '../img/sol.png'
import sol_tempestade from '../img/sol_tempestade.png'
import lua_tempestade from '../img/lua_tempestade.png'
import sol_neve from '../img/sol_neve.png'
import lua_neve from '../img/lua_neve.png'
import nuvem from '../img/nuvem.png'

import './Home.css'

const Home = ({city, desc, temp, setCity, setDesc, setTemp, url}) => {

    const [input, setInput] = useState('')

    const [country, setCountry] = useState('BR')

    const [imag, setImag] = useState(nuvem)

    const testVaria = (data) => {
        const hour = new Date().getHours()

        if (hour >= 18) {
            if (data == 'Thunderstorm') {
                setImag(lua_tempestade)
            } else if (data == 'Clouds') {
                setImag(lua_nublado)
            } else if (data == 'Drizzle') {
                setImag(lua_chuva)
            } else if (data == 'Rain') {
                setImag(lua_chuva)
            } else if (data == 'Snow') {
                setImag(lua_neve)
            } else if (data == 'Atmosphere') {
                setImag(lua)
            } else if (data == 'Clear') {
                setImag(lua)
            }
        } else if (hour >= 5) {
            if (data == 'Thunderstorm') {
                setImag(sol_tempestade)
            } else if (data == 'Clouds') {
                setImag(sol_nublado)
            } else if (data == 'Drizzle') {
                setImag(sol_chuva)
            } else if (data == 'Rain') {
                setImag(sol_chuva)
            } else if (data == 'Snow') {
                setImag(sol_neve)
            } else if (data == 'Atmosphere') {
                setImag(sol)
            } else if (data == 'Clear') {
                setImag(sol)
            }
        }
    }

    const handleClickInput = async () => {
        if (input == '' || country == '') {
            alert('Complete todos os dados para prosseguir!')
        } else {
            const {data} = await axios.get(`${url}${input},${country}&appid=2bdef8885b55003598b381a2dc578987&lang=pt_br&units=metric`)

            console.log(data)
            setCity(data.name)
            setTemp(Math.ceil(data.main.temp))
            setDesc(data.weather[0].description)

            testVaria(data.weather[0].main)
            setInput('')
        }

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
                        <img src={imag} alt="noite" className='imagem' />
                        <h1 className='temp'>{temp}º</h1>
                        <h2 className='desc'>{desc}</h2>
                    </div>
                </div>

                <div className='cont_search'>
                    <div className='city_name'>
                        <input type="text"
                        placeholder='Digite uma cidade'
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        value={input} />
                        <FiSearch size={30} color='#000' id='search'
                        onClick={handleClickInput} />
                    </div>

                    <div className='country_code'>
                        <label htmlFor="city">Código do País</label>
                        <input type="text"
                        id='city'
                        value={country}
                        onChange={(e) => setCountry(e.target.value.toUpperCase())}/>
                    </div>
                </div>
            </main>

            <div className="background"></div>
        </div>
     );
}
 
export default Home;