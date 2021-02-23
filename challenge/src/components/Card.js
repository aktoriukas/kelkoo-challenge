import Button from './Button'

import React, { useState } from 'react'

export default function Card(props) {

    const { image, sku, title, description, price } = props.card

    const makeList = (description) => {
        let list = description.split('- ')
        list = list.map(item => {
            if (item) return item
            else return undefined
        })
        return list.filter(Boolean)
    }
    const list = makeList(description)

    return (
        <section className='card'>
            <div className='card-container'>
                <div className='img-container'>
                    <img className='img' src={`./${image}`} alt={title} />
                </div>
                <h3 className='title'>{title}</h3>
                <div className='sku'>{sku}</div>

                <ul className='points'>
                    {list.map(item => (
                        <li className='point' key={item}>{item}</li>
                    ))}
                </ul>

            </div>
            <Button click={() => props.addItem(props.card)} class='add' txt={`Add to Basket £${price}`} />
        </section>
    )
}