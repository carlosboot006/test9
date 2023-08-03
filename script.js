function acessarPastaDownloads() {
    if ('chooseFileSystemEntries' in window || 'showOpenFilePicker' in window) {
        // Navegador suporta a API File System Access
        // Coloque o código para acessar a pasta de downloads aqui
    } else {
        alert('Seu navegador não suporta a API File System Access');
    }
}
function acessarPastaDownloads() {
    if ('chooseFileSystemEntries' in window) {
        // Navegador suporta chooseFileSystemEntries
        window.chooseFileSystemEntries().then(fileHandle => {
            if (fileHandle.isDirectory) {
                // O usuário selecionou uma pasta
                alert('Pasta selecionada: ' + fileHandle.name);
            } else {
                // O usuário selecionou um arquivo, não uma pasta de downloads
                alert('Por favor, selecione uma pasta de downloads válida');
            }
        }).catch(error => {
            alert('Ocorreu um erro ao acessar a pasta de downloads: ' + error);
        });
    } else {
        alert('Seu navegador não suporta a API File System Access');
    }
}
