import React from "react";
import PropTypes from "prop-types";
import random from "just-random";

import Button from "../components/Button/Button";
import "./Score.css";

const propTypes = {
  showIntroduction: PropTypes.func.isRequired,
  elapsedTime: PropTypes.number.isRequired
};

const Score = ({ showIntroduction, elapsedTime }) => {
  return (
    <main>
      <div className="done">
        {random(gameDoneMessages)} Your time: {getElapsedSeconds(elapsedTime)}s
      </div>
      <Button onClick={showIntroduction} isLifted>
        New Game
      </Button>
    </main>
  );
};

Score.propTypes = propTypes;

const gameDoneMessages = [
  "You did it!",
  "Alright!",
  "Awesome!",
  "What the fuck.",
  "Amazing!",
  "Did you beat the boss?",
  "This horse is amazing!"
];

function getElapsedSeconds(elapsedTime) {
  const elapsedSeconds = elapsedTime / 1000;
  return elapsedSeconds.toFixed(3);
}

export default Score;
