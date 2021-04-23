// 선택한 레이어 그룹만 jpeg 파일로 저장
var doc = activeDocument;
EachGroupToJPEG();
customAlert('저장을 완료했습니다', 0.4, 'Notice')

// 메인 
function EachGroupToJPEG() {

    // 선택한 레이어만 잠그기
    var selectedSet = doc.activeLayer;
    selectedSet.allLocked = true;
    var count = doc.layerSets.length;

    for (var i = 0; i < count; i++) {
        if (doc.layerSets[i].allLocked == true) {
            doc.layerSets[i].visible = true;
            saveIt(doc.layerSets[i].name)
            doc.layerSets[i].visible = false;
        }
    }

    // 선택한 레이어 잠금 해제
    selectedSet.allLocked = false;
}

// 저장하기
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
