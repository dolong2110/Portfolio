import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['l', 'o', 'n', 'g']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt='developer' />
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={19} />
          </h1>
          <h2>
            Full-stack web developer / Golang, Python programmer / Javascript learner
          </h2>
          <Link className='flat-button' to='/contact'>
            CONTACT ME
          </Link>
          <a className='flat-button' target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1Pm1FXVAwdk7PQSmQoJOkzD_gS14AM5W1/view?usp=sharing'>
            RESUME
          </a>
        </div>
      </div>
      <Loader type='pacman' active />
    </>
  );
}

export default Home