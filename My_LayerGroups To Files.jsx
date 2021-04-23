// 각 그룹을 jpeg 파일로 저장
var doc = activeDocument;
groupsToJPEG()

// 메인
function groupsToJPEG() {
    // 그룹 개수 저장
    var count = doc.layerSets.length

    // 위에서부터 그룹 켜고, 저장하고, 끄기 
    for (i = 0; i < count; i++) {
        doc.layerSets[i].visible = true;
        saveIt(doc.layerSets[i].name)
        doc.layerSets[i].visible = false;

        if (i == count - 1) {
            doc.layerSets[i].visible = true;
        }
    }
}

// 저장할 폴더에 동일한 파일명 있으면 덮어쓰기
function saveIt(name) {
    var options = new ExportOptionsSaveForWeb();
    options.format = SaveDocumentType.JPEG;
    options.quality = 60;
    doc.exportDocument(new File(decodeURI(doc.fullName.parent) + '/' + name + '.jpg'), ExportType.SAVEFORWEB, options)   
}

// alert 창 띄우고 지정한 시간 후 자동으로 닫음 
function customAlert(message, delaySeconds, title) {
    var alertWindow = new Window('palette', title);
    var control_text = alertWindow.add('edittext', [0, 0, 500, 200], message, { multiline: true });
    alertWindow.show();
    alertWindow.update();
    $.sleep(delaySeconds * 1000);
    alertWindow.hide();
    alertWindow = null;
}