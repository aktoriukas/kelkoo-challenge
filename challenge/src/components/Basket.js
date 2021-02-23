import React, { useState } from 'react'

import Item from './Item'

export default function Basket(props) {

    return (
        <div className='basket'>
            {!props.items.length ?
                <h2>No items in basket</h2>
                :
                props.items.map(item => {
                    <Item item={item} />
                })
            }
        </div>
    )
}
