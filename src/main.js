const tab = document.querySelectorAll('a[data-tab-for]');
const content = document.querySelectorAll('.container');

tab.forEach(tab => tab.addEventListener('click', tabClicked));
