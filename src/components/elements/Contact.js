import React, {useState} from "react";
import PropTypes from "prop-types";

function Contact(props) {

    const [value, setValue] = useState("Click to view contact");

    const handleClick = () => {
        setValue(props.text);
    };

    return (
        <div className="contact">
            <i className={props.icon}></i>
            {value !== props.text
                ? <span className="contactClick" onClick={handleClick}>{value}</span>
                : <span>{value}</span>
            }
        </div>
    );
}

Contact.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string
};

export default Contact;
