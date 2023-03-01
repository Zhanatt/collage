import React from 'react'

function News() {
  return (
    <div className='news'>
        <div className="container">
            <div className="news__inner">
                <div className="news__image">
                    <div className="news__imageContent">
                        <h3 className="news__imageContent-title">Новая модель организационной деятельности</h3>
                        <p className="news__imageContent-text">Мы вынуждены отталкиваться от того, что существующая теория требует определения и уточнения поэтапного и последовательного развития...</p>
                        <span className="news__imageContent-date">16.01.2023</span>
                    </div>
                </div>
                <div className="news__content">
                    <h2 className="news__title">Новости</h2>
                    <ul className="news__list">
                        <li className="news__item">
                            <p className="news__item-text">Волонтеры КЭУ согрели сотрудников "Тазалыка" горячим чаем</p>
                            <span className='news__item-date'>13.01.2023</span>
                        </li>
                        <li className="news__item">
                            <p className="news__item-text">Волонтеры КЭУ согрели сотрудников "Тазалыка" горячим чаем</p>
                            <span className='news__item-date'>13.01.2023</span>
                        </li>
                        <li className="news__item">
                            <p className="news__item-text">Волонтеры КЭУ согрели сотрудников "Тазалыка" горячим чаем</p>
                            <span className='news__item-date'>13.01.2023</span>
                        </li>
                        <li className="news__item">
                            <p className="news__item-text">Волонтеры КЭУ согрели сотрудников "Тазалыка" горячим чаем</p>
                            <span className='news__item-date'>13.01.2023</span>
                        </li>
                        <li className="news__item">
                            <p className="news__item-text">Волонтеры КЭУ согрели сотрудников "Тазалыка" горячим чаем</p>
                            <span className='news__item-date'>13.01.2023</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News