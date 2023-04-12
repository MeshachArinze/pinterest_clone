export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

export const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;

export const HomeButtons = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  min-width: 123px;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`;

export const HomePageButton = styled(HomeButtons)`
  background-color: rgb(17, 17, 17);

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;

export const FollowingButton = styled(HomeButtons)`
  background-color: white;

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  :hover {
    background-color: #e1e1e1;
  }
`;

export const SearchWrapper = styled.div`
  flex: 1;
  margin-right: 17px;
  margin-left: 10px;
`;

export const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  :hover {
    background-color: #e1e1e1;
  }

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }

  form > button {
    display: none;
  }

  input:focus {
    outline: none;
  }

  input:active {
    outline: none;
  }

  input:hover {
    outline: none;
  }
`;

export const IconsWrapper = styled.div``;
