import React, { useState } from 'react'
import "./style.css"

function Dark() {

  const [mode, setMode] = useState(false)

  const showDarkMode = () => {
    setMode(prevMode => !prevMode)
  }



  return (
    <div className={mode ? 'light' : 'dark'}>
      <button onClick={showDarkMode}>{mode ? 'Light mode' : 'Dark Mode'}</button>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium modi tempore excepturi ad nesciunt quasi optio hic quas quis soluta quam aperiam perferendis fugiat harum consequuntur repellendus dicta laudantium aliquam, quos a magnam. Minima eveniet iste qui ex praesentium, cumque at tenetur optio iure officia dolore perferendis, iusto ab amet quo veniam eligendi natus modi consectetur assumenda nemo expedita quisquam numquam mollitia? Ex obcaecati amet modi nesciunt. Nam accusamus, et autem dolor quas sunt. Reiciendis, ab! Porro, laudantium in suscipit saepe aliquid dolorem illum impedit. Magnam non voluptatum tempora molestias atque officiis iure nemo, aut possimus distinctio, provident consequuntur hic reprehenderit aperiam, qui labore totam quibusdam doloribus reiciendis ipsa eos sequi! Nobis magni libero perferendis. Ea itaque voluptatum tempore recusandae impedit voluptatibus asperiores, dolore, eveniet dolorum corporis quas similique quo suscipit quia officiis dicta quod ipsa. Dicta, fugiat! Veniam alias, repudiandae aut ut tempore, sequi inventore harum, beatae molestias maiores fuga aliquam accusantium error provident eos rerum porro laudantium hic neque nesciunt quas culpa repellendus saepe. Nostrum dignissimos veniam, illo suscipit ipsum libero temporibus nihil repudiandae dolor. Magni officiis ea nisi, saepe excepturi consectetur mollitia. Unde inventore, natus quae nam sed ipsa. At laborum mollitia sunt eaque! Quo, quisquam dolorum!</p>
    </div>
  )
}

export default Dark

// .light{
//   background-color: white;
//   color: black;
//   width: 100%;
//   height: 100vh;
//   transition: 0.3s ease;
// }
// .dark{
//   background-color: black;
//   color: white;
//   width: 100%;
//   height: 100vh;
//   transition: 0.3s ease;
// }
