import './css/Footer.css';

function Footer() {
    /*return (
        <div>
            <p>This is the end :(.</p>
            <p>Feel free to contact me at </p>
            {/*arrow to the top*}
        </div>
    );*/
    return (
        <div id="footer">
            <div class='footer-outer' id="footer">
                    <div class='footer-contact'>
                        <a class='footer-contact-text column1'>
                            (631)-353-8891
                        </a>
                        <a class='footer-contact-text column2'>
                            alexandernumber2@gmail.com
                        </a>
                        <a class='footer-contact-text linked-in column3' href="https://www.linkedin.com/in/alexander-liu-al/" target='_blank'>
                            www.linkedin.com/in/alexander-liu-al/
                        </a>
                    </div>
            </div>
        </div>
    );
}

export default Footer;