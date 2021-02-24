import Button from './Button'

import React, { useState } from 'react'

export default function Card(props) {

    const { image, sku, title, description, price } = props.card

    const [buttonTxt, setButtonTxt] = useState(`Add to Basket £${price}`)
    const [buttonClass, setButtonClass] = useState('')

    // split txt
    const makeList = (description) => {
        let list = description.split('- ')
        list = list.map(item => {
            if (item) return item
            else return undefined
        })
        return list.filter(Boolean)
    }

    const handleClick = card => {
        props.addItem(card)

        // added animation
        setButtonTxt('Item added')
        setButtonClass('added')

        setTimeout(() => {
            // reset button
            setButtonTxt(`Add to Basket £${price}`)
            setButtonClass('')
        }, 3000)
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

            <Button
                click={() => handleClick(props.card)}
                class={`bottom ${buttonClass}`}
                txt={buttonTxt} />

        </section>
    )
}