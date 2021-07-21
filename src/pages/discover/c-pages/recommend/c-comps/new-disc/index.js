import React, { memo } from 'react';

import ThemeHeaderRec from '@/components/theme-header-rec';

import { DiscWrapper } from './style';

export default memo(function NewDisc() {
  return (
    <DiscWrapper>
      <ThemeHeaderRec title="新碟上架" />
    </DiscWrapper>
  )
})
