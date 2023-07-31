/**********************************************[PART-1]********************************************/
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getDatabase,ref,push,onValue,remove} from"https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const firebaseConfig = {
databaseURL:"https://mobile-application-342fd-default-rtdb.asia-southeast1.firebasedatabase.app"
};
/**************************************************************************************************/


/********************[PART-2]************************/
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
/****************************************************/


/**************************[PART-3]*****************************/
const Username = document.getElementById("username-input");
const Email = document.getElementById("email-input");
const Password = document.getElementById("password-input");
const SignupButton = document.getElementById("signup-button");
let input1;
let input2;
let input3;
/***************************************************************/


/**********************[PART-4]**************************/
SignupButton.addEventListener("click", function () 
{
  
  input1 = Username.value;
  input2 = Email.value;
  input3 = Password.value;

  const databaseRef = ref(database, "Users/" + input1);

  let user = 
  {
    name: input1,
    mail: input2,
    pass: input3
  }

  push(databaseRef, user);

  Eraser();
}
);
/********************************************************/


/*********************************[PART-5]******************************/
function Eraser ()
{
  Username.value="";
  Email.value="";
  Password.value="";
}
/***********************************************************************/