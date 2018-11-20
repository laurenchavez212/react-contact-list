import axios from "axios";

export const ADD_CONTACT = "ADD_CONTACT";
export const REMOVE_CONTACT = "REMOVE_CONTACT";
export const FETCH_CONTACTS = "FETCH_CONTACTS";
export const EDIT_CONTACT = "EDIT_CONTACT";

const fake_data = [
  {
    name: "Carpenter Watts",
    phone: "+1 (958) 590-3988",
    email: "carpenterwatts@enerforce.com",
    company: "Enerforce",
    address: "365 Woodpoint Road, Hayden, New Jersey 35825",
    photo_url:
      "https://4.bp.blogspot.com/-ZzOpik5sFZg/UleI27zMJyI/AAAAAAAAHgs/nQEZnjiSn9M/s1600/profileicon.jpg",
    password: "hello",
    id: 1
  },
  {
    name: "Jacqueline Parker",
    phone: "+1 (992) 478-3481",
    email: "jacquelineparker@collaire.com",
    company: "Collaire",
    address: "698 Jardine Place, Waverly, Alaska 12490",
    photo_url: "https://4.bp.blogspot.com/-ZzOpik5sFZg/UleI27zMJyI/AAAAAAAAHgs/nQEZnjiSn9M/s1600/profileicon.jpg",
    password: "hello",
    id: 2
  },
  {
    name: "Estella Rowe",
    phone: "+1 (880) 405-3037",
    email: "estellarowe@softmicro.com",
    company: "Softmicro",
    address: "939 Jerome Avenue, Mansfield, Wisconsin 57757",
    photo_url: "https://4.bp.blogspot.com/-ZzOpik5sFZg/UleI27zMJyI/AAAAAAAAHgs/nQEZnjiSn9M/s1600/profileicon.jpg",
    password: "hello",
    id: 3
  },
  {
    name: "Snyder Battle",
    phone: "+1 (929) 471-2371",
    email: "snyderbattle@neteria.com",
    company: "Neteria",
    address: "510 Frost Street, Ivanhoe, Arizona 84692",
    photo_url: "https://4.bp.blogspot.com/-ZzOpik5sFZg/UleI27zMJyI/AAAAAAAAHgs/nQEZnjiSn9M/s1600/profileicon.jpg",
    password: "hello",
    id: 4
  },
  {
    name: "Ellis Blake",
    phone: "+1 (867) 443-3663",
    email: "ellisblake@quilm.com",
    company: "Quilm",
    address: "106 Schroeders Avenue, Holcombe, Ohio 68090",
    photo_url: "https://4.bp.blogspot.com/-ZzOpik5sFZg/UleI27zMJyI/AAAAAAAAHgs/nQEZnjiSn9M/s1600/profileicon.jpg",
    password: "hello",
    id: 5
  },
  {
    name: "Mcbride Hodges",
    phone: "+1 (842) 425-3407",
    email: "mcbridehodges@qnekt.com",
    company: "Qnekt",
    address: "967 Lacon Court, Heil, Puerto Rico 53116",
    photo_url: "https://4.bp.blogspot.com/-ZzOpik5sFZg/UleI27zMJyI/AAAAAAAAHgs/nQEZnjiSn9M/s1600/profileicon.jpg",
    password: "hello",
    id: 6
  },
  {
    name: "Delores Cline",
    phone: "+1 (974) 585-3530",
    email: "delorescline@krog.com",
    company: "Krog",
    address: "115 Bennet Court, Ilchester, Arkansas 40340",
    photo_url: "https://4.bp.blogspot.com/-ZzOpik5sFZg/UleI27zMJyI/AAAAAAAAHgs/nQEZnjiSn9M/s1600/profileicon.jpg",
    password: "hello",
    id: 7
  },
  {
    name: "Battle Rojas",
    phone: "+1 (919) 548-3660",
    email: "battlerojas@atomica.com",
    company: "Atomica",
    address: "161 Midwood Street, Interlochen, Hawaii 60016",
    photo_url: "https://4.bp.blogspot.com/-ZzOpik5sFZg/UleI27zMJyI/AAAAAAAAHgs/nQEZnjiSn9M/s1600/profileicon.jpg",
    password: "hello",
    id: 8
  },
  {
    name: "Mitchell Shaw",
    phone: "+1 (900) 514-3269",
    email: "mitchellshaw@zoarere.com",
    company: "Zoarere",
    address: "534 Seton Place, Crucible, Palau 41488",
    photo_url: "https://4.bp.blogspot.com/-ZzOpik5sFZg/UleI27zMJyI/AAAAAAAAHgs/nQEZnjiSn9M/s1600/profileicon.jpg",
    password: "hello",
    id: 9
  },
  {
    name: "Blackburn Mays",
    phone: "+1 (836) 535-2790",
    email: "blackburnmays@cowtown.com",
    company: "Cowtown",
    address: "439 Brown Street, Chloride, Louisiana 22881",
    photo_url: "https://4.bp.blogspot.com/-ZzOpik5sFZg/UleI27zMJyI/AAAAAAAAHgs/nQEZnjiSn9M/s1600/profileicon.jpg",
    password: "hello",
    id: 10
  }
];

export const addContact = contactBody => {
  return dispatch => {
    return dispatch({
      type: ADD_CONTACT,
      payload: contactBody
    });
  };
};

export const fetchContacts = () => {
  return dispatch => {
    return dispatch({
      type: FETCH_CONTACTS,
      payload: fake_data
    });
  };
};

export const editContact = contactBody => {
  return dispatch => {
    dispatch({
      type: EDIT_CONTACT,
      payload: contactBody
    });
  };
};

export const removeContact = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_CONTACT,
      payload: id
    });
  };
};
