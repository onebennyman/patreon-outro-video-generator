import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "@mui/material";
import { Attribution, Settings, SentimentSatisfied } from "@mui/icons-material";
import Chat from "./Chat";
import { generarRandomUser } from "./utils/RealStringGenerator";

function App() {
  const [randomUser, setRandomUser] = useState(null);
  const intervalTime = 500;
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (randomUser === null) {
        setRandomUser(generarRandomUser());
      } else {
        setRandomUser(null);
      }
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [intervalTime, randomUser]);

  return (
    <div id="main-container" className="border-3 border-black-900 grid grid-cols-1 gap-3 p-3">
      <Chat randomUser={randomUser} />
      <div id="control-box">
        <div id="input-box" className="w-full border-2 border-purple-600 rounded flex flex-row justify-stretch items-center p-1">
          <div className="border-s-2 border-gray-400 flex flex-row justify-between items-baseline grow text-gray-400">
            <span className="ms-[0.125rem]">Send a reply</span>
          </div>
          <SentimentSatisfied />
        </div>
        <div id="toolbar-box" className="flex flex-row justify-between items-center pt-1 pb-1">
          <div id="toolbar-info" className="flex flex-row justify-center items-center p-1">
            <Attribution />
            <span>500</span>
          </div>
          <div id="toolbar-conf">
            <Settings />
            <Button variant="contained" style={{ backgroundColor: "#9146ff" }}>
              Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
