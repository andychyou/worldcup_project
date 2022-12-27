import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
  } from "@fortawesome/free-solid-svg-icons";
import {InputAndButtonDiv, FormTitleText, NewsCard, NewsArticleDiv, NewsDetails, NewsImg, SearchBar, SearchInput, SearchButton, TitleDiv, TitleText,  NavigateButton, HeaderDiv, NewsSection } from '../../styledComponents';
import { Button } from '@mui/material';
const News = () => {
    const [newsdata, setNewsdata] = useState([])
    
    const GetNews = async (e) =>{
        e.preventDefault()
        let keyword = document.getElementById('keyword').value
        const res = await fetch('http://localhost:5000/api/newssearch',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                keyword
            })
        })

        // const d = await res.json()
        const d = await res.json()
        console.log(d.news_data)
        setNewsdata(d.news_data)
    }
    const InputEnter = (e) =>{
        if(e.key == 'Enter')
            GetNews(e)
    }
    const navigate = useNavigate();

    const GoMain = () => {
        navigate(`/`);
    };
    return (
        <>

        <NewsSection>
            <HeaderDiv>
                <FormTitleText>Search Sports News</FormTitleText>
                <Button style={{backgroundColor:'rgb(171 3 161)', width:'140px'}} onClick={GoMain} variant="contained">Back To Main</Button>
            </HeaderDiv>
            <SearchBar> 
                <InputAndButtonDiv>
                <SearchInput onKeyDown={InputEnter} id="keyword" placeholder='Type Keyword'>

                </SearchInput>
                <SearchButton onClick={GetNews} variant="contained">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                    
                </SearchButton>
                </InputAndButtonDiv>
            </SearchBar>
            
            {newsdata.map((news, i) =>(<NewsCard key={i}><NewsArticleDiv>
            <a target="_blank" href={news.news_href}>{news.news_title}</a>
            <NewsDetails>{news.news_details}</NewsDetails>
            </NewsArticleDiv>
            <NewsImg src={news.news_img}></NewsImg>
            </NewsCard>))} 
        </NewsSection>
        </>
    );
};

export default React.memo(News);