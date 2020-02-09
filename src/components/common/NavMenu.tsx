import React from 'react';
import { HddOutlined, MenuOutlined, PlusOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Dropdown, Menu } from 'antd';
import { usePrefixedTranslation } from 'hooks';
import { useStoreActions } from 'store';
import { NETWORK_NEW, NODES_VIEW } from 'components/routing';

const Styled = {
  Menu: styled.div`
    float: right;
  `,
  MenuIcon: styled(MenuOutlined)`
    font-size: 1.2rem;
    color: #fff;
  `,
};

const NavMenu: React.FC = () => {
  const { l } = usePrefixedTranslation('cmps.common.NavMenu');
  const { navigateTo } = useStoreActions(s => s.app);
  const menu = (
    <Menu theme="dark">
      <Menu.Item onClick={() => navigateTo(NETWORK_NEW)}>
        <PlusOutlined />
        {l('createNetwork')}
      </Menu.Item>
      <Menu.Item onClick={() => navigateTo(NODES_VIEW)}>
        <HddOutlined />
        {l('manageNodes')}
      </Menu.Item>
    </Menu>
  );
  return (
    <Styled.Menu>
      <Dropdown overlay={menu} trigger={['click']}>
        <Styled.MenuIcon />
      </Dropdown>
    </Styled.Menu>
  );
};

export default NavMenu;
