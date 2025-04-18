import Navbar from './components/Navbar'
import HeroMain from './components/Hero/HeroMain';
import IntroMain from './components/Intro/IntroMain';
import ThingsIdoMain from './components/ThingsIDo/ThingsIdoMain';
import StatsMain from './components/Stats/StatsMain';
import ExpertiseMain from './components/Expertise/ExpertiseMain';
import IsiMain from './components/Isi/IsiMain';
import FooterMain from './components/Footer/FooterMain';

function Home() {
 

  return (
    <>
    <HeroMain></HeroMain>
    <br />
    <IntroMain/>
    <br />
    <br />
    <ThingsIdoMain/>
    <br />
    <StatsMain/>
    <ExpertiseMain/>
    <IsiMain/>
    </>
    
  )
}

export default Home
