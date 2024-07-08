import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Sarah L</h3>
                            <span>TinDog, USA</span>
                        </div>
                    </div>
                    <p>Tindog helped me find the perfect playmate for my Labrador, Max! We've met so many wonderful dog owners and their pets. It's a fantastic way to connect with the local dog-loving community!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Mark D</h3>
                            <span>TinDog, USA</span>
                        </div>
                    </div>
                    <p>I found my adorable French Bulldog, Bella, through Tindog. The adoption process was seamless, and the support from other users has been incredible. Thank you, Tindog!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Emily R</h3>
                            <span>TinDog, USA</span>
                        </div>
                    </div>
                    <p>Thanks to Tindog, my German Shepherd, Rocky, has made so many new friends. The app is easy to use and has brought so much joy into our lives. Highly recommend it to all dog owners!</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3> Jason M</h3>
                            <span>TinDog, USA</span>
                        </div>
                    </div>
                    <p>Tindog is a game-changer! I was able to find a great dog-sitter for my Golden Retriever, Daisy, and we've also joined a few local dog meet-ups. It's the perfect app for any dog lover!</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
