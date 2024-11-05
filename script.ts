// script.ts
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resume-form") as HTMLFormElement;
  const resumeContainer = document.getElementById("resume-container") as HTMLDivElement;
  const resumeOutput = document.getElementById("resume-output") as HTMLDivElement;
  const editButton = document.getElementById("edit-button") as HTMLButtonElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const personalInfo = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      address: formData.get("address")?.toString() || "",
    };

    const education = {
      degree: formData.get("degree")?.toString() || "",
      university: formData.get("university")?.toString() || "",
      graduationYear: formData.get("graduation")?.toString() || "",
    };

    const workExperience = {
      company: formData.get("company")?.toString() || "",
      position: formData.get("position")?.toString() || "",
      startDate: formData.get("start-date")?.toString() || "",
      endDate: formData.get("end-date")?.toString() || "",
      description: formData.get("work-description")?.toString() || "",
    };

    const skills = formData.get("skills")?.toString() || "";

    // Dynamically generate resume content
    resumeOutput.innerHTML = `
      <div class="resume-section" id="personal-info">
        <h3 onclick="editSection('personal-info')">Personal Information</h3>
        <p class="editable" contenteditable="false">${personalInfo.name}</p>
        <p class="editable" contenteditable="false">${personalInfo.email}</p>
        <p class="editable" contenteditable="false">${personalInfo.phone}</p>
        <p class="editable" contenteditable="false">${personalInfo.address}</p>
      </div>
      
      <div class="resume-section" id="education">
        <h3 onclick="editSection('education')">Education</h3>
        <p class="editable" contenteditable="false">${education.degree}</p>
        <
  