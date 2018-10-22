import React, { Component } from 'react'
import bemCx from 'bem-modifiers'
// import './style.sass'

/**
 * A classic dropdown menu.
 * @render react
 * @name Dropdown
 * @property {array} links - Array of objects, that has two keys with sting values - label and url.
 * @property {boolean} overlay - Renders faded overlay that closes dropdown on click anywhere around.
 * @example
 *  <Dropdown overlay links={[
 *    {
 *      label: 'Profile',
 *      url: '#',
 *    },
 *    {
 *      label: 'Settings',
 *      url: '#',
 *    },
 *    {
 *      label: 'Log out',
 *      url: '#',
 *    },
 *  ]}>Toggle dropdown</Dropdown>
 */
class Dropdown extends Component {
  state ={
    isOpen: false
  }
  render() {
    const { links, children, overlay } = this.props
    const { isOpen } = this.state
    return(
      <div className={bemCx('dropdown', [], {'is-open': isOpen})}>
        <span
          className="dropdown__label"
          onClick={() => this.setState({isOpen: !isOpen})}
        >{children}</span>
        <div className="dropdown__inner">
          <nav className="dropdown__nav">
            {links.map((link, index) => (
              <a href={link.url} className="dropdown__link" key={index}>{link.label}</a>
            ))}
          </nav>
        </div>
        { (overlay && isOpen) &&
          <div className="dropdown__overlay" onClick={() => this.setState({isOpen: false})}/>
        }
      </div>
    )
  }
}

Dropdown.defaultProps = {
  overlay: false,
}

export default Dropdown