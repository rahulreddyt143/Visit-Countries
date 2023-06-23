import styled from 'styled-components'

export const VisitedCountryItem = styled.li`
  list-style-type: none;
  width: 300px;
  height: 190px;
  margin-right: 10px;
  margin-bottom: 20px;
  background-color: #1f1f2f;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 10px;
`

export const CountryName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const RemoveButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: normal;
  border: 1px solid #cbd5e1;
  padding: 4px 15px;
  border-radius: 3px;
`
export const CountryFlag = styled.img`
  width: 100%;
`
