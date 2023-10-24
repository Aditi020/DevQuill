import React from 'react';
import Author from "./Assets/Hero.png";

function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="left">
                    <h1 className="h1">
                        Hi There!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                            👋
                        </span>
                        <br />I'm <b>Aditi&nbsp;Kumar</b>

                        {/* Web Developer */}
                    </h1>
                    <p className="h3">

                        A web developer and a passionate DevOps explorer. <br />
                        Join me on my blog journey as we delve into the world of coding and tech adventures. 😎🚀
                    </p>
                    <div className="btn-group">
                        <a href="www.ccool" className="btn btn-primary">Contact Me</a>
                        <a href="www.ccool" className="btn btn-secondary">About Me</a>
                    </div>
                </div>
                <div className="right">
                    <div className="pattern-bg"></div>
                    <div className="img-box">
                        <img src={Author} alt="Julia Walker" className="hero-img" />
                        {/* <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
