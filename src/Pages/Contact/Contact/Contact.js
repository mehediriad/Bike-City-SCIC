import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import ContactContent from '../ContactContent/ContactContent';

const Contact = () => {
    return (
        <div>
            <Header></Header>
           <ContactContent></ContactContent>
           <Footer></Footer> 
        </div>
    );
};

export default Contact;