import './style.sass'

import Icon from '../Icon'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

const HamburgerNav = ({ links, className }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div className={classNames('hamburger-nav', {
      'hamburger-nav--open': isOpen,
    }, className)}>
      <div className='hamburger-nav__trigger' onClick={() => setIsOpen(true)}>
        <div className='hamburger-nav__icon' />
      </div>
      {isOpen &&
        <div className='hamburger-nav__overlay' onClick={() => setIsOpen(false)} />
      }
      <div className='hamburger-nav__wrapper'>
        <nav className='hamburger-nav__menu'>
          {links.map((item, index) => item.url
            ? <a
              href={item.url}
              key={index}
              className='hamburger-nav__link'
            >
              {item.icon &&
                <Icon type={item.icon} className='hamburger-nav__link-icon' />
              }
              {item.label}
            </a>
            : <div
              onClick={() => item.callback()}
              key={index}
              className='nav-vertical__link'
            >
              {item.icon &&
                <Icon type={item.icon} className='hamburger-nav__link-icon' />
              }
              {item.label}
            </div>
          )}
        </nav>
      </div>
    </div>
  )
}

HamburgerNav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    callback: PropTypes.func,
    label: PropTypes.string.isRequired,
  })),
}

export default HamburgerNav
