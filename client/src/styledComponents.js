import styled, { css } from "styled-components";

//MainPage
export const TitleDiv = styled.div`
  height: 50px;
`

export const TitleText = styled.h2`
  color: black;
  text-align: center;
`

export const SearchBar = styled.div`
    width: 420px;
    height: 80px;
    margin: 0 auto;
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
  width: 40px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: gray;
  float: right;
  display: inline-block;
  cursor: pointer;
  transition: 0.45s;
  border: 2px solid white;

  &:hover {
    // background-color: #5fb352;
    background-color: rgba(255, 179, 0, 1);
    border-color: rgba(255, 179, 0, 1);
    color: white;
  }
`;


//MainForm
export const FormSection = styled.section`
  width: 700px;
  margin: 0 auto;
`
export const MForm = styled.form`
  height: 300px;
  margin: 0 auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const HeaderDiv = styled.div`
  height: 40px;
`;

export const FormTitleText = styled.span`
  color: black;
`

export const FormText = styled.span`
  color: black;
  font-size: 16px;
`

export const FormQuestionDiv = styled.div`
  width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const Radios = styled.div`
  width: 400px;
  height: 100px;
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
export const NewsCard = styled.div`
  width: 700px;
  height: 100px;
  margin: 0 auto;
  margin-top: 8px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
`
export const NewsArticleDiv = styled.div`
  width: 500px;
`

export const NewsDetails = styled.div`
  font-size: 14px;
`

export const NewsImg = styled.img`
  width: 132px;
  height: 90px;
  margin: 0 auto;
  align-self: center;
`

export const NavigateButton = styled.button`
  width: 100px;
  height: 26px;
  float: right;
  margin-top: 5px;  
`

//MatchCards

export const MatchCard = styled.div`
  width: 700px;
  height: 240px;
  margin: 0 auto;
  margin-top : 10px;
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  
`
export const GroupDate = styled.div`
  margin-top: 10px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`

export const Group = styled.div`
  margin-left: 16px;
`

export const Date = styled.div`
  margin-right: 14px;
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





