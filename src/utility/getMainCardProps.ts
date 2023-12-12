import { IMainCardProps } from "../components/mainCard/mainCard"
import getCountryNameByCode from "./getCountryNameByCode"

interface IWineFromApi {
  vintage: {
      year: string,
      statistics: {
          ratings_count: number,
          ratings_average: number,
          wine_ratings_count: number,
          wine_ratings_average: number,
      },
      image: {
          variations: {
              bottle_large: string,
          }
      },
      wine: {
          name: string,
          region: {
              name: string,
              country: string,
          },
          winery: {
              name: string,
          },
          statistics: {
              ratings_count: number,
              ratings_average: number,
          }
      }
  },
}

const getMainCardPropsFromApi = (winesApi: IWineFromApi[]): IMainCardProps[] => {
  const winesCards: IMainCardProps[] = winesApi.map((wineApi) => {
    return {
      bottleImgUrl: wineApi.vintage.image.variations.bottle_large,
      countryCode: wineApi.vintage.wine.region.country,
      countryName: getCountryNameByCode(wineApi.vintage.wine.region.country),
      regionName: wineApi.vintage.wine.region.name,
      reviewsNumber: wineApi.vintage.wine.statistics.ratings_count,
      reviewsPromedy: wineApi.vintage.wine.statistics.ratings_average,
      wineName: wineApi.vintage.wine.name,
      wineryName: wineApi.vintage.wine.winery.name,
      wineYear: wineApi.vintage.year
    }
  })
  return winesCards
}

export default getMainCardPropsFromApi