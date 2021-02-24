import React, { useState, useEffect } from 'react'

import Item from './Item'

export default function Basket(props) {

    const [total, setTotal] = useState(0)

    const { items } = props

    const calculateTotal = () => {
        let total = 0
        if (items.length) {
            items.forEach(item => {
                total += (item.price * item.count)
            });
        }
        setTotal((Math.round(total * 100) / 100).toFixed(2))
    }

    useEffect(() => {
        calculateTotal()
    })


    return (
        <div id='basket'>

            {!items.length ?

                <h2 className='title'>Your shop basket is empty.</h2>

                :

                <>
                    <h2 className='title'>Your Items:</h2>

                    {items.map(item => (

                        <Item
                            key={item.productId}
                            item={item}
                            removeItem={props.removeItem} />

                    ))}
                </>
            }
            <div className='total'>

                Total:
                <span className='sum price'>{total}</span>

            </div>

            <span onClick={() => props.setBasket(false)} className='x'>✖</span>
        </div>
    )
}
