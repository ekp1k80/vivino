import CountriesList from './countryList.json'
import { ICountryListActivated } from '../components/countryList/countryList'

const declareCountriesFilter = (): ICountryListActivated[] => {
  return CountriesList.map(country => ({code: country.code, activated: false}))
}

export default declareCountriesFilter