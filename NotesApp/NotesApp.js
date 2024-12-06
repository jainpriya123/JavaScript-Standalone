let count = 0;

function AddNode() {
    let newDiv = document.createElement('div');
    count++;
    let id = 'element' + count;
    newDiv.id = id;
    str = `<textarea class="inputData" placeholder="Enter Note" rows="10" cols="50" ></textarea><span class="icon"><i class="fas fa-times delete-icon" onclick="deleteTextarea('${id}')"></i></span>`;
    newDiv.innerHTML = str;
    let area = document.getElementById('inputArea');
    area.appendChild(newDiv);
}

function deleteTextarea(id) {
    let childNode = document.getElementById(id);
    let parentNode = document.getElementById('inputArea');
    parentNode.removeChild(childNode);
}