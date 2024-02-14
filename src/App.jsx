import "./App.css";
import { USERNAMESARRAY, RANDOMMESSAGE } from "./constants";
import { Button, IconButton } from "@mui/material";
import { Attribution, Settings, SentimentSatisfied, Star } from "@mui/icons-material";

function ChatMessage(usuario = "Manolo", mensaje = "¡Hola mi gente! ¿Qué tal? ¿Cómo estás todos? Estoy emocionado por todo") {
  return (
      <p className="text-start">
        <IconButton aria-label="delete" size="large" style={{ padding: 0, marginRight: "0.25rem", backgroundColor: "cyan", borderRadius: "10%" }}>
          <Star fontSize="inherit" className="text-white" />
        </IconButton>
        <span className="text-purple-800">{usuario}</span> <span>:</span> <span>{mensaje}</span>
      </p>
  );
}

function App() {
  const usuarios = USERNAMESARRAY;

  return (
    <div id="main-container" className="fixed top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] border-3 border-black-900 grid grid-cols-1 gap-3">
      <div id="chat-box" className="flex flex-col justify-start items-start">
        {usuarios.map((user) => {
          return ChatMessage(user, RANDOMMESSAGE(user.length + 10));
        })}
      </div>
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
            <Button variant="contained">Reply</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
