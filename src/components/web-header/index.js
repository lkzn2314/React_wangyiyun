import React, { memo } from 'react';
import { NavLink } from "react-router-dom";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { headerLinks } from '@/network/local-data';

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'


export default memo(function WebHeader() {

  const showListItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="icon sprite_01" />
        </NavLink>
      )
    } else {
      return (
        <a href={item.link}>{item.title}</a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div className="select-item" key={item.title}>
                    {showListItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>

        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider" />
    </HeaderWrapper>
  )
})
