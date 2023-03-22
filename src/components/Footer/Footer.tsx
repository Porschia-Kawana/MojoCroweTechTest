import React from 'react';
import Navigation from '../../common/Navigation/Navigation';
import styles from './Footer.module.scss';

const links = [
    {
        url: '/terms_conditions',
        title: 'Terms & Conditions'
    },
    {
        url: '/privacy',
        title: 'Privacy Policy'
    }
]

function Footer() {
    const customStyle = {
        navbar: styles.navbar,
        navitem: styles.navitem,
        activeItem: ""
    }

    return (
        <footer className={styles.footer}>
            <Navigation styles={customStyle} links={links} />
            <span className={styles.copywrite}>
                © Copyright of Mojo Crowe 2022
            </span>
        </footer>
    );
}

export default Footer;
