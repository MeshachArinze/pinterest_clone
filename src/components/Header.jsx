import React from 'react'
import PinterestIcon from "@mui/icons-material/Pinterest";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextsmsIcon from "@mui/icons-material/Textsms";
import FaceIcon from "@mui/icons-material/Face";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled from "styled-components";

import { IconsWrapper, SearchBarWrapper, SearchWrapper, FollowingButton, HomePageButton, HomeButtons, LogoWrapper, Wrapper } from './Header.style';

export default function Header(props) {
    const [input, setInput] = useState("");

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit();
    }
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      <HomePageButton>
        <a href="/">Homepage</a>
      </HomePageButton>
      <FollowingButton>
        <a href="/">Following</a>
      </FollowingButton>
      <SearchWrapper>
        <SearchBarWrapper>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input
              placeholder="Search"
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={onSearchSubmit}></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </IconsWrapper>
    </Wrapper>
  );
}
