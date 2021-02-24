import React from 'react'
import Button from './Button'

export default function Item(props) {

    const { title, price, productId, count } = props.item

    return (
        <section className='item grid'>

            <h4 className='name'>{title}</h4>

            <Button
                class='remove'
                txt='remove'
                click={() => props.removeItem(productId)} />

            <div className='count'>x{count}</div>

            <div className='price'>{(Math.round((price * count) * 100) / 100).toFixed(2)}</div>
        </section>
    )
}
