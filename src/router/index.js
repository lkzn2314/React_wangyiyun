import React from 'react';
import { Redirect } from 'react-router-dom';

import LKDiscover from '@/views/discover';
import Recommend from '@/views/discover/children/recommend';
import Ranking from '@/views/discover/children/ranking';
import Djradio from '@/views/discover/children/djradio';


export default [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to='/discover' />
    )
  },
  {
    path: '/discover',
    component: LKDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to={'/discover/recommend'} />
        )
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/ranking',
        component: Ranking
      },
      {
        path: '/discover/rjradio',
        component: Djradio
      }
    ]
  }
]
