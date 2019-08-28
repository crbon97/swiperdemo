import React, { Component } from 'react';
import img4 from "../src/images/img4.jpg";
import img2 from "../src/images/img2.jpg";
import img3 from "../src/images/img3.jpg";
import Swiper from "swiper";
class App extends Component {
  componentDidMount() {
    this.swiper();
  }
  swiper = () => {
    new Swiper(".swiper-container", {
      // slidesPerView: 4,
      // spaceBetween: 30,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev"
      // },
      // speed: 1500,
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      //   hide: false
      // },
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2,
      spaceBetween: -100,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows : true,
      },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      }
    });
  }
  render() {
  return (
    <div className="App">
 <div class="swiper-container"  style={{width:"500px",height:"400px",padding:"0px 24px"}}>
    <div class="swiper-wrapper" >
        <div class="swiper-slide"><img src={img4} style={{width:"100%",height:"100%",borderRadius:"15px"}}/></div>
        <div class="swiper-slide"><img src={img2} style={{width:"100%",height:"100%",borderRadius:"15px"}}/></div>
        <div class="swiper-slide"><img src={img3} style={{width:"100%",height:"100%",borderRadius:"15px"}}/></div>
        <div class="swiper-slide"><img src={img3} style={{width:"100%",height:"100%",borderRadius:"15px"}}/></div>
        <div class="swiper-slide"><img src={img3} style={{width:"100%",height:"100%",borderRadius:"15px"}}/></div>
        <div class="swiper-slide"><img src={img3} style={{width:"100%",height:"100%",borderRadius:"15px"}}/></div>
        <div class="swiper-slide"><img src={img3} style={{width:"100%",height:"100%",borderRadius:"15px"}}/></div>
        <div class="swiper-slide"><img src={img3} style={{width:"100%",height:"100%",borderRadius:"15px"}}/></div>
    </div>
    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

</div>
    </div>
      );
    }
  };
export default App;
