import React from "react";
import ContactsList from "../elements/ContactsList";
import Resume from "../../resume.json";

function ContactMe() {
    return (
        <section className="section" id="contactMe">
            <div className="container">
                <h1 className="title">Contact me</h1>
                <div className="contacts column has-text-centered">
                    <ContactsList
                        Contacts={Resume.basics.contacts}
                    />
                </div>
            </div>
        </section>
    );
}

export default ContactMe;