import styled, { css } from "styled-components";

//MainPage
export const TitleDiv = styled.div`
  height: 50px;
  background-color: #550065;
  display: flex;

`

export const TitleText = styled.div`
  color: black;
  margin: 0 auto;
  align-self: center;
  font-size: 24px;
  color: white;
`

export const SearchBar = styled.div`
    width: 430px;
    height: 80px;
    margin: 0 auto;
    margin-top: 10px;
`;


export const SearchInput = styled.input`
  width: 350px;
  height: 35px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 0 10px;
  float: left;

`;

export const SearchButton = styled.button`
  width: 42px;
  height: 39px;
  border: none;
  border-radius: 5px;
  color: rgb(133 41 127);
  float: right;
  display: inline-block;
  cursor: pointer;
  transition: 0.45s;
  border: 2px solid   rgb(133 41 127);
  

  &:hover {
    // background-color: #5fb352;
    background-color: rgb(171, 3, 161);
    color: white;
  }
`;

export const InputAndButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


//MainForm
export const FormSection = styled.section`
  width: 700px;
  margin: 0 auto;
  margin-top: 20px;

`
export const MForm = styled.form`
background-color: #e0fdfc;
  height: 400px;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 1px 2px 10px 2px rgba(107, 104, 104, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const HeaderDiv = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const FormTitleText = styled.span`
  color: black;
  font-size: 20px;
`

export const FormText = styled.span`
  color: black;
  font-size: 16px;
  margin-top: 2px;
`

export const FormQuestionDiv = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const Radios = styled.div`
  width: 400px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 14px;
`

export const RadioGroup = styled.div`
  display: flex;
  justify-content: space-around;
`


//news component
export const NewsSection = styled.section`
  width: 700px;
  margin: 0 auto;
  margin-top: 20px;
`

export const NewsCard = styled.div`
font-family: 'Source Sans Pro', sans-serif;
box-shadow: 1px 2px 10px 2px rgba(107, 104, 104, 0.16);
border: 1px solid #ffe2e2;
  width: 700px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
`
export const NewsArticleDiv = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  padding: 5px;
`

export const NewsDetails = styled.div`
  font-size: 12px;
  margin-top: 5px;

`

export const NewsImg = styled.img`
  width: 132px;
  height: 90px;
  margin: 0 auto;
  align-self: center;
  border-radius: 5px;
`

export const NavigateButton = styled.button`
  width: 100px;
  height: 26px;
  float: right;
`

//MatchCards

export const MatchCard = styled.div`
  overflow: hidden;
  width: 700px;
  height: 220px;
  margin: 0 auto;
  margin-bottom : 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 10px 2px rgba(107, 104, 104, 0.3);
  background-color: #e0fdfc;
`
export const GroupDate = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const Group = styled.div`
  margin-left: 16px;
  color: white;
  font-size: 20px;
`

export const Date = styled.div`
  margin-right: 14px;
  color: white;
  font-size: 20px;
`

export const MatchContents = styled.div`
  margin-top: 10px;
  height: 76px;
  display: flex;
  justify-content: space-between;
`

export const CountryDiv = styled.div`
  width: 110px;
`

export const HomeCountry = styled.span`
  display: block;
  margin-left: 16px;
`
export const AwayCountry = styled.span`
  display: block;
  text-align: end;
  margin-right: 16px;
`


export const Scorers = styled.div`
  margin-top: 30px;
  height: 100px;
  display: flex;
`

export const HomeFlag = styled.img`
  border-radius: 4px;
  margin-right: 15px;
  box-shadow: 1px 2px 10px 2px rgba(107, 104, 104, 0.5);

`

export const Score = styled.span`
  text-align: center;
  align-self: center;
  font-weight: bold;
  font-size: 24px;
`

export const AwayFlag = styled.img`
  border-radius: 4px;
  margin-left: 15px;
  box-shadow: 1px 2px 10px 2px rgba(107, 104, 104, 0.5);
`

export const ScorerDiv = styled.div`
  width: 50%;
  font-size: 12px;
`

export const HomeScorer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  margin: 0 auto;
  margin-left: 90px;
`

export const AwayScorer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 230px;
margin: 0 auto;
margin-right: 90px;
`

export const BallIconDiv = styled.div`
width: 70px;
display:flex;

`

export const AwayBallIconDiv = styled.div`
width: 70px;
display:flex;
justify-content:flex-end;
`





