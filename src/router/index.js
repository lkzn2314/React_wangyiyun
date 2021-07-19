import React from 'react';
import { Redirect } from 'react-router-dom';

import LKDiscover from '@/pages/discover';
import Recommend from '@/pages/discover/c-pages/recommend';

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
      }
    ]
  }
]
