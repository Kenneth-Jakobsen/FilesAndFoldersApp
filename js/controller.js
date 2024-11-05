function select(id) {
    model.app.currentId = id;
    model.isEditing = false
    updateView();
}

function saveEdit(id){
    const currentFile = model.filesAndFolders.find((f) => f.id == id);
    const updatedText = document.querySelector('textarea').value
    currentFile.content = updatedText
    model.app.isEditing = false
    updateView()
}

function cancelEdit(){
    model.app.isEditing = false
    updateView()
}

function editFile(){
    model.app.isEditing = true
    updateView()
}

function deleteFile(id){
    model.filesAndFolders = model.filesAndFolders.filter((f)=>f.id!=id && f.parentId!=id)
    updateView()
}


function createNewFolder(){
    const parentId = model.app.currentId
    const newId = model.filesAndFolders.length+1
    const newFolder = {
        id:newId,
        name:'Ny Mappe',
    }
    if (parentId){newFolder.parentId=parentId}
    model.filesAndFolders.push(newFolder)
    updateView()
}

function createNewFile(){
    const parentId = model.app.currentId
    const newId = model.filesAndFolders.length+1
    const newFile = {
        id:newId,
        name:'Ny Fil',
        content:'Jeg er ny fil'
    }
    if (parentId){newFile.parentId=parentId}
    model.filesAndFolders.push(newFile)
    console.log(model)
    updateView()
}