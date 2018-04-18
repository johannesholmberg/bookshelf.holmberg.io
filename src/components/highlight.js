import React from 'react'

const Highlight = props => {
  return (
    <blockquote id={`location-${props.quote.loc}`} className="highlight">
      <p>{props.quote.quote}</p>
      <a href={`#location-${props.quote.loc}`} className="highlight__meta">
        Location {props.quote.loc}
      </a>
    </blockquote>
  )
}

export default Highlight
