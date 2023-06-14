import React, { useEffect, useCallback } from "react";
import { changeColorTimeout } from "../Other/OtherFunctions/Colorjs";
import Coinavbar from "./Helperfunctions/Coinavbar";
import Coinlargebut from "./Helperfunctions/Coinlargebut";
import { readOutLoud } from "../Other/OtherFunctions/Readoutloud";
import "./largestbutton.css";

const Coins = ({ state, dispatch }) => {
  const [userText, setUserText] = React.useState("");

  const handleIncrement = (sign) => {
    changeColorTimeout("red", "largestbuttonever");
    let nextLargeButton = state.largeButton + state.multiple * sign;
    readOutLoud(nextLargeButton);
    dispatch({
      type: "increment",
      payload: { largeButton: nextLargeButton },
    });
  };

  const handleUserKeyPress = (event) => {
    console.log(`Keypress ${state.largeButton}`);
    const { key, keyCode } = event;
    if (keyCode === 13) {
      handleIncrement(1);
    } else if (keyCode == 109) {
      handleIncrement(-1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      console.log(`Effect ${state.largeButton}`);
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const handleTextChange = (e) => {
    switch (e.target.name) {
      case "totalCount":
        dispatch({
          type: "textChanged",
          payload: { largeButton: parseInt(e.target.value) },
        });
        break;
      case "multiple":
        dispatch({
          type: "textChanged",
          payload: { multiple: parseInt(e.target.value) },
        });
        break;
    }
  };

  const handleSetMultiple = (e) => {
    let newIndexMultiple = state.indexMultiple;
    let newMultiple = state.multiple;
    switch (e.target.name) {
      case "btnleft":
        if (state.indexMultiple == 0) {
          newIndexMultiple = state.arrayMultiple.length - 1;
        } else {
          newIndexMultiple = state.indexMultiple - 1;
        }
        newMultiple = state.arrayMultiple[newIndexMultiple];
        dispatch({
          type: "setMultiple",
          payload: { multiple: newMultiple, indexMultiple: newIndexMultiple },
        });
        break;
      case "btnright":
        if (state.indexMultiple == state.arrayMultiple.length - 1) {
          newIndexMultiple = 0;
        } else {
          newIndexMultiple = state.indexMultiple + 1;
        }
        newMultiple = state.arrayMultiple[newIndexMultiple];
        dispatch({
          type: "setMultiple",
          payload: { multiple: newMultiple, indexMultiple: newIndexMultiple },
        });
        break;
      case "reset":
        dispatch({
          type: "reset",
        });
        break;
    }
  };

  return (
    <div>
      {userText}
      <Coinavbar
        handleTextChange={handleTextChange}
        handleSetMultiple={handleSetMultiple}
        state={state}
      />
      <Coinlargebut
        handleIncrement={handleIncrement}
        largeButton={state.largeButton}
      />

    </div>
  );
};

export default Coins;
