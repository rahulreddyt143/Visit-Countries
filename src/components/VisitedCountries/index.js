import {
  VisitedCountryItem,
  CountryFlag,
  ButtonContainer,
  CountryName,
  RemoveButton,
} from './styledComponents'

const VisitedCountries = props => {
  const {countryDetails, onVisit} = props
  const {id, name, imageUrl} = countryDetails

  const onClickVisit = () => {
    onVisit(id)
  }

  return (
    <VisitedCountryItem>
      <CountryFlag src={imageUrl} alt="thumbnail" />
      <ButtonContainer>
        <CountryName>{name}</CountryName>
        <RemoveButton type="button" onClick={onClickVisit}>
          Remove
        </RemoveButton>
      </ButtonContainer>
    </VisitedCountryItem>
  )
}

export default VisitedCountries
