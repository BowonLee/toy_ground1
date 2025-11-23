# 콘텐츠 계획서 - Frankenstein 영화 홍보 랜딩 페이지

## 📌 프로젝트 개요

**프로젝트명**: Frankenstein (2025)
**목적**: 영화 시각 모임의 몰입감 있는 홍보 및 정보 전달
**타겟**: 영화 팬, 이벤트 참여자, 비주얼 콘텐츠 애호가
**상태**: ✅ 완성 및 배포 완료

---

## 🎬 섹션별 콘텐츠 구성

### 1️⃣ Hero Section - 첫인상 (영화 배경 슬라이드)

**목적**: 강렬한 영화의 분위기와 기대감 전달

**구현된 콘텐츠**:
- **메인 타이틀**: "FRANKENSTEIN"
- **서브 타이틀**: "신이 되려 한 자 괴물이 될지니"
- **감독명**: "Guillermo del Toro"
- **배경 슬라이드**: 3개 이미지 자동 회전 (5초 주기)
  - `src/assets/frankenstein1.jpg`
  - `src/assets/frankenstein2.jpg`
  - `src/assets/frankenstein3.jpg`
- **액션 버튼**: YouTube 예고편 링크
  - URL: https://www.youtube.com/watch?v=XWt4z0NNq-Q
- **스크롤 인디케이터**: 애니메이션 화살표

**디자인 특징**:
- 풀스크린 (h-screen w-full)
- 어두운 그래디언트 오버레이 (opacity-50)
- 이미지 자동 전환 (opacity 애니메이션)
- 반응형 텍스트 크기 (sm:text-6xl md:text-8xl lg:text-9xl)

---

### 2️⃣ Story Section - 시놉시스 (책 커버 슬라이드)

**목적**: 영화의 세계관 및 감정선 전달

**구현된 콘텐츠**:
- **섹션 제목**: "The Modern Prometheus"
- **섹션 태그**: "Synopsis"
- **책 커버 슬라이드**: 3개 이미지 자동 회전 (4초 주기)
  - `src/assets/book_title.jpg`
  - `src/assets/book_title2.jpg`
  - `src/assets/book_title3.jpg`
- **시놉시스 텍스트**:
  ```
  "신이 되려 했던 인간, 그리고 인간이 되고 싶었던 괴물.
  2025년, 고전의 완벽한 재해석으로 돌아온 <프랑켄슈타인>.
  과학의 오만함이 빚어낸 비극과 그 속에 숨겨진 슬픈 영혼의 이야기를 함께 나눕니다."
  ```
- **해시태그**: #Gothic #SciFi #Thriller #MovieNight

**디자인 특징**:
- 반응형 레이아웃 (flex-col md:flex-row)
- 책 이미지 비율: aspect-[2/3]
- 그림자 효과: shadow-2xl
- 상단/하단 그래디언트 배경
- 호버 효과: 테두리 색상 변화

---

### 3️⃣ Details Section - 이벤트 정보 (카드 레이아웃)

**목적**: 참여 모임의 실질적 정보 명확히 전달

**구현된 콘텐츠**:

#### 📅 Date (날짜 카드)
- **제목**: "Date"
- **정보**: "TBD"
- **부제**: "Coming Soon"

#### 📍 Location (위치 카드)
- **제목**: "Location"
- **정보**: "Trevari"
- **상세**: "Gangnam Agit, AV Room"
- **배경 이미지**: `src/assets/place1.jpg` (opacity-40)

#### 🎯 Preparation (준비물 카드)
- **제목**: "Prep"
- **정보**: "Open Mind"
- **부제**: "& Plenty of Time"

**디자인 특징**:
- 3열 그리드 레이아웃 (grid-cols-1 md:grid-cols-3)
- 호버 시 테두리색 변화 (blood-red)
- 위치 카드: 배경 이미지 오버레이
- 깔끔한 정보 전달 구조

---

### 4️⃣ Footer - 마무리 (저작권)

**목적**: 저작권 명시 및 조직 정보 표시

**구현된 콘텐츠**:
- **Copyright**: "© Shall we act? - since 2023, From Coincidence to connection"

**디자인 특징**:
- 미니멀하고 차분한 스타일
- 텍스트 기반 디자인
- 어두운 배경과 밝은 텍스트 대비

---

## 🎨 브랜드 아이덴티티

### 컬러 팔레트
```
Primary: Deep Black (#0A0A0A) - 배경색
Secondary: Dark Grey (#1F1F1F) - 섹션 배경
Accent 1: Blood Red (#8B0000) - 강조색
Accent 2: Electric Blue (#00FFFF) - 보조 강조색
Text: Off-White (#E0E0E0) - 텍스트색
```

### 타이포그래피
- **헤드라인**: Serif 폰트 (강렬한 영화적 느낌)
- **본문**: Sans-serif 폰트 (가독성)
- **보조**: Slab 폰트 (정보 강조)

### 시각적 특징
- **무드**: 고딕, 느와르, SF, 미스터리
- **분위기**: 기괴하면서도 매혹적
- **애니메이션**: 부드러운 페이드, 자동 슬라이드

---

## 📊 이미지 리소스

### 사용된 이미지 목록

| 섹션 | 파일명 | 용도 | 크기 |
|------|--------|------|------|
| Hero | frankenstein1.jpg | 배경 슬라이드 | 115.80 KB |
| Hero | frankenstein2.jpg | 배경 슬라이드 | 143.09 KB |
| Hero | frankenstein3.jpg | 배경 슬라이드 | 176.17 KB |
| Story | book_title.jpg | 책 커버 슬라이드 | 21.44 KB |
| Story | book_title2.jpg | 책 커버 슬라이드 | 72.55 KB |
| Story | book_title3.jpg | 책 커버 슬라이드 | 2,965.09 KB |
| Details | place1.jpg | 위치 배경 | 2,242.61 KB |
| Meta | og-image.jpg | SNS 공유 | 21.44 KB |

---

## 🌐 메타데이터

### Open Graph (소셜 미디어 공유)
```html
<meta property="og:title" content="Frankenstein" />
<meta property="og:description" content="신이 되려 한 자 괴물이 될지니 - Guillermo del Toro's 2025 adaptation" />
<meta property="og:image" content="/toy_ground1/og-image.jpg" />
<meta property="og:url" content="https://bowonlee.github.io/toy_ground1/" />
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Frankenstein" />
<meta name="twitter:image" content="/toy_ground1/og-image.jpg" />
```

**효과**: 카톡, 페이스북, 트위터 공유 시 제목, 설명, book_title.jpg 이미지 표시

---

## ✨ 구현 완료 상황

✅ 모든 콘텐츠 섹션 구현 완료
✅ 반응형 디자인 적용 완료
✅ 애니메이션 효과 구현 완료
✅ 메타데이터 추가 완료
✅ GitHub Pages 배포 완료

---

**마지막 업데이트**: 2025-11-23
**상태**: ✅ 완성 및 배포 완료
