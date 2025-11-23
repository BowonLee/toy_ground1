# 구현 계획서 - Frankenstein 영화 홍보 랜딩 페이지

## 📋 프로젝트 개요
**프로젝트명**: Frankenstein (2025)
**설명**: 영화 시사회 홍보용 고품질 비주얼 중심 랜딩 페이지
**목표**: 영화에 대한 기대감 조성 및 시청 모임 정보 전달
**배포**: https://bowonlee.github.io/toy_ground1/

---

## 🔧 기술 스택 (확정)

### 개발 도구
- **React 19**: UI 컴포넌트 기반 구축
- **Vite 7.2**: 고속 개발 환경 및 빌드
- **Tailwind CSS 4.1**: 유틸리티 기반 스타일링 및 반응형 디자인

### 배포 및 호스팅
- **GitHub Pages**: gh-pages 브랜치 기반 자동 배포
- **gh-pages 패키지**: 로컬에서 `npm run deploy`로 간편한 배포

### 추가 라이브러리
- **ESLint + Prettier**: 코드 품질 관리
- **PostCSS + Autoprefixer**: CSS 크로스 브라우저 호환성

---

## 📁 프로젝트 구조

```
toy_ground1/
├── public/
│   ├── vite.svg
│   └── og-image.jpg          # SNS 공유 이미지 (book_title.jpg)
├── src/
│   ├── assets/               # 프로젝트 이미지
│   │   ├── frankenstein1.jpg # 배경 슬라이드 (3장)
│   │   ├── frankenstein2.jpg
│   │   ├── frankenstein3.jpg
│   │   ├── book_title.jpg    # 책 커버 슬라이드 (3장)
│   │   ├── book_title2.jpg
│   │   ├── book_title3.jpg
│   │   └── place1.jpg        # 장소 이미지
│   ├── components/
│   │   ├── Hero.jsx          # 영화 배경 슬라이드 + 타이틀
│   │   ├── Story.jsx         # 책 커버 슬라이드 + 시놉시스
│   │   ├── Details.jsx       # 일시, 장소, 준비물 정보
│   │   ├── About.jsx
│   │   └── Footer.jsx        # 저작권 정보
│   ├── App.jsx               # 메인 애플리케이션
│   └── main.jsx              # 리액트 진입점
├── index.html                # HTML 템플릿 (메타 태그 포함)
├── package.json              # 프로젝트 설정
├── vite.config.js            # Vite 설정
├── tailwind.config.js        # Tailwind CSS 설정
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions 배포 워크플로우
└── docs/                     # 기획 및 구현 문서
    └── implementation_plan.md # (현재 파일)
```

---

## 🎨 구현 완료 내용

### 1. Hero Section ✅
**파일**: `src/components/Hero.jsx`

**구현 사항**:
- 3개 배경 이미지 자동 슬라이드 (5초 주기)
- 메인 타이틀: "FRANKENSTEIN"
- 서브 타이틀: "신이 되려 한 자 괴물이 될지니"
- 감독명: "Guillermo del Toro"
- YouTube 예고편 버튼
- 스크롤 인디케이터 (애니메이션)

**스타일**:
- 풀스크린 배경 (h-screen w-full)
- 어두운 그래디언트 오버레이
- 애니메이션: opacity 전환 (1000ms)

```jsx
// 사용된 이미지들
const images = [frankenstein1, frankenstein2, frankenstein3];

// 5초마다 자동 슬라이드
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);
```

### 2. Story Section ✅
**파일**: `src/components/Story.jsx`

**구현 사항**:
- 3개 책 커버 이미지 자동 슬라이드 (4초 주기)
- 섹션 제목: "The Modern Prometheus"
- 시놉시스 텍스트
- 해시태그: #Gothic #SciFi #Thriller #MovieNight
- 반응형 레이아웃 (flex-col md:flex-row)

**스타일**:
- 이미지: aspect-[2/3] (책 비율), shadow-2xl
- 텍스트: 큰 폰트 크기, 행간 조정
- 배경: 상단/하단 그래디언트

```jsx
const bookImages = [bookTitle, bookTitle2, bookTitle3];

// 4초마다 책 커버 교체
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentBookIndex((prevIndex) => (prevIndex + 1) % bookImages.length);
  }, 4000);
  return () => clearInterval(interval);
}, []);
```

### 3. Details Section ✅
**파일**: `src/components/Details.jsx`

**구현 사항**:
- 3개 카드 레이아웃 (날짜, 위치, 준비물)
- 날짜: TBD (Coming Soon)
- 위치: Trevari, Gangnam Agit, AV Room
- 준비물: Open Mind & Plenty of Time
- 위치 카드에 배경 이미지 오버레이

**스타일**:
- Grid 레이아웃 (grid-cols-1 md:grid-cols-3)
- Hover 효과: 테두리색 변화
- 위치 카드: 이미지 배경 (opacity-40)

### 4. Footer Section ✅
**파일**: `src/components/Footer.jsx`

**구현 사항**:
- 저작권 정보: "© Shall we act? - since 2023, From Coincidence to connection"
- 미니멀한 디자인

---

## 🎯 메타데이터 및 SEO ✅

### Open Graph 메타 태그
```html
<meta property="og:title" content="Frankenstein" />
<meta property="og:description" content="신이 되려 한 자 괴물이 될지니 - Guillermo del Toro's 2025 adaptation" />
<meta property="og:image" content="/toy_ground1/og-image.jpg" />
<meta property="og:url" content="https://bowonlee.github.io/toy_ground1/" />
<meta property="og:type" content="website" />
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Frankenstein" />
<meta name="twitter:description" content="신이 되려 한 자 괴물이 될지니 - Guillermo del Toro's 2025 adaptation" />
<meta name="twitter:image" content="/toy_ground1/og-image.jpg" />
```

**효과**:
- 카톡, 페이스북, 트위터 공유 시 제목, 설명, 이미지 미리보기 표시
- og-image.jpg = book_title.jpg (책 표지 이미지)

---

## 🚀 배포 및 빌드

### 로컬 개발
```bash
npm run dev          # Vite 개발 서버 실행
npm run build        # 프로덕션 빌드
npm run preview      # 빌드된 파일 미리보기
npm run deploy       # GitHub Pages에 배포
```

### 배포 워크플로우
**파일**: `.github/workflows/deploy.yml`

- **트리거**: main 브랜치에 push할 때마다 자동 실행
- **빌드**: Node.js 20으로 빌드
- **배포**: peaceiris/actions-gh-pages@v3로 gh-pages 브랜치에 배포

### Git Remote
```bash
# Remote 이름: origin
# URL: git@github.com:BowonLee/toy_ground1.git
```

---

## 📊 디자인 구현 상세

### 컬러 팔레트 (Tailwind)
```javascript
// tailwind.config.js에서 정의
{
  'deep-black': '#0A0A0A',      // 배경
  'dark-grey': '#1F1F1F',       // 섹션 배경
  'blood-red': '#8B0000',       // 강조색
  'electric-blue': '#00FFFF',   // 보조 강조색
  'off-white': '#E0E0E0'        // 텍스트색
}
```

### 타이포그래피
- **헤드라인**: `font-serif` (강렬한 이미지)
- **본문**: `font-sans` (가독성)
- **작은 텍스트**: `font-slab` (보조 정보)

### 애니메이션
- **이미지 슬라이드**: opacity 전환 (duration-1000)
- **호버 효과**: 색상 변화, opacity 변화
- **스크롤 인디케이터**: animate-bounce

---

## 📱 반응형 디자인

### 적용된 브레이크포인트
- **sm**: 640px (스마트폰)
- **md**: 768px (태블릿)
- **lg**: 1024px (데스크탑)
- **xl**: 1280px (대형 모니터)

### 주요 적용 예시
```jsx
// Story Section - 반응형 레이아웃
className="flex flex-col md:flex-row items-center gap-12"

// 이미지 크기
className="w-64 md:w-full max-w-sm"

// 텍스트 크기
className="text-4xl sm:text-6xl md:text-8xl"
```

---

## ✅ 구현 체크리스트

### Phase 1: 기본 구조 ✅
- [x] React + Vite + Tailwind 프로젝트 설정
- [x] 컴포넌트 폴더 구조 생성
- [x] 이미지 리소스 준비 (public & src/assets)
- [x] Tailwind 커스텀 색상 설정

### Phase 2: 섹션 구현 ✅
- [x] Hero Section - 배경 슬라이드 + 타이틀
- [x] Story Section - 책 커버 슬라이드 + 시놉시스
- [x] Details Section - 정보 카드 레이아웃
- [x] Footer Section - 저작권 정보

### Phase 3: 배포 및 최적화 ✅
- [x] 메타 태그 추가 (OG, Twitter Card)
- [x] 이미지 경로 최적화 (GitHub Pages base URL)
- [x] gh-pages 브랜치 배포 설정
- [x] GitHub Actions 자동 배포 워크플로우
- [x] 반응형 디자인 검증
- [x] 이미지 로딩 최적화

### Phase 4: 완성 ✅
- [x] 프로젝트 이름 변경 (temp_app → frankenstein)
- [x] 페이지 제목 및 메타데이터 업데이트
- [x] README.md 작성
- [x] 최종 배포 및 테스트

---

## 🔍 성능 최적화

### 이미지 최적화
- **형식**: JPEG (손실 압축)
- **크기**:
  - Hero 배경: ~115KB - 176KB
  - 책 커버: ~21KB - 2.9MB
  - 장소 이미지: ~2.2MB
- **빌드 시 처리**: Vite가 자동으로 해시값 추가 및 청킹

### 빌드 결과
```
dist/index.html                 0.50 kB
dist/assets/index-*.js         200.01 kB (gzip: 62.90 kB)
dist/assets/index-*.css         22.58 kB (gzip: 4.87 kB)
dist/assets/*.jpg           ~2.9 MB (총)
```

---

## 🐛 문제 해결 기록

### 1. GitHub Pages 404 오류
**문제**: vite.config.js의 `base: '/toy_ground1/'` 설정 시 JavaScript 로드 실패

**해결**:
- index.html의 경로를 절대경로(`/src/main.jsx`)로 설정
- Vite가 빌드 시 자동으로 `base` 경로 프리픽스 추가

### 2. 이미지 로드 실패
**문제**: source index.html에서 상대경로 사용 시 빌드 후 경로 불일치

**해결**:
- import 문을 사용하여 이미지 불러오기
- React 컴포넌트에서 import된 변수로 src 속성 설정

### 3. 메타 이미지 공유
**문제**: SNS 공유 시 book_title.jpg가 미리보기로 안 보임

**해결**:
- public 폴더에 og-image.jpg 추가
- Open Graph, Twitter Card 메타 태그 추가

---

## 📚 참고 자료

- **Vite 공식 문서**: https://vite.dev/
- **React 공식 문서**: https://react.dev/
- **Tailwind CSS 공식 문서**: https://tailwindcss.com/
- **GitHub Pages 배포**: gh-pages 패키지 이용

---

**마지막 업데이트**: 2025-11-23
**상태**: ✅ 완성 및 배포 완료
