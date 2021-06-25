import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inptValue, setInptValue] = useState('')

    const handleInputChange = (e) => {
        setInptValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inptValue.trim().length > 2) setCategories(categories => [inptValue,...categories]);
        setInptValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <input
                type="text"
                value={inptValue}
                onChange={handleInputChange}
            />
        </form>
    )
}



AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


