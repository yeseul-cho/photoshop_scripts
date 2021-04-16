// 각 그룹을 jpeg 파일로 저장
var doc = activeDocument;
alert(doc.layerSets[0].name)
groupsToJPEG()


function groupsToJPEG() {
    // 그룹 개수 저장
    var count = doc.layerSets.length

    // 위에서부터 그룹 켜고, 저장하고, 끄기 
    for (i = 0; i < count; i++) {
        doc.layerSets[i].visible = true;
        saveIt(doc.layerSets[i].name)
        doc.layerSets[i].visible = false;
    }
}

function saveIt(name) {
    var options = new ExportOptionsSaveForWeb();
    options.format = SaveDocumentType.JPEG;
    options.quality = 60;
    doc.exportDocument(new File(decodeURI(doc.fullName.parent) + '/' + name + '.jpg'), ExportType.SAVEFORWEB, options)    
}

