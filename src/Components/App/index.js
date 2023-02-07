import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './styles.scss';
import {
  img1,
  img2,
  img3,
  mobileImg1,
  mobileImg2,
  mobileImg3,
  arrowIcon,
  leftArrow,
  rightArrow,
  darkImage,
  lightImage,
  openMenu,
  closeMenu
} from '../../images';

function App() {

  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const switchIndex = (e) => {
    if (e.currentTarget.id === "previous-image") {
      descriptions[index - 1] ? setIndex(index - 1) : setIndex(2);
    }
    else {
      descriptions[index + 1] ? setIndex(index + 1) : setIndex(0);
    }
  };

  const openOrCloseMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Checks the width with react-responsive
  const isMobile = useMediaQuery({
    query: "(max-width:600px)"
  });

  const images = [
    img1,
    img2,
    img3
  ];

  const mobileImages = [
    mobileImg1,
    mobileImg2,
    mobileImg3
  ];

  const descriptions = [
    {
      "title": "Discover innovative ways to create",
      "desc": "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
      "title":"We are available all across the globe",
      "desc": "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
      "title":"Manufactured with the best materials",
      "desc":"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
  ];

  return (
    <div className="App" >
      <div className={menuOpen ? "hidden-navbar" : "display-none"} >
        <ul>
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
      <img src={menuOpen ? closeMenu : openMenu} alt="Open Menu" className={isMobile ? "open-menu-button" : "display-none"} onClick={() => openOrCloseMenu()} />
      <div className={menuOpen ? "black-filter" : ""}>
        <div className="header-nav">
          <ul className="nav-list">
            <li className={menuOpen ? "display-none" : "home-button"}>room</li>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>
        </div>
        <div>
          <div className="first-row">
            <img src={isMobile ? mobileImages[index] : images[index]} alt="Chairs" className="presentation-image" />
            <section className="presentation-description">
              <h1 className="presentation-title">{descriptions[index].title}</h1>
              <p className="presentation-paragraph">
                {descriptions[index].desc}
              </p>
              <span className="shop-now">
                SHOP NOW
                <img className="arrow-icon" src={arrowIcon} alt="" />
              </span>
              <div className="flex next-image">
                <div className="arrow-container" id="previous-image" onClick={(e) => switchIndex(e)} >
                  <img className="arrow-image" src={leftArrow} alt="" />
                </div>
                <div className="arrow-container" id="next-image" onClick={(e) => switchIndex(e)} >
                  <img className="arrow-image" src={rightArrow} alt="" />
                </div>
              </div>
            </section>
          </div>
          <section className="flex flex-space-between responsive-column">
            <img className="bottom-left-image" src={darkImage} alt="" />
            <div className="bottom-description">
              <h2 className="bottom-description-title">
                About our furniture
              </h2>
              <p className="bottom-description-paragraph">
                Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.
              </p>
            </div>
            <img className="bottom-right-image" src={lightImage} alt="" />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
