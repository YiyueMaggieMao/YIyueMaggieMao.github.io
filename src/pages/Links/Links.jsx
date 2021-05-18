import React from 'react';
import './Links.css';
// import jsvsts from '../../img/js-vs-ts.jpeg';

const Links = () => {
    return (
        <div>
            <div className="page-header page-header-tech">
                <span className="page-title">Links</span>
            </div>
            <div className="page-content">
                <div className="link-content">
                    <h3>"TypeScript vs. JavaScript: Should You Migrate Your Project to TypeScript?" by Jared Nance</h3>
                    <a href="https://stackify.com/typescript-vs-javascript-migrate/">View original article here</a> <br/>
                    {/* <img className="link-image" src={jsvsts}/> */}
                    <p>I love this article's in-depth analysis about the advantages and disadvantages of using JavaScript 
                    and TypeScript in developing a modern-day web application. As a programmer who primarily programs in
                    JavaScript, this article helped me open my eyes to a lot of its disadvantages that can be fixed using 
                    TypeScript, like the vagueness in types and potnetial difficulty in collaboration. After reading this
                    article, I understood that some of my previous projects would have a significantly improved run time
                    as well as overall performance if programmed in TypeScript. Over the winter, I have followed a lot of
                    TypeScript tutorials online to learn this language, and it has been truly eye-opening. I am very grateful
                    for all that this article has helped me learn
                    </p>
                </div>
                <div className="link-content">
                    <h3>"Understanding JSFuck" by Baptiste Vannesson</h3>
                    <a href="https://badacadabra.github.io/Understanding-JSFuck/">View original article here</a> <br/>
                    <p> After reading the previous article about some flaws within JavaScript, I began looking for examples
                        of unexpected JavaScript behaviors caused by unintentional type casting. This website introduced me 
                        to JSFuck, an esoteric subset of JavaScript. Through the thorough explanation of JSFuck basics and the
                        excellent examples, I came to acquire much deeper insight about JavaScript type casting, and even better,
                        writing fully functional JavaScript programs using just six characters. I even ended up hosting
                        a workshop that introduced JSFuck to college students like me in May 2021 - it was a fun time of learning
                        and exploration!
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Links;