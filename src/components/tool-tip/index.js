import React, { memo } from 'react';
import { Tooltip } from 'antd';

export default memo(function ToolTip(props) {
    const { title, pNode, content, zIndex = 999, placement = 'bottom' } = props;
    console.log(props);
    return (
        <Tooltip title={title} zIndex={zIndex} placement={placement} mouseEnterDelay={0.5}
            getPopupContainer={() => document.querySelector(pNode)} >
            {content}
        </Tooltip >
    )
})

