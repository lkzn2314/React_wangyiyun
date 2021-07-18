import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 75px;
	background-color: #242424;
	
  .content {
    display: flex;
		justify-content: space-between;
		height: 70px;
	}
	
	.divider {
		height: 5px;
		background-color: #C20C0C;
	}

`

export const HeaderLeft = styled.div`
  display: flex;
  font-size: 14px;

	.logo {
		display: flex;
		width: 176px;
		height: 69px;
		background-position: 0 0;
		text-indent: -9999px;
	}
  
  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          top: 20px;
          right: -15px;
          content: "";
          width: 27px;
          height: 19px;
          /* js中引入图片需要 require */
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -190px 0;
        }
      }

      &:hover a, 
      .active {
        background: #000;
        color: #fff;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        left: 50%;
        bottom: -1px;
        display: inline-block;
        width: 12px;
        height: 7px;
        transform: translateX(-50%);
        background-position: -226px 0;
      }
    }
  }


`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 18px;
    margin: 0 16px;
    cursor: pointer;
  }

  .login {
    width: 45px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
  }

`

