// 웹용 jpeg 파일로 저장

var doc = activeDocument;

// 확장자(.psd) 뺀 파일명 가져오기
var filename = doc.name.slice(0, -4)
saveIt(filename);

// 저장하기
function saveIt(name) {
    var options = new ExportOptionsSaveForWeb();
    options.format = SaveDocumentType.JPEG;
    options.quality = 60;
    doc.exportDocument(new File(decodeURI(doc.fullName.parent) + '/' + name + '.jpg'), ExportType.SAVEFORWEB, options)
}