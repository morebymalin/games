import React, { useState } from "react";
import "./Skattjakt.css";
import "./GameShared.css";

function Skattjakt({ questions = [], skattjaktName = "", goHome, introImg, finishImg }) {

  // Hooks måste alltid ligga överst!
  const [step, setStep] = useState(-1);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null); // "Rätt!" eller felmeddelande
  const [confirmedCorrect, setConfirmedCorrect] = useState(false); // visar Nästa-knapp när sant
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [pairs, setPairs] = useState([]);
  const [wrongAttempts, setWrongAttempts] = useState(0); // antal fel på aktuell fråga
  const [showHintBtn, setShowHintBtn] = useState(false); // visa ledtrådsknapp?
  const [hintVisible, setHintVisible] = useState(false); // popup synlig?


  // Säker väg till bilder i public även vid subkataloger
  const resolveImg = (src) => {
    if (!src) return src;
    if (src.startsWith("http")) return src;
    // src som börjar med "/" betyder från public root
    return (process.env.PUBLIC_URL || "") + src; // ex: /pairs/sun.svg => /appsub/pairs/sun.svg
  };



  // Visa intro-sida innan första frågan
  if (step === -1 && introImg) {
    return (
      <div className="skattjakt-container">
        <h2>{skattjaktName}</h2>
        <img src={resolveImg(introImg)} alt="Intro" className="game-img-large" />
        <div className="game-question-box">
          <button className="game-check-btn" onClick={() => setStep(0)}>Starta skattjakten</button>
        </div>
        <button className="game-back-btn bottom" onClick={goHome}>Tillbaka</button>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="skattjakt-container">
        <h2>Ingen skattjakt hittades!</h2>
        <button className="game-back-btn" onClick={goHome}>Till startsidan</button>
      </div>
    );
  }
  const current = questions[step];
  // Hjälpfunktioner för para ihop
  const isImgUsed = img => pairs.some(pair => pair.img === img || pair.leftImg === img || pair.rightImg === img);
  const isLeftImgUsed = img => pairs.some(pair => pair.leftImg === img);
  const isRightImgUsed = img => pairs.some(pair => pair.rightImg === img);
  const isWordUsed = word => pairs.some(pair => pair.word === word);

  const handlePairClick = (type, value) => {
    if (current.type === "pairImg") {
      if (type === "leftImg") setSelectedImg(value);
      if (type === "rightImg") setSelectedWord(value);

      if (
        selectedImg && type === "rightImg" && !isLeftImgUsed(selectedImg) && !isRightImgUsed(value)
      ) {
        setPairs([...pairs, { leftImg: selectedImg, rightImg: value }]);
        setSelectedImg(null);
        setSelectedWord(null);
        setResult(null);
        setConfirmedCorrect(false);
      }
      if (
        selectedWord && type === "leftImg" && !isLeftImgUsed(value) && !isRightImgUsed(selectedWord)
      ) {
        setPairs([...pairs, { leftImg: value, rightImg: selectedWord }]);
        setSelectedImg(null);
        setSelectedWord(null);
        setResult(null);
        setConfirmedCorrect(false);
      }
      return;
    }
    // ...pair (ord-bild) logik...
    if (type === "img") setSelectedImg(value);
    if (type === "word") setSelectedWord(value);
    if (
      ((type === "word" && selectedImg && !isImgUsed(selectedImg) && !isWordUsed(value))) ||
      ((type === "img" && selectedWord && !isImgUsed(value) && !isWordUsed(selectedWord)))
    ) {
      setPairs([...pairs, { img: type === "img" ? value : selectedImg, word: type === "word" ? value : selectedWord }]);
      setSelectedImg(null);
      setSelectedWord(null);
      setResult(null);
      setConfirmedCorrect(false);
    }
  };

  const checkPairs = () => {
    const correct = current.answer.every(keyPair =>
      pairs.some(userPair => userPair.img === keyPair.img && userPair.word === keyPair.word)
    );
    if (correct) {
      setResult("Rätt!");
      setConfirmedCorrect(true);
    } else {
      setResult("Fel, försök igen!");
      setConfirmedCorrect(false);
    }
  };

  const checkPairsImg = () => {
    const correct = current.answer.every(keyPair =>
      pairs.some(userPair =>
        (userPair.leftImg === keyPair.img1 && userPair.rightImg === keyPair.img2) ||
        (userPair.leftImg === keyPair.img2 && userPair.rightImg === keyPair.img1)
      )
    );
    if (correct) {
      setResult("Rätt!");
      setConfirmedCorrect(true);
    } else {
      setResult("Fel, försök igen!");
      setConfirmedCorrect(false);
    }
  };

  const handleRemovePair = idx => {
    setPairs(pairs.filter((_, i) => i !== idx));
    setResult(null);
    setConfirmedCorrect(false);
  };

  const clearCurrentSelection = () => {
    setSelectedImg(null);
    setSelectedWord(null);
  };

  const handleCheck = () => {
    let isCorrect = false;
    if (current.type === "number") {
      const answers = Array.isArray(current.answer) ? current.answer : [current.answer];
      isCorrect = answers.some(a => String(answer).trim() === String(a).trim());
    } else if (current.type === "letters") {
      const answers = Array.isArray(current.answer) ? current.answer : [current.answer];
      isCorrect = answers.some(a => String(answer).trim().toLowerCase() === String(a).trim().toLowerCase());
    }
    if (isCorrect) {
      setResult("Rätt!");
      setConfirmedCorrect(true);
      // Återställ hint-state vid rätt svar
      setWrongAttempts(0);
      setShowHintBtn(false);
      setHintVisible(false);
    } else {
      setResult("Fel, försök igen!");
      setConfirmedCorrect(false);
      const nextWrong = wrongAttempts + 1;
      setWrongAttempts(nextWrong);
      if (nextWrong >= 3) setShowHintBtn(true);
    }
  };

  const handleNext = () => {
    if (!confirmedCorrect) return;
    setStep(step + 1);
    setAnswer("");
    setResult(null);
    setConfirmedCorrect(false);
    setPairs([]);
    setSelectedImg(null);
    setSelectedWord(null);
    setWrongAttempts(0);
    setShowHintBtn(false);
    setHintVisible(false);
  };

  const handleBackOne = () => {
    if (step === 0) { goHome(); return; }
    setStep(step - 1);
    setAnswer("");
    setResult(null);
    setConfirmedCorrect(false);
    setPairs([]);
    setSelectedImg(null);
    setSelectedWord(null);
    setWrongAttempts(0);
    setShowHintBtn(false);
    setHintVisible(false);
  };

  // Gå tillbaka från grattissidan till sista frågan
  const handleBackFromFinish = () => {
    const lastIndex = questions.length - 1;
    if (lastIndex < 0) return; // säkerhetskoll
    setStep(lastIndex);
    // Nollställ state så man får svara om ifall man vill
    setAnswer("");
    setResult(null);
    setConfirmedCorrect(false);
    setPairs([]);
    setSelectedImg(null);
    setSelectedWord(null);
    setWrongAttempts(0);
    setShowHintBtn(false);
    setHintVisible(false);
  };

  if (step >= questions.length) {
    // Scrolla automatiskt till toppen när grattis-sidan visas
    window.scrollTo(0, 0);
    return (
      <div className="skattjakt-container">
        <div className="finish-box">
          <div className="confetti">
            {Array.from({ length: 16 }).map((_, i) => <span key={i} />)}
          </div>
          <h2 className="finish-heading">Grattis!</h2>
          <p className="finish-sub">Du klarade skattjakten: <strong>{skattjaktName}</strong></p>
          {finishImg && (
            <img
              src={resolveImg(finishImg)}
              alt={skattjaktName + ' klarad'}
              className="finish-img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          )}
          <button className="game-check-btn" onClick={goHome}>Till startsidan</button>
        </div>
        <button className="game-back-btn bottom" onClick={handleBackFromFinish}>Tillbaka</button>
      </div>
    );
  }

  return (
    <div className="skattjakt-container">
      <h2>Fråga {step + 1}</h2>
      {current.img && <img src={resolveImg(current.img)} alt="" className="game-img-large" onError={(e) => { e.target.style.display = 'none'; }} />}
      <div className="game-question-box">
        <div className="question-prompt">{current.prompt}</div>

        {(current.type === "number" || current.type === "letters") && (
          <>
            <input
              type={current.type === "number" ? "number" : "text"}
              placeholder={current.type === "number" ? "Skriv en siffra" : "Skriv svaret"}
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') { confirmedCorrect ? handleNext() : handleCheck(); } }}
              className="game-input"
            />
            {!confirmedCorrect && (
              <button className="game-check-btn" onClick={handleCheck}>Kolla svar</button>
            )}
            {result && <div className="game-result">{result}</div>}
            {showHintBtn && !confirmedCorrect && (
              <button type="button" className="hint-btn" onClick={() => setHintVisible(v => !v)}>
                {hintVisible ? "Dölj ledtråd" : "Visa ledtråd"}
              </button>
            )}
            {hintVisible && showHintBtn && !confirmedCorrect && current.hint && (
              <div className="hint-popup"><strong>Ledtråd:</strong> {current.hint}</div>
            )}
            {confirmedCorrect && (
              <button className="game-check-btn" onClick={handleNext}>Nästa</button>
            )}
          </>
        )}

        {current.type === "pair" && (
          <>
            <div className="pair-layout inside-box side-columns">
              <div className="pair-helper">
                {!selectedImg && !selectedWord && (
                  <div className="helper-text">1. Välj en bild • 2. Välj ett ord</div>
                )}
                {selectedImg && !selectedWord && (
                  <div className="helper-text">Bild vald ✔ – välj ett ord</div>
                )}
                {!selectedImg && selectedWord && (
                  <div className="helper-text">Ord valt ✔ – välj en bild</div>
                )}
                {selectedImg && selectedWord && (
                  <div className="helper-text ready">Match skapas när du klickar!</div>
                )}
                {(selectedImg || selectedWord) && (
                  <button type="button" className="clear-selection-btn" onClick={clearCurrentSelection}>Rensa val</button>
                )}
              </div>
              <div className="pair-columns-simple">
                <div className="images-stack" aria-label="Bilder">
                  {current.pairs.map(opt => (
                    <div
                      key={opt.img}
                      className={`pair-box img-box ${selectedImg === opt.img ? "selected" : ""} ${isImgUsed(opt.img) ? "used" : ""}`}
                      onClick={() => !isImgUsed(opt.img) && handlePairClick("img", opt.img)}
                    >
                      <img src={resolveImg(opt.img)} alt={opt.word} />
                    </div>
                  ))}
                </div>
                <div className="words-stack" aria-label="Ord">
                  {current.pairs.map(opt => (
                    <div
                      key={opt.word}
                      className={`pair-box word-box ${selectedWord === opt.word ? "selected" : ""} ${isWordUsed(opt.word) ? "used" : ""}`}
                      onClick={() => !isWordUsed(opt.word) && handlePairClick("word", opt.word)}
                    >
                      <span className="word-label">{opt.word}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pair-matches matches-compact">
                {pairs.length > 0 && <div className="matches-heading">Dina par:</div>}
                {pairs.map((pair, idx) => (
                  <div key={idx} className="pair-match-box">
                    <img src={resolveImg(pair.img)} alt="" />
                    <span>{pair.word}</span>
                    <button className="remove-pair-btn" onClick={() => handleRemovePair(idx)} title="Ta bort">×</button>
                  </div>
                ))}
              </div>
            </div>
            {pairs.length === current.pairs.length && !confirmedCorrect && (
              <button className="game-check-btn" onClick={checkPairs}>Kolla svar</button>
            )}
            {result && <div className="game-result">{result}</div>}
            {showHintBtn && !confirmedCorrect && (
              <button type="button" className="hint-btn" onClick={() => setHintVisible(v => !v)}>
                {hintVisible ? "Dölj ledtråd" : "Visa ledtråd"}
              </button>
            )}
            {hintVisible && showHintBtn && !confirmedCorrect && current.hint && (
              <div className="hint-popup"><strong>Ledtråd:</strong> {current.hint}</div>
            )}
            {confirmedCorrect && (
              <button className="game-check-btn" onClick={handleNext}>Nästa</button>
            )}
          </>
        )}


        {current.type === "pairImg" && (
          <>
            <div className="pair-layout inside-box side-columns">
              <div className="pair-helper">
                {!selectedImg && !selectedWord && (
                  <div className="helper-text">1. Välj en vänsterbild • 2. Välj en högerbild</div>
                )}
                {selectedImg && !selectedWord && (
                  <div className="helper-text">Vänster vald ✔ – välj höger</div>
                )}
                {!selectedImg && selectedWord && (
                  <div className="helper-text">Höger vald ✔ – välj vänster</div>
                )}
                {selectedImg && selectedWord && (
                  <div className="helper-text ready">Match skapas när du klickar!</div>
                )}
                {(selectedImg || selectedWord) && (
                  <button type="button" className="clear-selection-btn" onClick={clearCurrentSelection}>Rensa val</button>
                )}
              </div>
              <div className="pair-columns-simple">
                <div className="images-stack" aria-label="Vänster bilder">
                  {current.pairs.map(opt => (
                    <div
                      key={opt.img1}
                      className={`pair-box img-box ${selectedImg === opt.img1 ? "selected" : ""} ${isLeftImgUsed(opt.img1) ? "used" : ""}`}
                      onClick={() => !isLeftImgUsed(opt.img1) && handlePairClick("leftImg", opt.img1)}
                    >
                      <img src={resolveImg(opt.img1)} alt="Vänster" />
                    </div>
                  ))}
                </div>
                <div className="images-stack" aria-label="Höger bilder">
                  {current.pairs.map(opt => (
                    <div
                      key={opt.img2}
                      className={`pair-box img-box ${selectedWord === opt.img2 ? "selected" : ""} ${isRightImgUsed(opt.img2) ? "used" : ""}`}
                      onClick={() => !isRightImgUsed(opt.img2) && handlePairClick("rightImg", opt.img2)}
                    >
                      <img src={resolveImg(opt.img2)} alt="Höger" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="pair-matches matches-compact">
                {pairs.length > 0 && <div className="matches-heading">Dina par:</div>}
                {pairs.map((pair, idx) => (
                  <div key={idx} className="pair-match-box">
                    <img src={resolveImg(pair.leftImg)} alt="Vänster" />
                    <img src={resolveImg(pair.rightImg)} alt="Höger" />
                    <button className="remove-pair-btn" onClick={() => handleRemovePair(idx)} title="Ta bort">×</button>
                  </div>
                ))}
              </div>
            </div>
            {pairs.length === current.pairs.length && !confirmedCorrect && (
              <button className="game-check-btn" onClick={checkPairsImg}>Kolla svar</button>
            )}
            {result && <div className="game-result">{result}</div>}
            {showHintBtn && !confirmedCorrect && (
              <button type="button" className="hint-btn" onClick={() => setHintVisible(v => !v)}>
                {hintVisible ? "Dölj ledtråd" : "Visa ledtråd"}
              </button>
            )}
            {hintVisible && showHintBtn && !confirmedCorrect && current.hint && (
              <div className="hint-popup"><strong>Ledtråd:</strong> {current.hint}</div>
            )}
            {confirmedCorrect && (
              <button className="game-check-btn" onClick={handleNext}>Nästa</button>
            )}
          </>
        )}






      </div>
      <button className="game-back-btn bottom" onClick={handleBackOne}>Tillbaka</button>
    </div>
  );
}

export default Skattjakt;


