// script.ts
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeContainer = document.getElementById("resume-container");
    var resumeOutput = document.getElementById("resume-output");
    var editButton = document.getElementById("edit-button");
    form.addEventListener("submit", function (event) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        event.preventDefault();
        var formData = new FormData(form);
        var personalInfo = {
            name: ((_a = formData.get("name")) === null || _a === void 0 ? void 0 : _a.toString()) || "",
            email: ((_b = formData.get("email")) === null || _b === void 0 ? void 0 : _b.toString()) || "",
            phone: ((_c = formData.get("phone")) === null || _c === void 0 ? void 0 : _c.toString()) || "",
            address: ((_d = formData.get("address")) === null || _d === void 0 ? void 0 : _d.toString()) || "",
        };
        var education = {
            degree: ((_e = formData.get("degree")) === null || _e === void 0 ? void 0 : _e.toString()) || "",
            university: ((_f = formData.get("university")) === null || _f === void 0 ? void 0 : _f.toString()) || "",
            graduationYear: ((_g = formData.get("graduation")) === null || _g === void 0 ? void 0 : _g.toString()) || "",
        };
        var workExperience = {
            company: ((_h = formData.get("company")) === null || _h === void 0 ? void 0 : _h.toString()) || "",
            position: ((_j = formData.get("position")) === null || _j === void 0 ? void 0 : _j.toString()) || "",
            startDate: ((_k = formData.get("start-date")) === null || _k === void 0 ? void 0 : _k.toString()) || "",
            endDate: ((_l = formData.get("end-date")) === null || _l === void 0 ? void 0 : _l.toString()) || "",
            description: ((_m = formData.get("work-description")) === null || _m === void 0 ? void 0 : _m.toString()) || "",
        };
        var skills = ((_o = formData.get("skills")) === null || _o === void 0 ? void 0 : _o.toString()) || "";
        // Dynamically generate resume content
        resumeOutput.innerHTML = "\n      <div class=\"resume-section\" id=\"personal-info\">\n        <h3 onclick=\"editSection('personal-info')\">Personal Information</h3>\n        <p class=\"editable\" contenteditable=\"false\">".concat(personalInfo.name, "</p>\n        <p class=\"editable\" contenteditable=\"false\">").concat(personalInfo.email, "</p>\n        <p class=\"editable\" contenteditable=\"false\">").concat(personalInfo.phone, "</p>\n        <p class=\"editable\" contenteditable=\"false\">").concat(personalInfo.address, "</p>\n      </div>\n      \n      <div class=\"resume-section\" id=\"education\">\n        <h3 onclick=\"editSection('education')\">Education</h3>\n        <p class=\"editable\" contenteditable=\"false\">").concat(education.degree, "</p>\n        <\n  ");
    });
});
