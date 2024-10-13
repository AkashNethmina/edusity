
import Navbar from './Componerts/Navbar/Navbar'
import Hero from './Componerts/Hero/Hero'
import Programe from './Componerts/Programe/Programe'
import Title from './Componerts/Title/Title'
import About from './Componerts/About/About'
import Campus from './Componerts/Campus/Campus'
import Testimonials from './Componerts/Testimonials/Testimonials'
import Contact from './Componerts/Contact/contact'
import Footer from './Componerts/Footer/Footer'
import VideoPlayer from './Componerts/VideoPlayer/VideoPlayer'
import { useState } from 'react'

const App = () => {

const [playState, setPlatState] = useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer'/>
        <Programe/>
        <About setPlatState={setPlatState}/>
        <Title subTitle='GALLERY' title='Campus Photos'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>
        <Title subTitle='CONTACT US' title='Get in Touch'/>
        <Contact/>
        <Footer/>
       
      </div>
      <VideoPlayer playState={playState} setPlatState={setPlatState}/>
    </div>
  )
}

export default App