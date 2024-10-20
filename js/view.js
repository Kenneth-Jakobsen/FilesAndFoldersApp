function updateView(){
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Filer og mapper</h1>
        ${createFoldersHtml()}
        ${createFilesHtml()}
        ${createEditFileHtml()}
    `;
}

function createFoldersHtml(){
    const currentId = model.currentId;
    let html = '';
    for(let fileOrFolder of model.filesAndFolders){
        if(fileOrFolder.hasOwnProperty('content') || fileOrFolder.parentId != currentId) continue;
        html += `📁 <a href="javascript:select(${fileOrFolder.id}">${fileOrFolder.name}</a><br/>`;
    }
    return html;
}

function createFilesHtml(){
    const currentId = model.currentId;
    let html = '';
    for(let fileOrFolder of model.filesAndFolders){
        if(!fileOrFolder.hasOwnProperty('content') || fileOrFolder.parentId != currentId) continue;
        html += `🗎 <a href="javascript:select(${fileOrFolder.id}">${fileOrFolder.name}</a><br/>`;
    }
    return html;
}

function createEditFileHtml(){
    const currentId = model.currentId;
    return '';
}