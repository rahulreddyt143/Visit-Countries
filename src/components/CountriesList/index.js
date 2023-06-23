import {
  CountryItem,
  CountryName,
  VisitButton,
  VisitedText,
} from './styledComponents'

const CountriesList = props => {
  const {countryDetails, onVisit} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisit = () => {
    onVisit(id)
  }

  return (
    <CountryItem>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedText>Visited</VisitedText>
      ) : (
        <VisitButton type="button" onClick={onClickVisit}>
          Visit
        </VisitButton>
      )}
    </CountryItem>
  )
}

export default CountriesList
