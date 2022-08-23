import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
const Search = styled.div`
  width: 400px;
  position: relative;
  border-radius: 30px;
  &:focus-within {
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  &:hover {
    background-color: #ebebeb;
    cursor: pointer;
  }
  transition: all ease-in 0.1s;
  .textBox {
    width: 100%;
    background-color: transparent;
    border: solid 2px #fff;
    font-size: 14px;
    line-height: 50px;
    border-radius: 30px;
    padding-left: 10px;
    border: none;
    position: relative;
    &:focus {
      outline: 0;
      background-color: #fff;
    }
    &::placeholder {
      color: #bfbfc5;
      font-size: 14px;
    }
  }
  &:before {
    content: "";
    width: 1px;
    height: 20px;
    background-color: #bfbfc5;
    position: absolute;
    top: 16px;
    right: 0;
    z-index: 20;
    border: solid 1px #bfbfc5;
    border-right: none;
  }
  .dropdown {
    max-height: 400px;
    overflow-y: scroll;
    position: absolute;
    top: 55px;
    left: 3px;
    background-color: #fff;
    z-index: 10;
    width: 100%;
    border: solid 1px #333;
    border-radius: 8px;
  }
`;

const SearchBox = (props) => {
  const inputRef = useRef();
  const { listActive, placeholder, sendLocationfromInput, sendID } = props;
  const [search, setSearch] = useState("");
  const [listFilter, setListFilter] = useState(null);
  const handleChangeSearch = (e) => {
    const keyword = e.target.value;
    // console.log(keyword);
    if (keyword !== "") {
      const results = listActive.filter((item) => {
        return (
          String(item.province)
            .toUpperCase()
            .indexOf(e.target.value?.toUpperCase()) > -1
        );
      });
      if (results.length) {
        setListFilter(results);
      } else {
        setListFilter(null);
      }
    } else {
      setListFilter(null);
      sendID("");
    }

    setSearch(keyword);
  };
  const handleClickButton = (e) => {
    inputRef.current.value = e.target.innerHTML;
    setSearch(inputRef.current.value);
    setListFilter(null);
    sendLocationfromInput(inputRef.current.value);
    sendID(e.target.dataset.id);
  };
  // console.log(search, listFilter);
  if (listFilter) {
    return (
      <Search>
        <input
          type="search"
          onChange={handleChangeSearch}
          value={search}
          className="textBox"
          placeholder={placeholder}
          ref={inputRef}
        />
        <div className="dropdown">
          {listFilter?.map((item, index) => {
            return (
              <button
                key={index}
                className="btn btn-light w-100"
                onClick={handleClickButton}
                data-id={item._id}
              >
                {item.name},{item.province}
              </button>
            );
          })}
        </div>
      </Search>
    );
  }

  return (
    <Search>
      <input
        type="search"
        onChange={handleChangeSearch}
        value={search}
        className="textBox"
        placeholder={placeholder}
        ref={inputRef}
      />
    </Search>
  );
};

export default SearchBox;
