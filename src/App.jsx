import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect, useState} from 'react';

import Home from './components/Home';

function App() {

  
  const [city, setCity] = useState()
  const [desc, setDesc] = useState()
  const [temp, setTemp] = useState()

  const url = 
  'https://api.openweathermap.org/data/2.5/weather?q='

  useEffect(() => {

    const fetchApi = async () => {

      const {data} = await axios.get(`${url}Brasília&appid=2bdef8885b55003598b381a2dc578987&lang=pt_br&units=metric`)

      setCity(data.name)
      setTemp(Math.ceil(data.main.temp))
      setDesc(data.weather[0].description)
    }


    fetchApi()
  }, [])


  return (
    <Router>
        <Routes>
          <Route path='/' exact 
          element={<Home 
          city={city}
          setCity={setCity}
          desc={desc}
          setDesc={setDesc}
          temp={temp}
          setTemp={setTemp}
          url={url} />} />
        </Routes>
    </Router>
  );
}

export default App;
