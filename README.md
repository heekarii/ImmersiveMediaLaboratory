# IMM Lab website

빌드·서버 없는 정적 사이트예요. 폴더 전체를 그대로 올리면 끝.

```
index.html           Home
research.html        Research (3D splat / streaming / 360° 인터랙티브 비주얼)
director.html        Director
projects.html        Projects (타임라인·리스트, 필터, 상세 패널)
publications.html    Publications
members.html         Members
activities.html      Activities
join.html            Join us + Contact
assets/css/style.css 공통 스타일
assets/js/data.js    ★ 모든 내용 데이터 (여기만 고치면 전 페이지 반영)
assets/js/common.js  공통 내비·푸터·토스트·헬퍼
assets/logo*.svg     로고
```

## 내용 수정
`assets/js/data.js`만 고치면 돼요 (projects, publications, members, activities 등).
- 프로젝트: `s`/`e` 시작·종료 연도, `r`에 `"PI"`/`"Lead"`/`""`
- 논문: `k`는 `"j"`(저널)/`"c"`(학회), `area`는 `gen`/`stream`/`play`
- 활동 사진: `assets/photos/`에 넣고 `img`에 경로 입력

## 로컬 미리보기
```
python3 -m http.server 5173
```

## 배포 (택1)
- **GitHub Pages**: 저장소에 push → Settings › Pages › Branch `main` / root
- **Netlify / Cloudflare Pages**: 폴더 드래그 앤 드롭 (빌드 명령 없음)
