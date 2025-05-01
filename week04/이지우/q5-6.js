document.getElementById('updateHtml').addEventListener('click', function() {
    const htmlContent = document.getElementById('htmlInput').value;
    document.getElementById('htmlContainer').innerHTML = htmlContent;
});