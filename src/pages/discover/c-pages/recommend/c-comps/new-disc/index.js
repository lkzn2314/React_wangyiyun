import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import ThemeHeaderRec from '@/components/theme-header-rec';

import { getNewDiscsAction } from '../../store/actionCreators';

import { DiscWrapper } from './style';

export default memo(function NewDisc() {

  const dispatch = useDispatch();
  const { newDiscs } = useSelector(state => ({
    newDiscs: state.getIn(['recommend', 'newDiscs'])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getNewDiscsAction(10))
  }, [dispatch]);

  return (
    <DiscWrapper>
      <ThemeHeaderRec title="新碟上架" />
      {
        newDiscs.map(item => {
          return (
            <div key={item.id}>{item.name}</div>
          )
        })
      }
    </DiscWrapper>
  )
})
