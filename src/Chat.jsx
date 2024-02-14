import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import Star from '@mui/icons-material/Star';
import { generarRandomUsers } from './utils/RealStringGenerator';

const ChatComponent = ({randomUser}) => {
  const [usuarios, setUsuarios] = useState(generarRandomUsers(20));
  const limit = usuarios.length
  


  useEffect(() => {
    if (randomUser !== null) {
       const newMessages = [randomUser, ...usuarios.slice(0, limit - 1)].reverse();
        setUsuarios(newMessages);
      }

  }, [randomUser]);


  return (
    <div id="chat-box" className="flex flex-col justify-start items-start gap-1">
      {usuarios.map((usuario, index) => (
        <p key={index} className="text-start">
          <IconButton aria-label="delete" size="large" style={{ padding: 0, marginRight: '0.25rem', backgroundColor: 'cyan', borderRadius: '10%' }}>
            <Star fontSize="inherit" className="text-white" />
          </IconButton>
          <span className="text-purple-800">{usuario?.username}</span> <span>:</span> <span>{usuario?.message}</span>
        </p>
      ))}
    </div>
  );
};

ChatComponent.propTypes = {
    randomUser: PropTypes.object,
};

export default ChatComponent;
