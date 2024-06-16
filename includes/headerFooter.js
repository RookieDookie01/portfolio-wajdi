function headerAndFooter() {
    let header='./header.html';
    let footer='./footer.html';
    document.body.innerHTML=header+document.body.innerHTML+footer;
}
window.addEventListener("load", createHeaderAndFooter);