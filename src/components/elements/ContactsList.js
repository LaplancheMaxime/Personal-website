import React from "react";
import Contact from "./Contact";

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

export default ContactsList;
