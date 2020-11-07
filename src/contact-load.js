const renderContact = () => {
    const imgDiv = document.querySelector(".main-img");
    const mainHeading = document.querySelector("#img-overlay-title");
    const mainSubheading = document.querySelector(".main-subheading");
    const subheading = document.querySelector(".sub-title");
    const contentHolder = document.querySelector("#content-holder");

    const contactDiv = document.createElement("div");
    const contactUl = document.createElement("ul");
    const phoneLi = document.createElement("li");
    const emailLi = document.createElement("li");
    const locationLi = document.createElement("li");

    contactDiv.classList.add("contactDiv");
    contactUl.classList.add("contactUl");
    phoneLi.classList.add("phoneLi");
    emailLi.classList.add("emailLi");
    locationLi.classList.add("locationLi");

    const phoneLiContent = "Phone - 123.456.7890";
    const emailLiContent = "email - restaurant@restaurant.com";
    const locationLiContent = "12345 1st ave, City, ST 12345";
    const picLink = "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
    const mainMsg = "Contact Us";
    const mainSubMsg = ""
    const subHeadingMsg = "Need a Reservation? Have a Question? Let's Chat!";

    imgDiv.style.background = "url(" + picLink + ") no-repeat center";
    imgDiv.style['background-size'] = "100%";
    mainHeading.textContent = mainMsg;
    mainSubheading.textContent = mainSubMsg;
    subheading.textContent = subHeadingMsg;
    phoneLi.textContent = phoneLiContent;
    emailLi.textContent = emailLiContent;
    locationLi.textContent = locationLiContent;

    contactUl.appendChild(phoneLi);
    contactUl.appendChild(emailLi);
    contactUl.appendChild(locationLi);
    contactDiv.appendChild(contactUl);
    contentHolder.appendChild(contactDiv);
}

export default renderContact