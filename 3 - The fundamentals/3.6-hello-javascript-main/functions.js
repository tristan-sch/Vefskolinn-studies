
//STEP 0 - NEW ARRAY
console.log("*** STEP 0: ARRAY AS CONTACT LIST ***")

// Contact list array 
const contactList = [
    {
        name:"Margaux Streight",
        email:"sfgrg",
        phone: "+354 888 9806",
        company: "Icelandair",
        position: "Head of Marketing",
    },
    {
        name:"Darcie Waycot",
        email:"Darcie.Waycot@airfrance.is",
        phone: "+354 888 6587",
        company: "Air France",
        position: "Head of Sales",
    },
    {
        name:"Wilt Dutnall",
        email:"Wilt.Dutnall@test.com",
        phone: "+354 888 6587",
        company: "Transavia",
        position: "Flight attendant",
    },
    {
        name:"Contact 4",
        email:"email 4",
        phone: "+354 888 9804",
        company: "Company 4",
        position: "Head of 4",
    }
]

// Method 1 to display the array: for loop 
/*
for(let i = 0; i < contactList.length; i++) {
  console.log(contactList[i]);
}
*/

// Method 2 to display the array: forEach loop
contactList.forEach(function(contact) {
  console.log(contact);
});

//***STEP 1 - ADD CONTACT***
console.log("______________________________________")
console.log("*** STEP 1: ADD NEW CONTACT TO THE LIST ***")

// PUSH METHOD 
/* https://www.w3schools.com/jsref/jsref_push.asp 
The push() method adds new items to the end of an array.
To add items at the beginning of an array, use unshift().*/

// First I created the string with the new contact 
const newContact = {
    name: 'New Contact with OUTPUTS',
    email: 'Margaux.Streigh@test.is',
    phone: '+354 888 9802',
    company: 'cccc',
    position: 'Head of New2'
  };

// Then I created the function to create a contact 
 const add = (newContact) => { 
   
  // Method 1 to check duplicate
  /* 
  const checkDuplicate = (existingContact) => { //= contactList[i]
  return existingContact.email === newContact.email;
  }
  const isTheContactTaken = contactList.some(checkDuplicate);
  */
  
  /* "Missing fields": this method works only if name/email are empty but present like this "name: '' / Otherwise use "newContact.name === undefined" */  
  if(newContact.name.length === 0 || newContact.email.length === 0) {
  console.log("Missing fields");
  }

  /* If you use Method 1 -> 
  else if (isTheContactTaken)
  console.log("Duplicate was found"); 
  */

  // This Method 2 -> simpler than Method 1 with everything in the else if
  else if (contactList.some(existingContact => existingContact.email === newContact.email)) {
    console.log("Duplicate was found")
  }

  else {
    console.log(newContact.name + " was added.")
    contactList.push(newContact);
  }
};

// Calling addContact() function 
add(newContact)

// Checking the result
console.log(contactList);

//***STEP 2 -  REMOVE CORRESPONDING CONTACT***
console.log("______________________________________")
console.log("*** STEP 2: REMOVE CORRESPONDING CONTACT ***")

const removeOneContact = (deleteThisContact) => {
  if(deleteThisContact.email.length === 0) {
    console.log("Contact not found");
    }
   else {
        contactList.splice(3);
        console.log(deleteThisContact.name + " was removed.");
    }
  };

removeOneContact(contactList[3]);
console.log(contactList);

//***STEP 3 -  REMOVE CORRESPONDING CONTACT***

console.log("______________________________________")
console.log("*** STEP 3: EDIT CORRESPONDING CONTACT ***")
/*
https://egghead.io/lessons/javascript-3-ways-to-update-the-content-of-an-array-of-objects-with-javascript
*/

//Map iterates through the array and use a convoque function to 
const editData = contactList.map(item => {
  
  //I managed to do it with two conditions to access the object
  if(item.name === "Wilt Dutnall" && item.email.length === 0) {
     console.log("Contact not found");
     return item;
  } 
  
  else if (item.name === "Wilt Dutnall") {
    console.log(item.name + " was updated.");
    return {...item, email: "UPDATED EMAIL"};
  } 
  else {
    return item
  }
})

 console.log(editData);


/*
const mappedcontactList = contactList.map(student => student.yearsCompleted === 4 ? {...student, 'status': 'graduated'} : {...student})

mappedcontactList[0].email = 'EMAIL EDITED';

console.log('contactList = ', contactList)
console.log('mappedcontactList = ', mappedcontactList)
*/

//***STEP 4 - GET CONTACT INFO***
console.log("______________________________________")
console.log("*** STEP 4: GET CONTACT INFO ***")

// get - Output information for the corresponding contact 
const getContactInfo = (contactList) => { 

  if(contactList.email.length === 0) {
    console.log("Contact not found");
    }

    else {
    console.log("Here is the contact info from " + contactList.name + ".");
    console.log(contactList);
    }
};

//calling the function 
getContactInfo(contactList[0])


//***STEP 5: LIST ALL WITH SET OBJECT***
console.log("______________________________________")
console.log("***STEP 5: LIST ALL***")

const listAll = (listContactsfromThisList) => { 
  console.log(listContactsfromThisList);
}
//calling the function 
listAll(contactList)


//***STEP 6: LIST ALL WITH SET OBJECT***
console.log("______________________________________")
console.log("***STEP 6: REMOVE ALL CONTACTS FROM THE LIST***")

/*clear() - Remove all contacts from the list and ask if user is sure before proceeding) */

/* https://javascript.info/alert-prompt-confirm */
let doYouWantToClearTheList = confirm("Do you want to clear the list? ");
alert( doYouWantToClearTheList ); // true if OK is pressed

const removeAllContacts = (deleteThisList) => {
    if(doYouWantToClearTheList === true) {
    deleteThisList.splice(0,deleteThisList.length);
    console.log("The contact list was cleared")
    }
}

removeAllContacts(contactList)

/* checking the result */
console.log (contactList);


