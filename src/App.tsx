import React from 'react';
import Header from './components/Header/Header';
import './common/styles/main.scss';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import Home from './pages/Home/Home';
import Youtube from './pages/Youtube/Youtube';
import WhoAmI from './pages/WhoAmI/WhoAmI';
import Projects from './pages/Projects/Projects';

const App = () => (
  <div className='app-container'>
    <Header />
    <Main>
      <Home />
      <WhoAmI />
      <WorkExperience />
      <Youtube />
      <Projects />
    </Main>
    <Sidebar />
    <Footer />
  </div>
);

export default App;
