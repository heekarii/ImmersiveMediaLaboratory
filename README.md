# IMM Lab website

빌드·서버 없는 정적 사이트예요. 폴더 전체를 그대로 올리면 끝.

```
index.html           Home
research.html        Research (3D splat / streaming / 360° 인터랙티브 비주얼)
director.html        Director
projects.html        Projects (진행/완료 목록 + 상세 패널)
publications.html    Publications
members.html         Members
gallery.html         Gallery (앨범 + 라이트박스)
join.html            Join us + Contact
assets/css/style.css 공통 스타일
assets/js/data.js    ★ 모든 내용 데이터 (여기만 고치면 전 페이지 반영)
assets/js/common.js  공통 내비·푸터·토스트·헬퍼
assets/logo*.svg     로고
```

## 내용 수정
`assets/js/data.js`만 고치면 돼요 (projects, publications, members, gallery 등).
- 프로젝트: `s`/`e` 시작·종료 연도, `r`에 `"PI"`/`"Lead"`/`""`
- 논문: `k`는 `"j"`/`"c"`, `scope`는 `"intl"`(국제)/`"dom"`(국내), `area`는 Research 페이지 분류
- 멤버 상세: `bio`, `email`, `links` 선택 입력 (카드 클릭 시 표시)
- 갤러리: 사진을 `assets/photos/`에 넣고 `cover`(대표), `photos`(앨범) 경로 입력

## 로컬 미리보기
```
python3 -m http.server 5173
```

## 배포 (택1)
- **GitHub Pages**: 저장소에 push → Settings › Pages › Branch `main` / root
- **Netlify / Cloudflare Pages**: 폴더 드래그 앤 드롭 (빌드 명령 없음)
