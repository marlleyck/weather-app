import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useEffect, useState } from 'react';

import Home from './components/Home';


function App() {

  const [city, setCity] = useState()
  const [desc, setDesc] = useState()
  const [temp, setTemp] = useState()

  const url = 
  'https://api.openweathermap.org/data/2.5/weather?q='

  useEffect(() => {

    const fetchApi = async () => {
      const {data} = await axios.get(`${url}Caraúbas&appid=2bdef8885b55003598b381a2dc578987&lang=pt_br&units=metric`)

      console.log(data)
      setCity(data.name)
      setDesc(data.weather[0].description)
      setTemp(data.main.temp)
    }


    fetchApi()
  }, [])


  return (
    <Router>
      <Routes>
        <Route path='/' exact 
        element={<Home 
        city={city}
        desc={desc}
        temp={temp} />} />
      </Routes>
    </Router>
  );
}

export default App;
