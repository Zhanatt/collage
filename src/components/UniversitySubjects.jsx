import React from 'react'
import UniversitySubjectsItem from './UniversitySubjectsItem'

function UniversitySubjects() {
  return (
    <div className='universitySubjects'>
      <div className='universitySubjects__inner'>
        <div className='universitySubjects__card'>
          <img src="./images/universitySubjects-cardImage.png" alt="" />
          <div className="universitySubjects__card-content">
            <h3>Банковское дело</h3>
            <p>Один из самый че то так все такое и самый важная профессия можете с помощью банковского дела в банке работать  </p>
          </div>
        </div>
        <ul className="universitySubjects__items">
          <UniversitySubjectsItem title={'Туризм'}/>
          <UniversitySubjectsItem title={'Экономика и бухгалтерский учет'}/>
          <UniversitySubjectsItem title={'Банковское дело'}/>
          <UniversitySubjectsItem title={'Технология продукции общественного питания'}/>
          <UniversitySubjectsItem title={'Организация обслуживания в гостиницах и туристических комплексах '}/>
        </ul>
        <ul className="universitySubjects__items">
          <UniversitySubjectsItem title={'Налоги и налогообложение'}/>
          <UniversitySubjectsItem title={'Финанс'}/>
          <UniversitySubjectsItem title={'Правоведение'}/>
          <UniversitySubjectsItem title={'Прикладная информатика'}/>
        </ul>
      </div>
    </div>
  )
}

export default UniversitySubjects