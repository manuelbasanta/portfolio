import React, { useRef } from 'react';
import { LogoSize } from '../../common/components/Logos/logos-types';
import GitHubLogo from '../../common/components/Logos/social/GitHubLogo';
import VimeoLogo from '../../common/components/Logos/social/VimeoLogo';
import useVisiblePage from '../../common/hooks/useVisiblePage';
import { Page } from '../../common/reducers/visible-page/visible-page-types';
import URL from '../../common/types/url-types';
import Box from '../../components/Box/Box';
import Title from '../../components/Title/Title';

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.PROJECTS);

  return (
    <div ref={ref} className='projects'>
      <Title title='Some projects' subtitle='that I have been working on' />
      <div className='projects__box-container'>
        <Box
          title='react-typescript bolierplate'
          description='Boilerplate with the basic structure for a web app using React and Typescript.'
          tags={['Typescript', 'SASS', 'React', 'Webpack']}
          image={GitHubLogo}
          imageSize={LogoSize.XSMALL}
          url={URL.TYPESCRIPT_BOLIERPLATE}
        />
        <Box
          title='Catalogo de posibilidades exitosas'
          description='An installation that generates unique art for every interaction using augmented reality.'
          tags={['Javascript', 'A-frame']}
          image={VimeoLogo}
          imageSize={LogoSize.SMALL}
          url={URL.CATALOGO}
        />
        <Box
          title='Human Voting System'
          description='Voting Dapp supported by Ethereum blockchain, supporting Proof of humanity validation for voters.'
          tags={['Solidity', 'Javascript']}
          image={GitHubLogo}
          imageSize={LogoSize.XSMALL}
          url={URL.HVS}
        />
        <Box
          title='Programación Accesible'
          description='Github profile containing several projects created for my Youtube channel.'
          tags={['Javascript', 'React']}
          image={GitHubLogo}
          imageSize={LogoSize.XSMALL}
          url={URL.PROGRAMACION_ACCESIBLE}
        />
        <Box
          title='My website'
          description='This very same website, take a look under the hood.'
          tags={['Typescript', 'React', 'Sass']}
          image={GitHubLogo}
          imageSize={LogoSize.XSMALL}
          url={URL.PORTFOLIO}
        />
      </div>
    </div>
  );
};

export default Projects;
