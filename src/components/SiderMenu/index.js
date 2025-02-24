import 'rc-drawer/assets/index.css';
import React from 'react';
import Drawer from 'rc-drawer';
import SiderMenu from './SiderMenu';

export default props => {
  const { isMobile, collapsed, onCollapse, menuData } = props;

  return menuData.length ? (
    isMobile ? (
      <Drawer
        level={null}
        iconChild={null}
        open={!collapsed}
        handler={false}
        onMaskClick={() => {
          onCollapse(true);
        }}
        width="256px"
      >
        <SiderMenu {...props} collapsed={isMobile ? false : collapsed} />
      </Drawer>
    ) : (
      <SiderMenu {...props} />
    )
  ) : (
    <div>Loading...</div>
  );
};
