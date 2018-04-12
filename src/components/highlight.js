import React from 'react'

const Highlight = props => {
  return (
    <blockquote id={`location-${props.loc}`} className="c-book-highlight">
      {props.quote}
      <a href={`#location-${props.loc}`} className="c-book-highlight__meta">
        <span className="icon-holder" />
        Location {props.loc}
      </a>
    </blockquote>
  )
}

export default Highlight
