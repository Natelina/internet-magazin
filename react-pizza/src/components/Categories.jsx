import React, { useState } from 'react';

function Categories({ items, onClickItem }) {
  const [activItem, setActivItem] = useState(null);
  // console.log(items);
  const onSelectIteem = (index) => {
    setActivItem(index);
  };
  return (
    <div>

      <div className="categories">
        <ul>
          <li className={activItem === null ? "active" : ''}><div onClick={() => onSelectIteem(null)}>Все</div></li>
          {
                items && items.map((el, i) => (
                  <li
                    className={activItem === i ? "active" : ''}
                    key={`${el}_${i}`}
                  >
                    <div
                      onClick={() => onSelectIteem(i)}
                    >
                      {el}
                    </div>

                  </li>
                ))
                }
        </ul>
      </div>
    </div>
  );
}

export default Categories;

// class Categories extends React.Component {
//   constructor(state) {
//     super();
//     this.state = {
//       activItem: 3,
//     };
//   }

//   onSelectIteem = (i) => {
//     this.setState({
//       activItem: i,
//     });
//   };

//   render() {
//     const { items, onClickItem } = this.props;
//     return (
//       <div>

//         <div className="categories">
//           <ul>
//             <li>Все</li>
//             {
//                 items && items.map((el, i) => (
//                   <li
//                     className={this.state.activItem === i ? "active" : ''}
//                     key={`${el}_${i}`}
//                   >
//                     <div
//                       onClick={() => this.onSelectIteem(i)}
//                     >
//                       {el}
//                     </div>

//                   </li>
//                 ))
//                 }
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
