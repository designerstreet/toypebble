import './privacyPolicy.css';

function PrivacyPolicy() {
    return(
        <div className="container mt-5">
            <h1><strong>Privacy Policy</strong></h1>
            <h4 className="mt-5">Last Updated on June 10, 2024</h4>
            <p className="mt-3">This Privacy Policy outlines how your personal information is collected, used, and shared when you visit or make a purchase from the ToyPebble website.</p>
            <h4 className="mt-5"><strong>INFORMATION WE COLLECT</strong></h4>
            <p className="mt-3">When you visit the site, we automatically collect certain information about your device. This includes details about your web browser, IP address, time zone, and some cookies installed on your device. Additionally, as you browse the site, we gather information about the individual web pages or products you view, the websites or search terms that referred you to the site, and information on how you interact with the site. We refer to this automatically collected information as "Device Information."
            We collect Device Information using the following technologies:</p>
            <ul>
                <li><span style={{fontWeight: '600'}}>Log files:</span> These track actions occurring on the site and collect data such as your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
                <li><span style={{fontWeight: '600'}}>Web beacons, tags, and pixels:</span> These are electronic files used to record information about how you browse the site.<br></br>
When you make a purchase or attempt to make a purchase through the site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number. We refer to this information as "Order Information." <br></br>
When we mention "Personal Information" in this Privacy Policy, we are referring to both Device Information and Order Information.</li>
            
            </ul>
            <h4 className="mt-5"><strong>HOW DO WE USE YOUR PERSONAL INFORMATION?</strong></h4>
            <p className="mt-3">We use the Order Information that we collect generally to fulfill any orders placed through the site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:</p>
            <ul>
                <li>Communicate with you</li>
                <li>Screen our orders for potential risk or fraud</li>
            </ul>

            <p className="mt-3">We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address) and more generally to improve and optimize our site (for example, by generating analytics about how our customers browse and interact with the site).</p>

            <h4 className="mt-5"><strong>SHARING YOUR PERSONAL INFORMATION</strong></h4>
            <p className="mt-3">We share your Personal Information with third parties to help us use your Personal Information as described above. For example, we may share the information for tracking payments with our payment partners. Additionally, we may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant, or other lawful requests for information we receive, or to otherwise protect our rights.</p>
            <h4 className="mt-5"><strong>DO NOT TRACK</strong></h4>
            <p className="mt-3"> Please note that we do not alter our site's data collection and use practices when we see a Do Not Track signal from your browser.</p>
            <h4 className="mt-5"><strong>DATA RETENTION</strong></h4>
            <p className="mt-3">When you place an order through the site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>
            <h4 className="mt-5"><strong>MINORS</strong></h4>
            <p  className="mt-3">The site is not intended for individuals under the age of 13.</p>
            <h4 className="mt-5"><strong>CHANGES</strong></h4>
            <p className="mt-3">We may update this privacy policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons.</p>
            <h4 className="mt-5"><strong>CONTACT US</strong></h4>
            <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at <a href='maito:support@toypebble.com'>support@toypebble.com</a>.</p>
        
        </div>
    )
};

export default PrivacyPolicy;