import React from 'react'

function UniversitySubjectsItem(props) {
  return (
    <li className="universitySubjects__item">
        <p>{props.title}</p>
    </li>
  )
}

export default UniversitySubjectsItem