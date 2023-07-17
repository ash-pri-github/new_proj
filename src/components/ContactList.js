import React, { Component } from "react";

const ContactList = (props) => {
    console.log(props);
    const renderContactList = props.contacts.map((contact) => {
    return (
        <div className="item">
            <div className="content">
                <div className="header">{contact.name}</div>
                <div>{contact.email}</div>
            </div>
            <i className="trash alternet outline icon"></i>
        </div>
    );
});

    <div className="ui celled list">{renderContactList}</div>
};

export default ContactList;