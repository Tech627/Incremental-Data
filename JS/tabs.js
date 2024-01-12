let Chips_content = document.getElementById("Chips-content");
let txt_milestone = document.getElementById("txt-milestone");

function OpenChipsContent() {
    Chips_content.classList.add("show-Chips-content")
}

function CloseChipsContent() {
    Chips_content.classList.remove("show-Chips-content")
}

function OpenTxtMilestone() {
    txt_milestone.classList.add("show-txt-milestone");
}

function CloseTxtMilestone() {
    txt_milestone.classList.remove("show-txt-milestone");
}