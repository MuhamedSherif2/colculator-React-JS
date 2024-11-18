import React, { useState } from 'react'

function Font() {
    const [font, setFont] = useState(16);
    const increase = () => {
        setFont(font + 5)
    }
    const decrease = () => {
        setFont(font - 5)
    }
    return (

            <div>

                <button onClick={increase}>+</button>

                <p style={{ fontSize: `${font}px` }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ad nihil fugit omnis, eligendi quasi voluptas veniam,
                    tempore nostrum cumque quae praesentium repellat ipsa ut
                    molestiae maxime ipsam quibusdam voluptatum officia.
                </p>

                <button onClick={decrease}>-</button>
          
            </div >
    )
}

export default Font;
