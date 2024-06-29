import { Link } from "react-router-dom";


function Footer() {
    return(
        <div className="container-fluid pt-5">
            <p>
                <Link to="/privacyPolicy" style={{textDecoration: 'none', color: '#000'}}>
                Privacy Policy
                </Link>
            </p>
            <p>
                <Link to="/termsCondition" style={{textDecoration: 'none', color: '#000'}}>
                Terms And Conditions
                </Link>
            </p>
        </div>
    )
};

export default Footer;