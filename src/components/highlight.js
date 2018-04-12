import React from 'react'

const Highlight = props => {
  return (
    <blockquote id={`location-${props.quote.loc}`} className="highlight">
      {props.quote.quote}
      <a href={`#location-${props.quote.loc}`} className="highlight__meta">
        Location {props.quote.loc}
      </a>
    </blockquote>
  )
}

export default Highlight
