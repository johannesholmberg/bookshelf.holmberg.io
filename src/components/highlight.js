import React, { Component } from 'react'
import jump from 'jump.js'

import Icon from '../components/icon'

export default class Highlight extends Component {
  componentDidMount() {
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '')
      if (document.getElementById(hash)) {
        this.activateHighlight(hash)
      }
    }
  }

  highlightSwitch(e) {
    const targetLink = e.currentTarget.href.toString()

    if (targetLink && targetLink.indexOf('#') > -1) {
      const hash = targetLink.substr(targetLink.indexOf('#') + 1)
      const highlight = document.getElementById(hash)
      if (highlight.className.indexOf('highlight--active') === -1) {
        this.removeHighlight()
        this.activateHighlight(hash)
        e.preventDefault()
        this.updateURL(hash)
      }
    }
  }

  activateHighlight(hash) {
    const highlight = document.getElementById(hash)
    highlight.className += ' highlight--active'
    highlight.focus()
  }

  updateURL(hash) {
    const hashIndex = window.location.href.indexOf('#')
    let hashlessURL
    if (hashIndex === -1) {
      hashlessURL = window.location.href
    } else {
      hashlessURL = window.location.href.slice(0, hashIndex)
    }

    jump(`#${hash}`, {
      duration: 500,
    })

    history.replaceState(null, null, hashlessURL + '#' + hash)
  }

  clearHighlight() {
    this.removeHighlight()
    const hashIndex = window.location.href.indexOf('#')
    const hashlessURL = window.location.href.slice(0, hashIndex)
    history.replaceState(null, null, hashlessURL)
  }

  removeHighlight() {
    const highlighted = document.querySelector('.highlight--active')
    if (highlighted !== null) {
      highlighted.classList.remove('highlight--active')
    }
  }

  render() {
    const { quote } = this.props
    let markerType, markerText
    if (quote.loc === null) {
      markerText = 'Page'
      markerType = quote.page
    } else {
      markerText = 'Location'
      markerType = quote.loc
    }
    return (
      <blockquote
        id={`${markerText.toLowerCase()}-${markerType}`}
        className="highlight"
      >
        <p className="highlight__text">
          {quote.quote}
          <button
            onClick={e => {
              this.clearHighlight(e)
            }}
            className="highlight__clear-button"
          >
            <Icon id="close" />
          </button>
        </p>
        <a
          onClick={e => {
            this.highlightSwitch(e)
          }}
          href={`#${markerText.toLowerCase()}-${markerType}`}
          className="highlight__meta"
        >
          <Icon id="link" />
          {markerText} {markerType}
        </a>
      </blockquote>
    )
  }
}
