import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowinfo] = React.useState(false);

  const handleToggle = () => {
    setShowinfo(!showInfo);
  }

  return (
    <article className='question'>
        <header>
            <h5>{title}</h5>
            <button 
                className='question-btn' 
                onClick={handleToggle}
                >
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </header>
        {showInfo && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
