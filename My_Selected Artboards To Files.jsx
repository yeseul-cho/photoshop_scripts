// 선택한 아트보드를 jpeg 파일로 저장

var doc = activeDocument;
artboardsToJPEG()
customAlert('저장을 완료했습니다', 0.3, 'Notice')

// 메인
function artboardsToJPEG() {
    // 선택한 아트보드만 잠그기
    var selectedSet = doc.activeLayer;
    selectedSet.allLocked = true;

    var count = doc.layerSets.length
    for (i = 0; i < count; i++) {
        if (doc.layerSets[i].allLocked == true) {
            altClick(i)
            saveIt(doc.layerSets[i].name)
        }
        if (i == count - 1 && doc.layerSets[i].allLocked == true) {
            altClick(i)
        }
        else {
            altClick(i)
            altClick(i)
        }
    }
    // 선택한 아트보드 잠금 해제
    selectedSet.allLocked = false;

}

// 레이어 alt + click (클릭한 레이어만 켜짐/꺼짐)
function altClick(num) {
    var idShw = charIDToTypeID("Shw ");
    var desc = new ActionDescriptor();
    var idnull = charIDToTypeID("null");
    var list = new ActionList();
    var ref = new ActionReference();
    var idLyr = charIDToTypeID("Lyr ");
    ref.putName(idLyr, doc.layerSets[num].name);
    list.putReference(ref);
    desc.putList(idnull, list);
    var idTglO = charIDToTypeID("TglO");
    desc.putBoolean(idTglO, true);
    executeAction(idShw, desc, DialogModes.NO);
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
