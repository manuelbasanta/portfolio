import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../reducers/theme/theme-reducer';
import selectTheme from '../reducers/theme/theme-selectors';
import { Theme } from '../reducers/theme/theme-types';

const useTheme = () => {
  const theme = useSelector(selectTheme());
  const dispatch = useDispatch();

  const setTheme = (newTheme: Theme): void => {
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = (): void => {
    const newTheme: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    dispatch(changeTheme(newTheme));
    setTheme(newTheme);
  };

  useEffect(() => {
    setTheme(theme);
  }, []);

  return { toggleTheme, theme };
};

export default useTheme;
