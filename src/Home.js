import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src ="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt =""
                />

                <div className="home__row">
                    <Product
                        id="427638124" 
                        title="The Lean Startup by Eric Ries" 
                        price= {29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating ={5}
                    />
                    <Product 
                        id="324987234"
                        title="Kenwood kMix Stand Mixer, 5 Litre Glass Bowl"
                        price={239.95}
                        image="data:image/jpeg;base64,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"
                        rating={3}
                    />
                    
                </div>

                <div className="home__row">
                    <Product 
                        id ="6547235"
                        title="Samsung Fitness Watch LENC532HX (3rd Generation)"
                        price={299.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        rating={4}
                    />
                    <Product 
                        id ="1815732"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa"
                        price={185.95}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        rating={5}
                    />
                    <Product 
                        id ="0246824"
                        title="New Apple Ipad Pro (12.9-inch, Wi-Fi, 128GB)"
                        price={598.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id ="3422157"
                        title="Samsung LC495C5D724FX 49' Curved LED Gaming Monitor"
                        price={1075.95}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={4}
                    />
                    
                </div>


            </div>
        </div>
    )
}

export default Home
