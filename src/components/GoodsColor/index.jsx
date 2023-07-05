import React from 'react'
import PropTypes from 'prop-types'

const GoodsColor = ( {color} ) => {
  return (
    <i className="bx bxs-circle {color}" />
  )
}

GoodsColor.PropTypes = {
    color: PropTypes.string
}

export default GoodsColor