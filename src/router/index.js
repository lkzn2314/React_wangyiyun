import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const LKDiscover = lazy(_ => import('@/pages/discover'));
const Recommend = lazy(_ => import('@/pages/discover/c-pages/recommend'));

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
