# photoshop_scripts

## 1. 개요
- 회사에서 디자이너로 일할 당시 개인적으로 만든 포토샵 스크립트 모음입니다.  
- 자주 하는 반복 작업을 자동화해서 작업 시간을 단축할수 있습니다.   
- [Adobe 포토샵 스크립팅 공식 문서](https://github.com/Adobe-CEP/CEP-Resources/tree/master/Documentation/Product%20specific%20Documentation/Photoshop%20Scripting)를 바탕으로 작성했습니다.
- 제작 후 바로 실제 업무에 적용해서 그때그때 버그를 고치고 기능을 추가해나갔습니다. 
- 약 1년간 실무에 사용했고, 최소 1.5명분의 작업을 혼자 처리할 수 있을만큼 작업 속도가 빨라졌습니다.

<br>

## 2. 제작 기간
2021.04.01 ~ 2021.04.15(약 2주)

<br>

## 3. 스크립트 설명
#### 1) My_template generator_play
+ 카드뉴스 템플릿을 자동 생성하는 스크립트입니다.
+ 가로 세로 960px, 해상도 72dpi, 타이틀이 '놀이법'인 새 문서를 생성합니다.
+ 디폴트로 생성되는 배경 레이어의 잠금을 풀고 삭제합니다.
+ 레이어 그룹을 10개 생성합니다.
+ 각 레이어 그룹 안에는 흰색 배경 레이어가 잠긴 상태로 들어갑니다.
+ 각 흰색 배경의 레이어 위에는 'sketch'라는 레이어가 오퍼시티 25인 상태로 들어갑니다. 

#### 2) My_Artboards To Files
+ 모든 아트보드를 각각의 jpeg 파일로 저장합니다.
+ 아트보드 타이틀이 파일명이 됩니다. 

#### 3) My_Selected Artboards To Files
+ 선택한 아트보드만 각각의 jpeg 파일로 저장합니다.

#### 4) My_LayerGroups To Files
+ 모든 레이어 그룹을 각각의 jpeg 파일로 저장합니다.
+ 레이어 그룹의 이름이 jpeg 파일명이 됩니다.

#### 5) My_Selected LayerGroups To Files
+ 선택한 레이어 그룹만 각각의 jpeg 파일로 저장합니다.

#### 6) My_Export To JPEG
+ psd 파일을 웹용 jpeg 파일로 저장합니다.
+ psd 파일명이 jpeg 파일명이 됩니다.

<br>

## 4. 사용 방법
1. 스크립트 다운로드
2. 스크립트 실행 : 포토샵 실행 > 파일 탭 > 스크립트 > 찾아보기 > 다운로드받은 스크립트 선택 
3. 2번 과정을 액션으로 등록한 후 단축키 추가하면 더 빠르게 사용 가능 
