import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./footer.module.css";
import PokemonPic from '../assets/pikachu.png';
import ItemsPic from '../assets/pokeball.png';
import LocationPic from '../assets/pointer.png';


const Footer = () => {
    return (
        <footer className={ styles.footer } >
            <Link to="/pokemons" className={ styles.footerLink } >
                <img className={ styles.footerIcon } src={ PokemonPic } alt="Pikachu" />
                Pokemons
            </Link>
            <Link to="/items" onClick={ (e) => e.preventDefault() } className={ styles.footerLink } >
                <img className={ styles.footerIcon } src={ ItemsPic } alt="Pokeball" />
                Items
            </Link>
            <Link to="/location" onClick={ (e) => e.preventDefault() } className={ styles.footerLink } >
                <img className={ styles.footerIcon } src={ LocationPic } alt="Location" />
                Map
            </Link>
        </footer>
    );
};

export default Footer;