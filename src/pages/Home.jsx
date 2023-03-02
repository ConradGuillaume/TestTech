import React, { useState } from "react";
import ProgressBar from "../Component/ProgressBar";

const Home = () => {
  const [progressOne, setProgressOne] = useState(50);
  const [progressTwo, setProgressTwo] = useState(25);
  const [selectBarOne, setSelectBarOne] = useState(0); // Select Progress Bar 1
  const [selectBarTwo, setSelectBarTwo] = useState(0); // Select Progress Bar 2
  const [closeOne, setCloseOne] = useState(true);
  const [closeTwo, setCloseTwo] = useState(true);

  // Reset the progress bar

  const handleReset = () => {
    if (selectBarOne > 0) {
      setProgressOne(0);
      setSelectBarOne(0);
    } else if (selectBarTwo > 0) {
      setProgressTwo(0);
      setSelectBarTwo(0);
    } else {
      setSelectBarTwo(0);
      setSelectBarOne(0);
      setProgressOne(0);
      setProgressTwo(0);
    }
  };
  //  add 5% to progress bar
  const handleAdd5 = () => {
    let newProgressOne = progressOne;
    let newProgressTwo = progressTwo;

    if (selectBarOne > 0) {
      newProgressOne = Math.min(progressOne + 5, 100);
    } else if (selectBarTwo > 0) {
      newProgressTwo = Math.min(progressTwo + 5, 100);
    } else {
      newProgressOne = Math.min(progressOne + 5, 100);
      newProgressTwo = Math.min(progressTwo + 5, 100);
    }

    setProgressOne(newProgressOne);
    setProgressTwo(newProgressTwo);
  };
  // add 10% to progress bar
  const handleAdd10 = () => {
    let newProgressOne = progressOne;
    let newProgressTwo = progressTwo;

    if (selectBarOne > 0) {
      newProgressOne = Math.min(progressOne + 10, 100);
    } else if (selectBarTwo > 0) {
      newProgressTwo = Math.min(progressTwo + 10, 100);
    } else {
      newProgressOne = Math.min(progressOne + 10, 100);
      newProgressTwo = Math.min(progressTwo + 10, 100);
    }

    setProgressOne(newProgressOne);
    setProgressTwo(newProgressTwo);
  };

  return (
    <div className="main-container">
      <h1>ecran à réaliser :</h1>
      <h2>
        Test technique WEB-ATRIO réalisé par CONRAD Guillaume <br /> réalisé le
        02/03/2023
      </h2>
      {closeOne && (
        <ProgressBar
          className="hello"
          title="Initialisation du test technique"
          progress={progressOne}
          onClick={() => {
            console.log(selectBarOne);
            setSelectBarTwo(0); // Secure if selectBarOne clicked
            setSelectBarOne(1);
          }}
          close={() => {
            onclick(setCloseOne(false));
          }}
          isSelected={selectBarOne === 1}
        />
      )}
      {closeTwo && (
        <ProgressBar
          title="Avancement de la phase de développement"
          progress={progressTwo}
          onClick={() => {
            console.log(selectBarTwo);
            setSelectBarOne(0); // secure if selectBarTwo clicked
            setSelectBarTwo(1);
          }}
          close={() => {
            onclick(setCloseTwo(false));
          }}
          isSelected={selectBarTwo === 1}
          className={selectBarTwo ? "progress-bar--selected" : ""}
        />
      )}
      <div className="controll">
        <button onClick={handleReset}>Remette à zero le compteur</button>
        <button
          onClick={() => {
            handleReset();
            setProgressOne(0);
            setProgressTwo(0);
          }}
        >
          Remettre à zéro les compteurs
        </button>
        <button onClick={handleAdd5}>Ajouter 5%</button>
        <button onClick={handleAdd10}>Ajouter 10%</button>
      </div>
    </div>
  );
};

export default Home;
