import '../../App.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFutbol
  } from "@fortawesome/free-solid-svg-icons";

import { MForm, FormTitleText, FormSection, FormText, FormQuestionDiv,Radios, RadioGroup, MatchCard, StageDate, MatchContents, Scorers, HomeFlag, AwayFlag, ScorerDiv, Scorer, CountryDiv, Score, HomeScorer, AwayScorer, GroupDate, Group,Date, NavigateButton, HeaderDiv, HomeCountry, AwayCountry, BallIconDiv, AwayBallIconDiv } from '../../styledComponents';
import jQuery from "jquery"
import $ from "jquery"

const MainForm = () => {
    const navigate = useNavigate()
    const [matchdata, setMatchdata] = useState([])
    const [rselect, setRselect] = useState('')
    
    const GetMaches = async (e) =>{
        //prevents default act of form 결과 페이지로 넘어가는 게 default인데 멈춤
        e.preventDefault()
        var query = $('#mainform').serialize()
        console.log(query)
        const Country = document.getElementById('country').value
        const Scorer = document.getElementById('scorer').value
        const Round = rselect
        const MatchDate = document.getElementById('date').value

        const res = await fetch('http://localhost:5000/api/matchsearch',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Country, Scorer, Round, MatchDate
            })
        })

        let match_results = await res.json()
        for(let i = 0; i < match_results.length; i++){           
            if(match_results[i].home_scorers[0].split(",") == 'null')
                match_results[i].home_scorers = ['']
            else{
                match_results[i].home_scorers = match_results[i].home_scorers[0].split(",")
            }
            if(match_results[i].away_scorers[0].split(",") == 'null')
                match_results[i].away_scorers = ['']
            else{
                match_results[i].away_scorers = match_results[i].away_scorers[0].split(",")
            }
        }
        console.log(match_results)
        
        const CompDate = (a,b) =>{
            a = a.local_date
            b = b.local_date
            a = a.split(' ')[0].split('/')
            b = b.split(' ')[0].split('/')
            if(a[1].length == 1) a[1] = '0'+a[1]
            if(b[1].length == 1) b[1] = '0'+b[1]
            a = a.join('')
            b = b.join('')
            return a - b
        }

        match_results =  match_results.sort((a,b)=>  CompDate(a,b))
        setMatchdata(match_results)

    }

    const CheckRadio = (e) =>{
        console.log('ddd')
        if (e.target.value === rselect) {
            setRselect("");
            console.log($("input[name='round']"))
            $("input[name='round']").prop('checked', false)
          } else {
            setRselect(e.target.value);
            e.target.checked = true
          }
        console.log(rselect)
    }

    const HomeScorerRender = (scorer) =>{
        let result = <></>
        if(scorer !== ""){
            if(Number.isInteger(parseInt(scorer.slice(-2,-1)))){
                
                if(parseInt(scorer.slice(-2,-1)) == 2){
                    result = <HomeScorer>{scorer}<BallIconDiv><FontAwesomeIcon style={{marginRight:"5px"}}icon={faFutbol}/><FontAwesomeIcon style={{marginRight:"5px"}}icon={faFutbol}/></BallIconDiv></HomeScorer>
                }
                else if(parseInt(scorer.slice(-2,-1)) == 3){
                    result = <HomeScorer>{scorer}<BallIconDiv><FontAwesomeIcon style={{marginRight:"5px"}}icon={faFutbol}/><FontAwesomeIcon style={{marginRight:"5px"}}icon={faFutbol}/><FontAwesomeIcon style={{marginRight:"5px"}}icon={faFutbol}/></BallIconDiv></HomeScorer>
                }
                else if(parseInt(scorer.slice(-2,-1)) == 4){
                    result = <HomeScorer>{scorer}<BallIconDiv><FontAwesomeIcon style={{marginRight:"5px"}}icon={faFutbol}/><FontAwesomeIcon style={{marginRight:"5px"}}icon={faFutbol}/><FontAwesomeIcon style={{marginRight:"5px"}}icon={faFutbol}/><FontAwesomeIcon style={{marginRight:"5px"}}icon={faFutbol}/></BallIconDiv></HomeScorer>
                }
            }
            else{
                result = <HomeScorer>{scorer}<BallIconDiv><FontAwesomeIcon style={{marginRight:"5px"}}icon={faFutbol}/></BallIconDiv></HomeScorer>
            }
        }
        console.log(result)
        return result
    }
    const AwayScorerRender = (scorer) =>{
        let result = <></>
        if(scorer !== ""){
            if(Number.isInteger(parseInt(scorer.slice(-2,-1)))){
                
                if(parseInt(scorer.slice(-2,-1)) == 2){
                    result = <AwayScorer><AwayBallIconDiv><FontAwesomeIcon style={{marginLeft:"5px"}}icon={faFutbol}/><FontAwesomeIcon style={{marginLeft:"5px"}}icon={faFutbol}/></AwayBallIconDiv>{scorer}</AwayScorer>
                }
                else if(parseInt(scorer.slice(-2,-1)) == 3){
                    result = <AwayScorer><AwayBallIconDiv><FontAwesomeIcon style={{marginLeft:"5px"}}icon={faFutbol}/><FontAwesomeIcon style={{marginLeft:"5px"}}icon={faFutbol}/><FontAwesomeIcon style={{marginLeft:"5px"}}icon={faFutbol}/></AwayBallIconDiv>{scorer}</AwayScorer>
                }
                else if(parseInt(scorer.slice(-2,-1)) == 4){
                    result = <AwayScorer><AwayBallIconDiv><FontAwesomeIcon style={{marginLeft:"5px"}}icon={faFutbol}/><FontAwesomeIcon style={{marginLeft:"5px"}}icon={faFutbol}/><FontAwesomeIcon style={{marginLeft:"5px"}}icon={faFutbol}/><FontAwesomeIcon style={{marginLeft:"5px"}}icon={faFutbol}/></AwayBallIconDiv>{scorer}</AwayScorer>
                }
            }
            else{
                result = <AwayScorer><AwayBallIconDiv><FontAwesomeIcon style={{marginLeft:"5px"}}icon={faFutbol}/></AwayBallIconDiv>{scorer}</AwayScorer>
            }
        }
        console.log(result)
        return result
    }
    
    return (
        <>
        
        <FormSection>
            <HeaderDiv>
                <FormTitleText>Find By Options</FormTitleText>
                <NavigateButton onClick={()=>{navigate('/news')}}>Sports News</NavigateButton>
            </HeaderDiv>
            <MForm id="mainform">
                <FormQuestionDiv>
                    <FormText>Country : </FormText> <input id='country' type='text' name='country' placeholder='ex. Argentina'></input>
                </FormQuestionDiv>              
                
                <FormQuestionDiv>
                    <FormText>Scorer : </FormText> <input id='scorer' type='text' name='scorer' placeholder='ex. Messi'></input>
                </FormQuestionDiv> 
                <Radios>
                    <FormText style={{display:'block'}}>Groups</FormText>
                    <RadioGroup>
                    <input onClick={CheckRadio}type='radio' name="round" value="A"></input><label>A</label>
                    <input onClick={CheckRadio}type='radio' name="round" value="B"></input><label>B</label>
                    <input onClick={CheckRadio}type='radio' name="round" value="C"></input><label>C</label>
                    <input onClick={CheckRadio}type='radio' name="round" value="D"></input><label>D</label>
                    <input onClick={CheckRadio}type='radio' name="round" value="E"></input><label>E</label>
                    <input onClick={CheckRadio}type='radio' name="round" value="F"></input><label>F</label>
                    <input onClick={CheckRadio}type='radio' name="round" value="G"></input><label>G</label>
                    <input onClick={CheckRadio}type='radio' name="round" value="H"></input><label>H</label>
                    </RadioGroup>
                    <FormText style={{display:'block'}}>Rounds</FormText>
                    <RadioGroup>
                    <input onClick={CheckRadio}type='radio' name="round" value="R16"></input><label>R16</label>
                    <input onClick={CheckRadio}type='radio' name="round" value="QUARTER FINAL"></input><label>Quarter Final</label>
                    <input onClick={CheckRadio}type='radio' name="round" value="SEMI FINAL"></input><label>Semi Final</label>
                    <input onClick={CheckRadio}type='radio' name="round" value="THIRD PLACE"></input><label>Third Place</label>
                    <input onClick={CheckRadio}type='radio' name="round" value="FINAL"></input><label>Final</label>
                    </RadioGroup>
                </Radios>
                <FormQuestionDiv>        
                    <FormText>Match Date : </FormText> <input id='date' type='date' name='date'></input>
                </FormQuestionDiv>
                <FormQuestionDiv>        
                    <button onClick={GetMaches} >Find</button>
                </FormQuestionDiv>
            </MForm>
        {/* matchcard 렌더링 */}

            {matchdata.map((match) => (
            <MatchCard>
                <GroupDate>
                    <Group>{match.group}</Group>
                    <Date>{match.local_date}</Date>
                </GroupDate>
                <MatchContents>
                    <CountryDiv><HomeCountry>{match.home_team_en}</HomeCountry></CountryDiv>
                    <HomeFlag src={match.home_flag}></HomeFlag>
                    <Score>{match.home_score}</Score>
                    <Score>:</Score>
                    <Score>{match.away_score}</Score>
                    <AwayFlag src={match.away_flag}></AwayFlag>
                    <CountryDiv><AwayCountry>{match.away_team_en}</AwayCountry></CountryDiv>
                </MatchContents>
                <Scorers>
                    {/* <ScorerDiv>
                        {match.home_scorers.map((scorer) => (<HomeScorer>{scorer}{scorer !== "" ? <FontAwesomeIcon style={{marginRight:'10px'}}icon={faFutbol}/> : ''}</HomeScorer>))}
                    </ScorerDiv>
                    <ScorerDiv>
                        {match.away_scorers.map((scorer) => (<AwayScorer>{scorer !== "" ?<FontAwesomeIcon style={{marginRight:'10px'}}icon={faFutbol}/> : ''}{scorer}</AwayScorer>))}
                    </ScorerDiv> */}
                    <ScorerDiv>
                        {match.home_scorers.map((scorer) => (HomeScorerRender(scorer)))}
                    </ScorerDiv>
                    <ScorerDiv>
                        {match.away_scorers.map((scorer) => (AwayScorerRender(scorer)))}

                    </ScorerDiv>
                </Scorers>

            </MatchCard>))} 
            
        {/* data 배열의 각 요소를 news라고 하고 news의 title 부분을 a태그에 넣어서 렌더링 */}
        

        </FormSection>
        </>
    );
};

export default React.memo(MainForm);