import React from 'react';
import { NavLink } from "react-router-dom";

interface Styles {
    navbar: string;
    navitem: string;
    activeItem: string;
}

interface Link {
    url: string;
    title: string;
}

interface Props {
    styles: Styles;
    links: Link[];
}

function Navigation(props: Props) {
    return (
        <nav className={props.styles.navbar}>
            {props.links.map((link) => (
                <NavLink className={({ isActive }) =>
                    [
                        props.styles.navitem,
                        isActive ? props.styles.activeItem : null,
                    ]
                        .filter(Boolean)
                        .join(" ")
                } to={link.url}>{link.title}</NavLink>
            ))}
        </nav>
    );
}

export default Navigation;
