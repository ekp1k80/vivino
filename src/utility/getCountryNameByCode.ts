import CountryList from './countryList.json'

const getCountryNameByCode = (countryCode: string) => {
  const country = CountryList.find((list) => list.code === countryCode) 
  if(country !== undefined){
    return country.name
  }
  return ''
}

export default getCountryNameByCode