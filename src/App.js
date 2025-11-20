import React, { useState } from "react";
import Home from "./components/Home";
import EscapeMenu from "./components/EscapeMenu";
import EscapeRoom from "./components/EscapeRoom";
import Skattjakt from "./components/Skattjakt";
import { escapeGames, skattjakter } from "./data/gamesData";

// Fisher-Yates shuffle (non-destructive - returns a new array)
const shuffleArray = (arr) => {
  if (!Array.isArray(arr)) return arr;
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

function App() {
  const [page, setPage] = useState("home");
  const [selectedEscapeGame, setSelectedEscapeGame] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedSkattjakt, setSelectedSkattjakt] = useState(null);
  const [solvedRooms, setSolvedRooms] = useState({}); // { gameId: Set([...roomIds]) }

  const goToEscapeRoom = (roomId) => {
    setSelectedRoom(roomId);
    setPage("escapeRoom");
  };

  const markRoomSolved = (gameId, roomId) => {
    setSolvedRooms(prev => {
      const currentSet = new Set(prev[gameId] || []);
      if (!currentSet.has(roomId)) currentSet.add(roomId);
      return { ...prev, [gameId]: currentSet };
    });
  };

  return (
    <div className="App">
      {page === "home" && (
        <Home
          setPage={setPage}
          setSelectedEscapeGame={setSelectedEscapeGame}
          setSelectedSkattjakt={setSelectedSkattjakt}
        />
      )}
      {page === "escapeMenu" && (
        <EscapeMenu
          escapeGames={escapeGames}
          escapeGameId={selectedEscapeGame}
          goToRoom={goToEscapeRoom}
          goBack={() => setPage("home")}
          solvedRooms={solvedRooms}
        />
      )}
      {page === "escapeRoom" && (
        <EscapeRoom
          escapeGames={escapeGames}
          escapeGameId={selectedEscapeGame}
          roomId={selectedRoom}
          goBack={() => setPage("escapeMenu")}
          markRoomSolved={markRoomSolved}
          solvedRooms={solvedRooms}
        />
      )}
      {page === "skattjakt" && (
        (() => {
          const jakt = skattjakter.find(jakt => jakt.id === selectedSkattjakt) || {};
          const questions = jakt.shuffleQuestions ? shuffleArray(jakt.questions || []) : (jakt.questions || []);
          return (
            <Skattjakt
              questions={questions}
              skattjaktName={jakt.name || ""}
              introImg={jakt.introImg || ""}
              finishImg={jakt.finishImg || ""}
              goHome={() => setPage("home")}
            />
          );
        })()
      )}
    </div>
  );
}

export default App;
