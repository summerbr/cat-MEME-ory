import React from 'react'
import './style.css';

// export default function Card(
//   { handleClick, id, type, flipped, height, width, disabled, matched }) {
//   return (
//     <div className={`flip-container ${flipped ? 'flipped' : ''}`}
//       style={{
//         width, 
//         height
//       }}
//       onClick={() => disabled ? null : handleClick(id)} 
//       >
//     <div className="flipper"> 
//       <img style={{
//         height, width
//       }}
//       className={flipped ? "front" : "back"} //if matched only show front
//         src={flipped || matched ? `/${type}` : "/graham.jpeg"} 
//         />
//       </div>
//     </div>
//   )
// }

function Card(props) {
  return (
    <div className={`flip-container ${props.clicked ? 'flipped' : ''}`}
      onClick={() => props.handleClick(props.id)}>
        <div className="flipper">
          <img style={{
            height: 100, width: 100
          }}
          className={props.flipped ? "front" : "back"}
            src={props.flipped || props.matched ? "front" : "/images/graham.jpeg"} />
        </div>
      </div>
  )
}

export default Card