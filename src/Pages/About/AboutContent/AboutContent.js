import React from 'react';
import { Container } from 'react-bootstrap';
import './AboutContent.css'

const AboutContent = () => {
    return (
        <Container>
             <div className="courses-intro-text">
                <h2>About <span style={{color:'blue'}}>Us</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="our-journey">
                <h4>Our Journey</h4>
                <hr />
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quod molestias excepturi ab velit voluptate aliquid, minus reprehenderit aliquam iure officiis facere aut dolores sit sint, reiciendis vero necessitatibus ipsam adipisci dolor magni laudantium veniam accusamus. Aspernatur odio natus voluptate hic sit. Rem quaerat quia at corporis maiores veniam voluptatibus commodi cupiditate iusto velit? Libero corrupti dolor et blanditiis vel natus quo. Dicta porro unde quaerat suscipit ullam ex voluptatum earum commodi ipsam tempore delectus, quae dolorem libero similique consequatur ratione laboriosam minima, est assumenda, a expedita? Eos voluptatem dolor provident neque dolorum non asperiores, tempore eligendi voluptate fugit vitae.</p>
            </div>
        </Container>
    );
};

export default AboutContent;