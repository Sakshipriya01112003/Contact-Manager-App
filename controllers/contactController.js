const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

//@desc Get all contacts
//@route Get /api/contacts
//@access public

const getContacts = asyncHandler(async(req,res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create new Contact
//@route POST /api/contacts
//@acess public
const createContact = asyncHandler(async(req,res) => {
   console.log("The request body is:",req.body);
   const {name,email,phone} = req.body;
   if(!name || !email || !phone)
   {
    res.status(400);
    throw new Error("All files are mandatory");
   }
   const contact = await Contact.create({
    name,
    email,
    phone,
   });
    res.status(200).json(contact)
});

//@desc Contact info
//@route GET /api/contacts/:id
//@acess public
const getContact = asyncHandler(async(req,res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact)
  {
    res.status(404);
    throw new Error("Contact not Found");
  }
  res.status(200).json(contact)
});

//@desc update Contact
//@route PUT /api/contacts/:id
//@acess public
const updateContact = asyncHandler(async(req,res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact)
  {
    res.status(404);
    throw new Error("Contact not Found");
  }

  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );
  
  res.status(200).json(updateContact)
});

//@desc Create ne Contact
//@route DELETE /api/contacts/:id
//@acess public
const deleteContact = asyncHandler(async(req,res) => {
  const contact = await Contact.findById(req.params.id);
  if(!contact)
  {
    res.status(404);
    throw new Error("Contact not Found");
  }
  await Contact.deleteOne();
  res.status(200).json(contact);
});

module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}