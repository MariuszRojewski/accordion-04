import React from 'react'
import SingleQuestion from './SingleQuestion';

const Questions = ({ questions }) => {
    const mapedQuestions = questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />
    })

    return (
        <section className='container'>
            <h1>Questions</h1>
            {mapedQuestions}
        </section>
    )
}

export default Questions
