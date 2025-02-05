const profilePicture = document.querySelector('[data-testid="profilePicture"]');
profilePicture.innerText

const fullName = document.querySelector('[data-testid="fullName"]');
fullName.innerText

const jobTitle = document.querySelector('[data-testid="jobTitle"]');
jobTitle.innerText

const shortBio = document.querySelector('[data-testid="shortBio"]');
shortBio.innerText

const emailAddress = document.querySelector('[data-testid="emailAddress"]');
emailAddress.innerText

const socialLinks = document.querySelector('[data-testid="my-socials"]');
socialLinks.innerText

const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
currentTimeUTC.innerText

const timeElement = document.querySelector(".time");
timeElement.innerHTML = new Date().toISOString();