import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #161624;
  min-height: 100vh;
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  margin-top: 0px;
`

export const CountriesListContainer = styled.ul`
  background-color: #1f1f2f;
  height: 41vh;
  overflow-y: scroll;
  padding-left: 0px;
  border-radius: 5px;
  border: 1px solid #334155;
`

export const VisitedCountriesContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
`

export const NoCountriesVisitedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const NoCountriesVisitedText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
`
