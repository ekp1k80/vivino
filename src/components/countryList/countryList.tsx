import React from 'react'
import Grid from '@mui/material/Grid/Grid'
import FlagCircle from '../flagCircle'
import { Checkbox } from '@mui/material'

export interface ICountryListActivated {
  code: string
  activated: boolean
}

interface ICountryListFilterProps {
  onChange: (code: string) => void
  countryList: ICountryListActivated[]
}

const CountryListFilter: React.FC<ICountryListFilterProps> = ({ countryList, onChange }) => {
  return (
    <Grid container item sx={{ marginTop: "2rem" }}>
      <Grid item xs={4} />
      <Grid container item xs={6} justifyContent={"center"}>
        {
          countryList.map(country => {
            return (
              <Grid key={`country-flag-filter${country.code}`} xs={1} item container flexDirection="column" justifyContent={"center"} alignItems={"center"}>
                <FlagCircle countryCode={country.code} />
                <Checkbox checked={country.activated} onChange={() => onChange(country.code)} />
              </Grid>
            )
          })
        }
      </Grid>
    </Grid>
  )
}

export default CountryListFilter