import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouseUser,
    faBell,
    faGear,
    faMagnifyingGlass,
  } from "@fortawesome/free-solid-svg-icons";
import {NewsCard, NewsArticleDiv, NewsDetails, NewsImg, SearchBar, SearchInput, SearchButton, TitleDiv, TitleText,  NavigateButton } from '../../styledComponents';
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
    const navigate = useNavigate();

    const GoMain = () => {
        navigate(`/`);
    };
    return (
        <>
            <TitleDiv><TitleText>Search Sports News</TitleText></TitleDiv>
            <SearchBar> 
                <SearchInput id="keyword">

                </SearchInput>
                <SearchButton onClick={GetNews}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                    
                </SearchButton>
                <NavigateButton onClick={GoMain}>
                    Back To Main
                </NavigateButton>
            </SearchBar>
            
            {newsdata.map((news) =>(<NewsCard><NewsArticleDiv>
            <a href={news.news_href}>{news.news_title}</a>
            <NewsDetails>{news.news_details}</NewsDetails>
            </NewsArticleDiv>
            <NewsImg src={news.news_img}></NewsImg>
            </NewsCard>))} 
        </>
    );
};

export default React.memo(News);