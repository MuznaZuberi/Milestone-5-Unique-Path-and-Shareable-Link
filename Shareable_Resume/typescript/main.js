"use strict";
const Form = document.getElementById("resume");
const cvShowcaseElement = document.getElementById("Curriculum-Vitae");
const ShareableLinkElement = document.getElementById("Username-based-Links");
const SharelinkElement = document.getElementById("share-link");
const PDFfileElement = document.getElementById("PDF file");
Form.addEventListener("submit", (event) => {
    event.preventDefault();
    const user_name = document.getElementById('user_name').value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const school = document.getElementById("school").value;
    const degree = document.getElementById("degree").value;
    const job = document.getElementById("job").value;
    const company = document.getElementById("company").value;
    const skills = document.getElementById("skills").value;
    const candidateDetails = {
        name,
        email,
        school,
        degree,
        job,
        company,
        skills,
    };
    localStorage.setItem(user_name, JSON.stringify(candidateDetails));
    const profileHTML = `
    <h2><b>DistributableProfile</b></h2>
    <br/>
    <h3>Personal Information</h3>
    <p>Name: <span contenteditable= "true">${name}</span></p>
    <p>Email:<span contenteditable= "true">${email}<span></p>


    <h3>Education</h3>
    <p>School: <contenteditable= "true">${school}</p>
    <p>Degree: <contenteditable= "true">${degree}</p>




    <h3>Experience</h3>
    <p>Job-Title: <contenteditable= "true">${job}</p>
    <p>Company: <contenteditable= "true">${company}</p>


     <h3>Skills</h3>
    <p>Skills: <contenteditable= "true">${skills}</p>

    `;
    cvShowcaseElement.innerHTML = profileHTML;
    const Distributable_URL = `${window.location.origin}?user_name=${encodeURIComponent(user_name)}`;
    ShareableLinkElement.style.display = "block";
    SharelinkElement.href = Distributable_URL;
    SharelinkElement.textContent = Distributable_URL;
});
PDFfileElement.addEventListener('click', () => {
    window.print();
});
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const user_name = urlParams.get('user_name');
    if (user_name) {
        const recordedCVInfo = localStorage.getItem(user_name);
        if (recordedCVInfo) {
            const candidateDetails = JSON.parse(recordedCVInfo);
            document.getElementById("user_name").value = user_name;
            document.getElementById("name").value = candidateDetails.name;
            document.getElementById("email").value = candidateDetails.email;
            document.getElementById("school").value = candidateDetails.school;
            document.getElementById("degree").value = candidateDetails.degree;
            document.getElementById("job").value = candidateDetails.job;
            document.getElementById("company").value = candidateDetails.company;
            document.getElementById("skills").value = candidateDetails.skills;
        }
        ;
    }
    ;
});
