import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  onSend: () => void;
}

const ChatInput: React.FC<Props> = ({ message, setMessage, onSend }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        onSend();
      }
    }
  };

  return (


    <div className='relative p-4'>
      <div className='border border-gray-300 rounded-[6px]'>
        <textarea
          className="w-full h-[107px] p-4  flex-wrap pr-14
               resize-none focus:outline-none focus:ring-0 scroll-p-0"
          style={{ background: '#FFFFFF' }}
          rows={2}
          placeholder="Chat with Venn..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          onClick={onSend}
          className="absolute right-8 mt-[65px] px-3 py-1 text-white rounded-full hover:bg-blue-600 bg-gray-500"
          style={{ background: '#111827' }}
        >
          <FontAwesomeIcon icon={faArrowUp} color='#FFFFFF' />
        </button>
      </div>
    </div>



  );
};

export default ChatInput;
