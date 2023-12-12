import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import WineReview from './components/review';
import FlagCircle from './components/flagCircle';
import MainContent from './components/mainContent';
import MainCard, { IMainCardProps } from './components/mainCard/mainCard';
import Grid from '@mui/material/Grid/Grid';
import getMainCardPropsFromApi from './utility/getMainCardProps';
import Box from '@mui/material/Box/Box';
import CountryListFilter, { ICountryListActivated } from './components/countryList/countryList';
import declareCountriesFilter from './utility/declareCountriesFilter'

function App() {
  const [wines, setWines] = useState<IMainCardProps[]>([])
  const [countriesFilter, setCountriesFilter] = useState<ICountryListActivated[]>(declareCountriesFilter())
 
  const getWines = async () => {
    let url = 'http://localhost:3005/api';

    // Filtrar por los países activados
    const activeCountries = countriesFilter.filter(country => country.activated);
    if (activeCountries.length > 0) {
      const queryParams = activeCountries.map(country => `country_codes[]=${country.code}`).join('&');
      url += `?${queryParams}`;
    }
    const response = await fetch(url);
    const data = await response.json();

    setWines(getMainCardPropsFromApi(data.matches));
  }

  // ... (el resto de tu código)

  useEffect(() => {
    getWines();
  }, [countriesFilter]); // Agregar countriesFilter como dependencia para re-ejecutar cuando cambie


  const countryOnChange = (code: string) => {
    const newFilter = countriesFilter
    const index = newFilter.findIndex(list => list.code === code)
    newFilter[index].activated = !newFilter[index].activated
    setCountriesFilter([...newFilter])
  }

  return (
    <div className="App">
      <Grid container item flexDirection={"column"}>
        <Grid container item>
          <Grid item xs={12}>
            <CountryListFilter countryList={countriesFilter} onChange={countryOnChange} />
          </Grid>
          <Grid item xs={4} />
          <Grid item xs={6}>
            {
              wines.map((wine, index) =>(
              <Box key={`wine-card${index}`} sx={{marginTop: "5rem"}}>
                <MainCard {...wine} />
              </Box>
              ))
            }
          </Grid>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default App;
