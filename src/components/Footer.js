import React from 'react';

const currentYear = new Date().getFullYear();


export default function Footer() {
    return (
        <footer>
            <p>{String.fromCharCode(169)} {currentYear} 🕯 Lusi</p>
        </footer>
    )
}