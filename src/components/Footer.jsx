import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 bg-deep-black text-center border-t border-dark-grey">
            <p className="text-gray-600 text-sm font-sans">
                &copy; {new Date().getFullYear()} Shall we act? - From Concidence to connection
            </p>
        </footer>
    );
};

export default Footer;
