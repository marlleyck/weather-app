import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [city, setCity] = useState()

  const url = 
  'https://api.openweathermap.org/data/2.5/weather?q='

 /*  useEffect(() => {

    const fetchApi = async () => {
      const response = await axios.get(`${url}Caraúbas&appid=2bdef8885b55003598b381a2dc578987&lang=pt_br&units=metric`)

      console.log(response)
    }


    fetchApi()
  }, [])
 */

  return (
    <div className="App">
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
