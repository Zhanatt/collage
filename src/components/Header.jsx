import React, {useState, useEffect} from 'react'
import HeaderTop from './HeaderTop'

const Header = () => {
    
  return (
    <div className='header'>

        <HeaderTop/>

        <div className="header__main">
            <div className="header__main-inner">
                <h1 className="header__title">Получи диплом государственного образца</h1>
                <p className="header__subtitle">Бизнес-специальность за 3 года, 10 мес после 9 класса, и за 2 года, 10 мес после 11 класса!</p>
                <button className="header__button">Хочу поступить</button>
            </div>
            
        </div>
               
    </div>
  )
}
export default Header
