const textEditor = document.getElementById("text-editor");
const fontSize = document.getElementById("font-size");
const textColor = document.getElementById("text-color");
const textAlign = document.getElementById("text-align");
const toggleTheme = document.getElementById("toggle-theme");

textEditor.innerHTML = localStorage.getItem("savedText") || "";

textEditor.addEventListener("input", function () {
    localStorage.setItem("savedText", textEditor.innerHTML);
});

fontSize.addEventListener("change", function () {
    textEditor.style.fontSize = fontSize.value;
});

textColor.addEventListener("input", function () {
    textEditor.style.color = textColor.value;
});

textAlign.addEventListener("change", function () {
    textEditor.style.textAlign = textAlign.value;
});

document.getElementById("bold").addEventListener("click", function () {
    textEditor.focus();
    document.execCommand("bold", false, null);
});

document.getElementById("italic").addEventListener("click", function () {
    textEditor.focus();
    document.execCommand("italic", false, null);
});

document.getElementById("underline").addEventListener("click", function () {
    textEditor.focus();
    document.execCommand("underline", false, null);
});

toggleTheme.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}