import { useState } from "react"
import { GraphBarBalance } from "./GraphBarBalance"


export const GraphBalance = () => {
    const [balanceAverage, setbalanceAverage] = useState({
        average: Math.random() * 5000,
        porcent: Math.random() * 100
    })

    return (
        <section className="section-graph-expenses">
            <div className="title-graph">
                <h2>Spending - Last 7 days</h2>
            </div>
            <article className="img-graph-expenses">
                <GraphBarBalance />
            </article>
            <footer className="footer-graph">
                <article>
                    <p>Total this month</p>
                    <h3>${balanceAverage.average.toFixed(2)}</h3>
                </article>
                <article>
                    <p>+{balanceAverage.porcent.toFixed(2)}%</p>
                    <p>from last month</p>
                </article>
            </footer>
        </section>
    )
}
