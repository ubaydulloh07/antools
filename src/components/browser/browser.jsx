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
        <Card 
        title="Zeplin" 
        price='Free & Paid'
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
        icon="./assets/image/zzp.png"
        />

        <Card
        title="Toolbox"
        price="Free"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
        icon="./assets/image/ppxx.png" />

        </div>
        
        <div className="cards-1">
        <Card  
         title="PHPStorm"
         price="Free"
         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
         icon="./assets/image/php.png"  />

        <Card
        title="Procreate"
        price="Paid"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
        icon="./assets/image/ddll.png" />


        </div>

        </div>




        </section>









        </section>

        











    )
}

export default Browser