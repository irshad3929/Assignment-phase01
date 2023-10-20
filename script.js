
document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById('copy-button');
    const saveButton = document.getElementById('save-button');
    const lockButton = document.getElementById('lock-button');
    const codeContainer = document.getElementById('code-container');
    
  /* code for copy function */
    copyButton.addEventListener('click', function() {
        const code = document.getElementById('code');
        const text = code.innerText;

        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Code copied to clipboard');
            })
            .catch(err => {
                console.error('Unable to copy to clipboard: ', err);
            });
    });


    /* code for save function */ 
    saveButton.addEventListener('click', function() {
        const code = document.getElementById('code').innerText;
        saveTextAsFile(code, 'code.txt');
        alert('Code saved');
    });


   /* code for lock/unlock function */
    let isLocked = false;
    lockButton.addEventListener('click', function() {
        isLocked = !isLocked;
        codeContainer.classList.toggle('locked', isLocked);
        lockButton.textContent = isLocked ? 'Unlock' : 'Lock';
        codeContainer.contentEditable = !isLocked;
    });
});

/* code for download file */
function saveTextAsFile(text, filename) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
}