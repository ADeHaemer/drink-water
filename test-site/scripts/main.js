const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/drink-water.png") {
    myImage.setAttribute("src", "images/ultraman-zero-profile.jpg");
  } else {
    myImage.setAttribute("src", "images/drink-water.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
     const myName = prompt("Please enter your name.");
     if (!myName) {
       setUserName();
     } else {
       localStorage.setItem("name", myName);
     myHeading.textContent = `You should drink water, ${myName}`;
     }
   }

   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `You should drink water, ${storedName}`;
   }

   myButton.onclick = () => {
     setUserName();
   };
   