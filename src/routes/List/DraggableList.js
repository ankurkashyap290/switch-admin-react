// import React, { Component } from 'react';
// import { List, Card } from 'antd';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';

// const getItems = (count, offset = 0) =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `item-${k + offset}`,
//     content: `item ${k + offset}`,
//   }));

// class DraggableList extends Component {
//   state = {
//     items: getItems(10),
//     selected: getItems(5, 10),
//   };

//   onDragEnd = result => {
//     console.log(result);
//     this.setState({ items: result });
//   };

//   render() {
//     return (
//       <div>
//         <PageHeaderLayout title="Draggable List" />
//         <DragDropContext onDragEnd={this.onDragEnd}>
//           <Droppable droppableId="droppable">
//             <Draggable DraggableId="draggable">hi</Draggable>
//           </Droppable>
//         </DragDropContext>
//       </div>
//     );
//   }
// }

// export default DraggableList;

import React, { Component } from 'react';
import PageHeaderLayout from '../../layouts/pageLayouts/PageHeaderLayout';
import BaseTableResponsive from '../../components/ResponsiveBaseTable/index';

class DraggableList extends Component {
  render() {
    return (
      <PageHeaderLayout title="Draggable List">
        <BaseTableResponsive />
      </PageHeaderLayout>
    );
  }
}
export default DraggableList;
