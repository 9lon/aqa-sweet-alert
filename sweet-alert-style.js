import '@nylon/aqa-font/aqa-font.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `
<style>
    .swal-modal,button{
        font-family: MitrLight;
    }
</style>`;

document.head.appendChild($_documentContainer.content);
var importDoc = window.document;
var style = importDoc.querySelector('style');
document.head.appendChild(style);
