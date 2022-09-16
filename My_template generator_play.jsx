// 놀이법 카드뉴스 템플릿 만들기

// 문서 단위를 픽셀로 지정
var originalUnit = preferences.rulerUnits;
preferences.rulerUnits = Units.PIXELS;

// 문서 만들기
var docRef = documents.add(960, 960, 72, '놀이법');
var doc = activeDocument;

// 원하는 횟수만큼 레이어 그룹 만들기
makeLayers(10);

// 백그라운드 레이어 잠금 해제 후 삭제
doc.activeLayer.isBackgroundLayer = false;
doc.artLayers[0].remove()

function makeLayers(count) {
    
    // 정해진 횟수만큼 레이어 그룹 생성
    for (i = 1; i <= count; i++) {

        // 빈 그룹 생성
        var newLayerSetRef = doc.layerSets.add();
        newLayerSetRef.name = i;

        // 백그라운드 레이어 생성 후 흰색으로 채우고 잠금
        var backLayer = doc.artLayers.add();
        backLayer.name = 'background';

        var backgroundColor = new SolidColor;
        backgroundColor.rgb.red = 255;
        backgroundColor.rgb.blue = 255;
        backgroundColor.rgb.green = 255;        
        doc.selection.selectAll;
        doc.selection.fill(backgroundColor);

        backLayer.allLocked = true;

        // 스케치 레이어 생성 후 오퍼시티 낮춤
        var sketchLayer = activeDocument.artLayers.add();
        sketchLayer.name = 'sketch';
        sketchLayer.opacity = 25;

        // 레이어 두 개를 그룹으로 이동
        backLayer.move(newLayerSetRef, ElementPlacement.INSIDE);
        sketchLayer.move(newLayerSetRef, ElementPlacement.INSIDE);
    }    
}


