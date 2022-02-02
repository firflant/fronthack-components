import './style.sass'

import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

const Breadcrumb = ({ items, className }) => {
  return (
    <div className={classNames('breadcrumb', className)}>
      <div className='breadcrumb_container'>
        {items.map((item, index) =>
          <React.Fragment key={index}>
            {index > 0 && ' > '}
            {item.path
              ? <a
                href={item.path}
                className='breadcrumb__item'
              >{item.name}</a>
              : <span className='breadcrumb__item'>{item.name}</span>
            }
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
  })),
}

Breadcrumb.defaultProps = {
  items: [],
}

export default Breadcrumb
