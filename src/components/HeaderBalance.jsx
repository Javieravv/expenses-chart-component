import { useState } from "react"

export const HeaderBalance = () => {
    const [myBalance, setmyBalance] = useState(Math.random() * 5000)
    return (
      <header
        className="header-balance"
      >
          <article className="inf-balance">
              <p>My balance</p>
              <h3>${myBalance.toFixed(2)}</h3>
          </article>
          <article>
            <div className="circle-white"></div> 
            <div className="circle-black"></div> 
          </article>
      </header>
    )
}
