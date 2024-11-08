function select(id) {
    model.app.currentId = id;
    updateView();
};

function saveEdit(id){
    const currentFile = model.filesAndFolders.find((f) => f.id == id);
    const updatedText = document.querySelector('textarea').value
    currentFile.content = updatedText
    model.isEditing = false
    updateView();
};

function cancelEdit(){
    model.isEditing = false
    updateView();
};

function editFile(){
    model.isEditing = true
    updateView();
};

function deleteFile(id) {
    if(isTextFileClosed()){
        function deleteAllFiles(fileId) { //delete all children of the file
            const index = model.filesAndFolders.findIndex(f => f.id === fileId);
            if (index !== -1) {
                model.filesAndFolders.splice(index, 1);
            }
            const filesToDelete = model.filesAndFolders.filter(f => f.parentId === fileId);
            for (let file of filesToDelete) {
                deleteAllFiles(file.id);
            }
        }
        deleteAllFiles(id);
        updateView();
    }
    else{
        alert('Cant delete an open textfile')
    }
};


function createNew(value){
    const parentId = model.app.currentId
    const newId = model.filesAndFolders.length+1
    const isFile = value === 'Fil'
    if(isTextFileClosed()){
        const newFolder = {
            id:newId,
            name:`Ny ${value} (${newId}) `,
            ...(parentId && { parentId }),
            ...(isFile && {content:'Jeg er en ny fil'})
        }
        model.filesAndFolders.push(newFolder)
        updateView();
    };
};


function isTextFileClosed(){
    return !document.querySelector('.file-content') && !model.isEditing
};

function rename(id) {
    if(isTextFileClosed()){
        const file = model.filesAndFolders.find(f => f.id === id);
        const newName = prompt("Enter the new name for the file:", file.name);
        file.name = newName.trim();
        updateView(); 
    }
    else{
        alert('Cant rename an open text file')
    }
};

