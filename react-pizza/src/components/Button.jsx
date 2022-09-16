import React from 'react';
import classNames from 'classnames';

function Button({ className, outline, children }) {
// console.log(props);

  return (
    <button
      type="button"
      className={classNames('button', className, {
        "button--outline": outline,
      })}
    >
      {children}
    </button>
  );
}

export default Button;

// class Button extends React.Component {

// render() {
//   console.log(this.props.outline);
//   // return <button className={`button ${this.props.outline ? "button--outline":""}`}>{this.props.children}</button>
//   return <button className={classNames('button', {
//     "button--outline": this.props.outline
//   },

//   )}>{this.props.children}</button>
// }

// }
