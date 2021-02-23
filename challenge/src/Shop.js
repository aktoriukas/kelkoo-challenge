import React, { useState } from 'react'

import data from './data/products.json'
import Card from './components/Card'
import Button from './components/Button'
import Basket from './components/Basket'

export default function Shop(props) {

    const [basket, setBasket] = useState(false)
    const [itemsCount, setItemsCount] = useState(0)
    const [basketItems, setBasketItems] = useState([])

    let cards = data.map(card => (
        <Card key={card.productId} card={card} />
    ))
    console.log(data)

    return (
        <>
            {basket ? <Basket items={basketItems} /> : ''}

            <header className='header'>
                <Button class='basket' click={() => setBasket(true)} txt={`show basket (${itemsCount})`} />
            </header>

            <div className='products grid'>
                {cards}
            </div>
        </>
    )
}
