import React from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";
import Resume from "../../resume";

function ContactsList(props) {
    return (
        <div className="columns">
            {buildContact(props.Contacts)}
        </div>
    );
}

function buildContact(Contacts) {
    let contactView = [];

    Object.entries(Contacts).forEach(([key, obj ]) => {
        contactView.push(
            <div key={key}>
                <Contact key={key} icon={obj.x_icon} text={obj.text}/>
            </div>
        );
    });
    return contactView;
}

ContactsList.propTypes = {
    Contacts: PropTypes.objectOf(Resume.basics.contacts)
};

export default ContactsList;
