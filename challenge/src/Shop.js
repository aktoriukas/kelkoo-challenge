// COLOURS ============================
import React, { useState } from 'react'

import data from './data/products.json'
import Card from './components/Card'
import Button from './components/Button'
import Basket from './components/Basket'

import Img from './img/sales.jpg'

export default function Shop(props) {

    const [basket, setBasket] = useState(false)
    const [itemsCount, setItemsCount] = useState(0)
    const [basketItems, setBasketItems] = useState([])

    const addItem = (item) => {
        item.count = item.count ?? 1
        if (item.count === 0) { item.count = 1 }
        setItemsCount(itemsCount + 1)

        //check for dublicates

        for (let i = 0; i < basketItems.length; i++) {
            if (basketItems[i].productId === item.productId) {
                let itemsCopy = [...basketItems]
                itemsCopy[i].count++
                setBasketItems(itemsCopy)
                return
            }
        }
        setBasketItems([...basketItems, item])
    }

    const removeItem = id => {

        //check for dublicates

        for (let i = 0; i < basketItems.length; i++) {
            if (basketItems[i].productId === id) {
                let itemsCopy = [...basketItems]
                itemsCopy[i].count--
                setItemsCount(itemsCount - 1)

                //remove with 0 quantity

                if (itemsCopy[i].count === 0) {
                    setBasketItems(itemsCopy.filter(item => item.productId !== id))
                    return
                }
                setBasketItems(itemsCopy)
                return
            }
        }
    }

    let cards = data.map(card => (
        <Card addItem={addItem} key={card.productId} card={card} />
    ))

    return (
        <>

            <header className='header'>
                <h1 className='logo'>SHOP</h1>
                <Button
                    class='basket'
                    click={() => setBasket(!basket)}
                    txt={`show basket (${!itemsCount ? 'empty' : itemsCount})`} />

                {basket ?
                    <Basket
                        removeItem={removeItem}
                        setBasket={setBasket}
                        items={basketItems} />
                    :
                    ''
                }
            </header>

            <div className='products grid'>
                {cards}
            </div>
            <div className='background'>
                <img src={Img} alt='background' />
            </div>
        </>
    )
}
