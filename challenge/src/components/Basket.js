import React, { useState } from 'react'

export default function Basket(props) {

    const [emptyBasket, setEmptyBasket] = useState(true)

    if (props.items === undefined || props.items.length === 0) {
        console.log('array is empty')
    } else {
        console.log('array is not empty')
    }
    return (
        <div className='basket'>
            {emptyBasket ?
                'Basket is empty'
                :
                ''
            }
        </div>
    )
}
