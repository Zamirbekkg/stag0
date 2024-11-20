import React from 'react';
import '../Home/Home.css'
import logo from './logo.svg/Line.svg'
import LineLogo from './logo.svg/Line 2.svg'
import Photo from './logo.svg/Rectangle 10.svg'
import Collecsee from './logo.svg/Collecsee.svg'

const Home = () => {
    return (
        <div className='Ves'>
            <div className='Conreiner'>
                <div className='nomber'>
                    <p className='nomberP'>8 (812) 123-45-67    |    Работаем 7 дней в неделю    |    9:00 — 18:00  </p>
                </div>
                <div className='Reg'>
                    <p className='RegP'>Войти / Регистрация</p>
                </div>
          </div>

          <div className='LineUl'>
                <div className='porten'>
                    <p>PORTEN</p>
                </div>
            </div>

        <div className='imgF'>
            <img className='logoLine' src={logo} alt="" />
            <p className='LoremText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
        </div> 
         
        <div>
        <div className='Sezon'>
            <div className='h3div'>
                <h3 className='h3text'>СЕЗОН 2020/21</h3>
            </div>
            <div className='Linediv'>
                <img className='LineLogo' src={LineLogo} alt="" />
            </div>
            <div className='Time'>
                <div className='Timecol1'>
                </div>
                <div className='Timecol2'>
                </div>
                <div className='Timecol3'>
                </div>
            </div>
        </div>
        <div className='imgKatalog'></div>
        <button className='Catalogbtn'></button>
        </div>
        <div className='Photo1'>
            <img className='Photo10' src={Photo} alt="" />
        </div>
        <div className='Collection'>
        <img className='collecsee' src={Collecsee} alt="" />
        <div className='Line11'></div>
        <p className='elit'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>
        </div>
        </div>
    );
}

export default Home;
