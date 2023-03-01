import React, {useState, useEffect} from 'react'
import HeaderTop from './HeaderTop'

const Header = () => {
    // const headerTop = document.querySelector('.header-top');
    
    // const [count,setCount] = useState();

    // function setCount(){

    //     if(window.pageYOffset > 100){
    //         console.log(888)
    //     }
    //     else{
    //         console.log(777)
    //     }
    // }
    // const [offset, setOffset] = useState('header-top');

    // useEffect(() => {
    //     const onScroll = () => setOffset(window.pageYOffset);
    //     // clean up code
    //     window.removeEventListener('scroll', onScroll);
    //     window.addEventListener('scroll', onScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', onScroll);
        
    // }, []);

    // if(offset >= 700){
    //     console.log("Zhanat")


    // }
    
    
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
