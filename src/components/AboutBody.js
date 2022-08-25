import React from 'react';
import './About.css';

const AboutBody = () => {
    return (
        <div>
            
        <div className="section">
        <div className="container">
            <div className="title">
                <h1>Our Mission and Vision</h1>
            </div>
            <div className="content">
                <div className="article">
                    <h3>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reprehenderit, eos quis numquam necessitatibus officia id eum dolor quo quaerat cum ipsa quidem, harum totam! Eos dignissimos reiciendis velit ipsum. 
                    </h3>
                    <p>
                    Sed inventore sunt unde autem sint nobis ratione deserunt, ipsa hic omnis repellendus cumque nulla in nihil harum iusto voluptatum nisi? Illo minus nisi quaerat totam nulla sunt fugit aliquam harum eaque rerum magnam atque quod consectetur qui commodi, deleniti dolore ullam. Odio molestiae, eos ipsam quos sint amet modi. Minima fugiat dicta veritatis qui nesciunt nulla laboriosam maxime reprehenderit atque molestiae hic voluptas, vel nam dignissimos rem doloribus exercitationem?
                    </p>
                    <div className="button">
                        <a href="www.google.com" target="_blank">Read More</a>
                    </div>
                </div>
            </div>
            <div className="img-section">
            <img src={require(`./Technology-Consultant.jpg`)} alt="img" />
         </div>
        </div>

        
    </div>


    <div className="section part-2">
        <div className="container container2">
            
            <div className="content2">
                <div className="article">
                    <h3>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error reprehenderit, eos quis numquam necessitatibus officia id eum dolor quo quaerat cum ipsa quidem, harum totam! Eos dignissimos reiciendis velit ipsum. 
                    </h3>
                    <p>
                    Sed inventore sunt unde autem sint nobis ratione deserunt, ipsa hic omnis repellendus cumque nulla in nihil harum iusto voluptatum nisi? Illo minus nisi quaerat totam nulla sunt fugit aliquam harum eaque rerum magnam atque quod consectetur qui commodi, deleniti dolore ullam. Odio molestiae, eos ipsam quos sint amet modi. Minima fugiat dicta veritatis qui nesciunt nulla laboriosam maxime reprehenderit atque molestiae hic voluptas, vel nam dignissimos rem doloribus exercitationem?
                    </p>
                    <div className="button">
                        <a href="www.google.com" target="_blank">Read More</a>
                    </div>
                </div>
            </div>
            <div className="img-section2">
            <img src={require(`./project-planning.jpg`)} alt="img" />
         </div>
        </div>

        
    </div>
        </div>
    );
};

export default AboutBody;