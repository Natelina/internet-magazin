import React from 'react';

function Categories({ items }) {
  console.log(items);
  return (
    <div>

      <div className="categories">
        <ul>
          <li className="active">Все</li>
          {
          items && items.map((el, i) => <li key={`${el}_${i}`}>{el}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default Categories;
