const tabs = document.querySelectorAll('.tab');
const markdownInput = document.getElementById('markdown-input');
const markdownOutput = document.getElementById('markdown-output');

function switchTab(tabId) {
    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.content > *').forEach(el => el.style.display = 'none');

    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    document.querySelector(tabId === 'editor' ? '.editor' : '.output').style.display = 'block';

    if (tabId === 'output') updateOutput();
}

function updateOutput() {
    const markdownText = markdownInput.value;
    const html = marked.parse(markdownText);
    markdownOutput.innerHTML = html;
}

// Tab switching
tabs.forEach(tab => tab.addEventListener('click', () => switchTab(tab.getAttribute('data-tab'))));

// Show the editor tab by default
switchTab('editor');