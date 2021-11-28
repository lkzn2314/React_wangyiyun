import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

const LKDiscover = lazy(_ => import('@/pages/discover'));
const Recommend = lazy(_ => import('@/pages/discover/c-pages/recommend'));
const Musiclist = lazy(_ => import('@/pages/discover/c-pages/musiclist'));
const Playlist = lazy(_ => import('@/pages/discover/c-pages/playlist'));
const Djradio = lazy(_ => import('@/pages/discover/c-pages/djradio'));
const Artist = lazy(_ => import('@/pages/discover/c-pages/artist'));
const Disc = lazy(_ => import('@/pages/discover/c-pages/disc'));

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
        path: '/discover/musiclist',
        component: Musiclist
      },
      {
        path: '/discover/djradio',
        component: Djradio
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/album',
        component: Disc
      },
      {
        path: '/discover/:playlist',
        component: Playlist
      },
    ]
  }
]
