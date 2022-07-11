import { createSlice } from '@reduxjs/toolkit';
import URL from '../../common/types/url-types';
import { TimelineState } from './timelime-types';

const initialState: TimelineState = {
  steps:
  [
    {
      content: [
        'Fully remote, fast paced engineering position for a leader US Fintech.',
        'Build innovative functionality to help investors research stocks and understand market trends.',
        'Worked alongside a 10+ people team.',
      ],
      header: 'May 2022 - Present',
      title: {
        position: 'Sr Software developer',
        company: {
          name: 'Koyfin',
          url: URL.KOYFIN,
        },
      },
    },
    {
      content: [
        'Building robust and sophisticated frontend applications in the leading Latin American Fintech.',
        'Worked alongside a 15+ people team.',
        'Some technologies used: React, NodeJS.',
      ],
      header: 'November 2019 - May 2022',
      title: {
        position: 'Sr Software developer',
        company: {
          name: 'Mercado Libre',
          url: URL.MERCADOLIBRE,
        },
      },
    },
    {
      content: [
        'Alongside an interdisciplinary team, that goes from designing the user experience to the development of front and back end, we work to make web apps that are fast, easy to use and enjoyable.',
        'Leading the frontend area in “Dirección General de Proyectos Tecnológicos y Gestión Documental”.',
        'Worked alongside a 10 people team.',
        'Some technologies used: Angular2, Vanilla JS, JQuery, +.',
      ],
      header: 'October 2017 - November 2019',
      title: {
        position: 'Frontend Developer',
        company: {
          name: 'Buenos Aires City Government',
          url: URL.GCBA,
        },
      },
    },
    {
      content: [
        'Full responsibility over technical and design aspects of websites.',
        'Creating visual content  that boosts their profile for individuals and companies.',
        'Some technologies used: React, JQuery, Bootstrap, Sass.',
      ],
      header: 'March 2016 - August  2019',
      title: {
        position: 'Frontend Developer',
        company: {
          name: 'Freelance',
          url: URL.LINKEDIN,
        },
      },
    },
  ],
};

const componentReducer = createSlice({
  name: 'timeline',
  initialState,
  reducers: {},
});

export default componentReducer.reducer;
