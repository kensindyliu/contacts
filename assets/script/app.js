

import { Contact } from './Contact.js';

'user strict'
function onEvent(event, selector, callback){
    return selector.addEventListener(event, callback);
}

function select(selector){
    return document.querySelector(selector);
}

function create(element){
    return document.createElement(element);
}

const btnAdd = select('#btnAdd');
const dvContacts = select('.contacts');
const iptInfo = select('#info');
const dvTips = select('#dvTips');
const amountMsg = select('#amountMsg')
let contacts = [];
iptInfo.value = '';
dvTips.innerHTML = 'Double click to delete a saved contact.';
onEvent('click', btnAdd, addContact)
let idIndex = 0;
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function addContact(){
    let details = iptInfo.value.split(',');
    if(details.length < 3 ){
        dvTips.innerHTML = 'Please input the name, the city, the email and then add contact';
    } else {
        if(!emailPattern.test(details[2].trim())){
            dvTips.innerHTML = 'Email is not valid.';
            return;
        }
        if(contacts.length < 8){
            dvTips.innerHTML = '';
            const contact = new Contact(details[0], details[1], details[2]);
            const dvContact = create('div');
            dvContact.classList.add('contact');
            dvContact.innerHTML = `Name: ${contact.name} <br>City: ${contact.city} <br>Email: ${contact.email}`;
            idIndex += 1;
            dvContact.id = 'dv' + idIndex;
            dvContacts.appendChild(dvContact);
            contact.ID = idIndex;
            contacts.unshift(contact);
            amountMsg.innerHTML = 'Saved contact(s): ' + contacts.length;
            iptInfo.value = '';
            dvContact.addEventListener('dblclick', function(){
                deleteContact(dvContact);
            });
            dvTips.innerHTML = 'Double click to delete a saved contact.';
        } else {
            dvTips.innerHTML = 'Storage is full!';
        }
        
    }
}

function deleteContact(dvContact){
    let id = dvContact.id.substring(2);
    dvContacts.removeChild(dvContact);
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].ID == id){
            contacts.splice(i, 1);
            amountMsg.innerHTML = 'Saved contact(s): ' + contacts.length;
            return;
        }
    }
}

