import React from 'react';

export default function SVG({ iconName }) {

  return(
    <svg className={`icon ${iconName}`}>
      <use
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xlinkHref={`#${iconName}`}
      />
    </svg>
  )
}