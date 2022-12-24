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
import { SearchBar, SearchInput, SearchButton } from '../../styledComponents';
const MainPage = () => {
    return (
        <>
            <SearchBar> 
                <SearchInput>

                </SearchInput>
                <SearchButton>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />

                </SearchButton>
            </SearchBar>
        </>
    );
};

export default React.memo(MainPage);