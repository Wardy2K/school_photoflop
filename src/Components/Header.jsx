import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return (
        <header id="header">
            <Link to="/" className="links">Accueil</Link>
            <Link to="developpeurs" className="links">Développeurs</Link>
        </header>
    )
}
