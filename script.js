const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const markdownInput = document.getElementById('markdown-input');
const markdownOutput = document.getElementById('markdown-output');

function showTab(tabId) {
    tabContents.forEach(content => content.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabId + '-content').classList.add('active');
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

    if(tabId === 'output') {
        updateOutput();
    }
}

function updateOutput() {
    const markdownText = markdownInput.value;
    const html = marked.parse(markdownText);
    markdownOutput.innerHTML = html;
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        showTab(tab.getAttribute('data-tab'));
    });
});

markdownInput.addEventListener('input', updateOutput);

// Set the editor tab to be active on startup
showTab('editor');