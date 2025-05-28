import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

const MessageList = ({ messages }: { messages: { role: string; content: string }[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    // <div
    //   ref={containerRef}
    //   className="flex flex-col gap-2 overflow-y-auto p-4 h-[100%] bg-white"
    // >
    //   {messages.map((msg, idx) => (
    //     <div
    //       key={idx}
    //       className={`p-2 rounded-md max-w-[80%] md:max-w-2xl flex wrap ${
    //         msg.role === 'user' ? 'self-end'  : 'self-start'
    //       }`}
    //       style={msg.role === 'user' ? { backgroundColor: '#4B5563', color: '#FFFFFF' } : {background:'#F3F4F6',color:'#181818'}}
    //     >
    //       {msg.content}
    //     </div>
    //   ))}
    // </div>

    <div
      ref={containerRef}
      className="flex flex-col gap-2 overflow-y-auto p-4 h-[100%] bg-white"
    >
      {messages.length === 0 ? (
        <div className="flex flex-col">

          <div className="h-[196px] flex flex-col items-center justify-center text-center">
            <span className='font-normal'>
              Highlight text and press{' '}
              <kbd className="px-1 py-0.5 rounded  font-bold">⌘K</kbd>
            </span>
            <span>Or enter a prompt below</span>
          </div>

          <div className='flex flex-col gap-2'>

            <div className='flex justify-start items-center 
          gap-3 p-2 text-sm font-normal border border-gray-300 rounded-2xl '>
              <FontAwesomeIcon icon={faWandMagicSparkles} color='#4B5563' size='sm'/>
              <p style={{ color: '#4B5563' }}>Show me Slack converstion about recent Salesforce oppurtunities</p>
            </div>
            <div className='flex justify-start items-center 
          gap-3 p-2 text-sm font-normal border border-gray-300 rounded-2xl '>
              <FontAwesomeIcon icon={faWandMagicSparkles} color='#4B5563' />
              <p style={{ color: '#4B5563' }}>Show me Gong calls about churn risk</p>
            </div>
            <div className='flex justify-start items-center 
          gap-3 p-2 text-sm font-normal border border-gray-300 rounded-2xl '>
              <FontAwesomeIcon icon={faWandMagicSparkles} color='#4B5563' />
              <p style={{ color: '#4B5563' }}>Show me my top customers by revenue in Salesforce</p>
            </div>


          </div>


        </div>
      ) : (
        messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-md max-w-[80%] md:max-w-2xl flex flex-col wrap ${msg.role === 'user' ? 'self-end' : 'self-start'
              }`}
            style={
              msg.role === 'user'
                ? { backgroundColor: '#4B5563', color: '#FFFFFF' }
                : { background: '#F3F4F6', color: '#181818' }
            }
          >
            {msg.content}



            {msg.role !== 'user' && (
              <div className="flex gap-2 text-xs text-gray-500 mt-1">
                <button onClick={() => navigator.clipboard.writeText(msg.content)} title="Copy">
                  📋
                </button>
                <button onClick={() => console.log('Thumbs up clicked', idx)} title="Thumbs Up">
                  👍
                </button>
                <button onClick={() => console.log('Thumbs down clicked', idx)} title="Thumbs Down">
                  👎
                </button>
              </div>
            )}
          </div>


        ))
      )}
    </div>

  );
};

export default MessageList;
