import "./carusel.css";

function Carusel() {
  return (


    <section>
    <div className="carusel">
      <svg
        width="16"
        height="28"
        viewBox="0 0 16 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 26L2 14L14 2"
          stroke="white"
          stroke-opacity="0.28"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <img src="./assets/image/person.png" alt="" />

      <p>
        Incididunt cillum do sint sint enim ullamco id deserunt mollit <br />
        qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. <br /> Do
        nulla velit labore occaecat do deserunt Lorem magna <br /> officia
        incididunt consectetur amet. Sunt consectetur veniam <br /> minim ex
        commodo sint non. Occaecat aute officia excepteur <br /> non laboris id
        qui ad.
      </p>

      <svg
        width="16"
        height="28"
        viewBox="0 0 16 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 26L14 14L2 2"
          stroke="#FF6E30"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>


    <div className="span-block">
        <span className="active"></span>
        <span className="span"></span>
        <span className="active"></span>
    </div>



    <div className="contributor">
        <h2>Become a contributor?</h2>
        <p>Join us and get tips & tricks to become a great <br /> Designer and Developer</p>

    <form>
        <input type="text"placeholder="Enter your email..." />
        <button>Join Us</button>
    </form>
        
    </div>







    </section>




  );
}

export default Carusel;
