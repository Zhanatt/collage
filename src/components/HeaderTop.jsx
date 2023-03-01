import React from 'react'

function HeaderTop() {
  return (
    <div className="header__top">
            <div className="container">

                <div className="header__top-inner">
                    <a className="header__logo" href='/'>
                        <img src="./images/logo.svg" alt="header-logo" />
                        <p>КОЛЛЕДЖ ЭКОНОМИКИ И СЕРВИСА</p>
                    </a>
                    <ul className="header__nav">
                        <li><a href="/about-us">о нас</a></li>
                        <li><a href="">специальности</a></li>
                        <li><a href="">новости</a></li>
                        <li><a href="">как поступить</a></li>
                        <li><a href="">контакты</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
  )
}

export default HeaderTop