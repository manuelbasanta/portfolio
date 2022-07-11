import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../common/components/Logos/Logo';
import { LogoSize } from '../../common/components/Logos/logos-types';
import GitHubLogo from '../../common/components/Logos/social/GitHubLogo';
import LinkedinLogo from '../../common/components/Logos/social/LinkedinLogo';
import YoutubeLogo from '../../common/components/Logos/social/YoutubeLogo';
import WebLogo from '../../common/components/Logos/local/WebLogo';
import Switch from '../../common/components/Switch/Switch';
import useTheme from '../../common/hooks/useTheme';
import { Theme, ThemeLogos } from '../../common/reducers/theme/theme-types';
import Link from '../../common/components/Link/Link';
import selectVisiblePage from '../../common/reducers/visible-page/visible-page-selectors';
import URL from '../../common/types/url-types';

const Sidebar: FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [page, setPage] = useState('HOME');
  const [animation, setAnimation] = useState(null);
  const visiblePage = useSelector(selectVisiblePage());

  useEffect(() => {
    if (visiblePage !== page) {
      setTimeout(() => {
        setAnimation('animate-in');
        setPage(visiblePage);
      }, 200);
      setAnimation('animate-out');
    }
  }, [visiblePage]);

  return (
    <aside className='sidebar'>
      <section className='sidebar__logo'>
        <Logo size={LogoSize.BIG} image={WebLogo} />
      </section>
      <section className={`sidebar__visible-page ${animation}`}>
        {visiblePage}
      </section>
      <section className='sidebar__section'>
        <Link href={URL.LINKEDIN}>
          <Logo size={LogoSize.SMALL} image={LinkedinLogo} />
        </Link>
        <Link href={URL.YOUTUBE}>
          <Logo size={LogoSize.SMALL} image={YoutubeLogo} />
        </Link>
        <Link href={URL.GITHUB}>
          <Logo size={LogoSize.SMALL} image={GitHubLogo} />
        </Link>
        <Switch
          onClick={() => toggleTheme()}
          checked={theme === Theme.LIGHT}
          checkedIcon={ThemeLogos.LIGHT}
          uncheckedIcon={ThemeLogos.DARK}
        />
      </section>
    </aside>
  );
};

export default Sidebar;
