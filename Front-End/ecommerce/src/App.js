import './App.css';
import axios from 'axios'
import {useEffect,useState} from 'react'
import { createContext } from "react";
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

export const userContext = createContext();

function App() {

  const [user, setUser] = useState();
  axios.defaults.withCredentials = true;

  async function getLoggedUser() {
    if (!user) {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_PATH}user/signin`
        );
        if (response) {
          setUser(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  useEffect(() => {
    getLoggedUser();
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
    <div className="App">
  <AppRoutes/>
    </div>
    </BrowserRouter>

    </userContext.Provider>
  );
}

export default App;
