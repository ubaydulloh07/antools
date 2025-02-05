import "./browser.css"
import Card from "../card/card"

function Browser() {
    return (
        
        <section className="browser-section">

        <div className="browser">

        <div  className="browser-text">
            <h2>Trusted more than 150+ brand</h2>
        </div>

        <div className="browser-img">
            <img src="./assets/image/browser.png" alt="" />
        </div>

        </div>


        
        <section className="content">

        <div className=" content-text">
            <h1>
            Newcomer Tools
            </h1>
            <p>Wow! see the latest update of the most <br /> recommended tools from reliable designers <br />ss and developers</p>
            <button>Explore more</button>
        </div>


        <div className="cards">

        <div className="cards-1">
        <Card />
        <Card />
        </div>
        
        <div className="cards-1">
        <Card />
        <Card />
        </div>

        </div>




        </section>









        </section>

        











    )
}

export default Browser