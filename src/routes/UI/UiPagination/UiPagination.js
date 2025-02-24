import React from 'react';
import { Tabs, Pagination } from 'antd';
import ComponentDemoLayout from '../../../layouts/pageLayouts/ComponentDemoLayout';
import UiBoxC from '../UiBoxCGlobal/UiBoxCGlobal';
import PaginationChanger from './PaginationChanger';
import PaginationJumper from './PaginationJumper';
import PaginationMiniSize from './PaginationMiniSize';
import PaginationControlled from './PaginationControlled';
import PaginationPrevAndNext from './PaginationPrevAndNext';

const TabPane = Tabs.TabPane;

class UiPagination extends React.Component {
  render() {
    const mode = 'left'; // left / top
    return (
      <ComponentDemoLayout title="<Pagination/>">
        <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 1220 }}>
          <TabPane tab="Basic" key="1">
            <UiPaginationBasic />
          </TabPane>
          <TabPane tab="More" key="2">
            <UiPaginationMore />
          </TabPane>
          <TabPane tab="Changer" key="3">
            <UiPaginationChanger />
          </TabPane>
          <TabPane tab="Jumper" key="4">
            <UiPaginationJumper />
          </TabPane>
          <TabPane tab="Mini Size" key="5">
            <UiPaginationMiniSize />
          </TabPane>
          <TabPane tab="Simple Mode" key="6">
            <UiPaginationSimpleMode />
          </TabPane>
          <TabPane tab="Controlled" key="7">
            <UiPaginationControlled />
          </TabPane>
          <TabPane tab="Total Number" key="8">
            <UiPaginationTotalNumber />
          </TabPane>
          <TabPane tab="Prev and Next" key="9">
            <UiPaginationPrevAndNext />
          </TabPane>
        </Tabs>
      </ComponentDemoLayout>
    );
  }
}

export default UiPagination;

const PaginationBasic = () => {
  return <Pagination defaultCurrent={1} total={50} />;
};

const UiPaginationBasic = UiBoxC(
  'Basic',
  `Basic Pagination.
            `,
  PaginationBasic
);
const PaginationMore = () => {
  return <Pagination defaultCurrent={6} total={500} />;
};

const UiPaginationMore = UiBoxC(
  'More',
  `More Pages.
              `,
  PaginationMore
);

const UiPaginationChanger = UiBoxC(
  'Changer',
  `Change pageSize.
                `,
  PaginationChanger
);

const UiPaginationJumper = UiBoxC(
  'Jumper',
  `Jump to page directly.
                  `,
  PaginationJumper
);

const UiPaginationMiniSize = UiBoxC(
  'Mini Size',
  `Mini Size Pagination.
                    `,
  PaginationMiniSize
);

const PaginationSimpleMode = () => {
  return <Pagination simple defaultCurrent={2} total={50} />;
};

const UiPaginationSimpleMode = UiBoxC(
  'Simple Mode',
  `Simple Mode.
                      `,
  PaginationSimpleMode
);

const UiPaginationControlled = UiBoxC(
  'Controlled',
  `Controlled page number.
                        `,
  PaginationControlled
);
const PaginationTotalNumber = () => {
  return (
    <div>
      <Pagination
        total={85}
        showTotal={total => `Total ${total} items`}
        pageSize={20}
        defaultCurrent={1}
      />
      <br />
      <Pagination
        total={85}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        pageSize={20}
        defaultCurrent={1}
      />
    </div>
  );
};
const UiPaginationTotalNumber = UiBoxC(
  'Total Number',
  `You can show the total number of data by setting showTotal.
                          `,
  PaginationTotalNumber
);

const UiPaginationPrevAndNext = UiBoxC(
  'Prev and Next',
  `Use text link for prev and next button.
                            `,
  PaginationPrevAndNext
);
