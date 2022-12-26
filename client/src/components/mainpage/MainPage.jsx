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
import MainForm from './MainForm';
import { SearchBar, SearchInput, SearchButton, TitleDiv, TitleText } from '../../styledComponents';
const MainPage = () => {
    return (
        <>
            <TitleDiv><TitleText>Search World Cup Matches</TitleText></TitleDiv>
            
            <MainForm></MainForm>
        </>
    );
};

export default React.memo(MainPage);