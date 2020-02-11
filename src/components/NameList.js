import React from 'react'

function NameList() {

    const names = ['Teboho', 'Nozipho', 'Neo', 'Teboho'];
    const nameList = names.map((name, index) => <h2 key={index}>{index + 1}. {name}</h2>)

    const persons = [
        {
            id: 1,
            name: 'Teboho',
            skill: 'Angular and React'
        },

        {
            id: 2,
            name: 'Nozipho',
            skill: 'T-SQL and MS SQL Server'
        },

        {
            id: 3,
            name: 'Neo',
            skill: 'Future Data Science'
        }
    ]

    const peronsList = persons.map((person) => <h2 key={person.id}>I am {person.name} and I am a {person.skill} specialist</h2>)

    return (
        <div>
            {/* {peronsList} */}
            {nameList}
        </div>
    )
}

export default NameList
