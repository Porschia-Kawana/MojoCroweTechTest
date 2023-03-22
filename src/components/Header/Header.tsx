import React from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from '../../common/Navigation/Navigation';

import HeaderImage from '../../images/header.svg';
import MojoLogo from '../../images/logo.svg';

import styles from './Header.module.scss';

const links = [
    {
        url: '/',
        title: 'Home',
    },
    {
        url: '/course',
        title: 'Course & App',
    },
    {
        url: '/media',
        title: 'Media',
    },
    {
        url: '/merch',
        title: 'Merch',
    },
    {
        url: '/contact',
        title: 'Contact us',
    },
    {
        url: '/account',
        title: 'My account',
    },
]

function Header() {
    const customStyles = {
        navbar: styles.navbar,
        navitem: styles.navitem,
        activeItem: styles.active
    }

    return (
        <header className={styles.header}>
            <div className={styles.navigation}>
                <NavLink className={styles.logo} to="/">
                    <img src={MojoLogo} alt="Mojo Logo" />
                </NavLink>
                <Navigation styles={customStyles} links={links} />
            </div>
            <div className={styles.content}>
                <div>
                    <img src={HeaderImage} alt="Header Image" />
                </div>
                <div>
                    <h1>MOJO IN THE MEDIA</h1>
                    <h3>Articles, videos and podcasts about Mojo</h3>
                </div>
            </div>
        </header>
    );
}

export default Header;
