import React from 'react'
import PropTypes from 'prop-types'


const Table = ({ labels, data }) =>
  <div className='table-responsive'>
    <table>
      <thead>
        <tr>
          {labels.map((label, index) => <th key={index}>{label.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {data ? data.map((row, index) =>
          <tr key={index}>
            {labels.map((label, index) =>
              <td key={index}>{row[label.field]}</td>
            )}
          </tr>
        ) : null}
      </tbody>
    </table>
  </div>


Table.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.node,
    field: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
}

export default Table
