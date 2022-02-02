import './style.sass'

import Icon from '../Icon'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

const AccordionContext = React.createContext([null, () => {}])


const Accordion = ({ children, boxed }) => {
  const [openedItem, setOpenedItem] = React.useState(false)

  return (
    <AccordionContext.Provider value={[openedItem, setOpenedItem]}>
      <div className={classNames('accordion', {
        'accordion--boxed': boxed,
      })}>{children}</div>
    </AccordionContext.Provider>
  )
}

Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  boxed: PropTypes.bool,
}

export default Accordion


export const AccordionItem = ({
  title,
  className,
  children,
}) => {
  const [openedItem, setOpenedItem] = React.useContext(AccordionContext)
  const index = title // Use title as unique index.
  const isOpen = openedItem === index

  const handleClick = () => {
    setOpenedItem(prevState => prevState === index ? false : index)
  }

  return (
    <div className={classNames(
      'accordion__item',
      { 'accordion__item--expanded': isOpen },
      className,
    )}>
      <div className='accordion__title' onClick={handleClick}>
        <span>{title}</span> {isOpen && <Icon className='accordion__icon' type='X' />}
      </div>
      {isOpen &&
        <div className='accordion__content'>{children}</div>
      }
    </div>
  )
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
}
