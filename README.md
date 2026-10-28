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
blog.html            Blog 목록 (Lab Life / Research)
post.html            Blog 글 보기 (post.html?id=글id)
posts/*.md           ★ 블로그 글 (Markdown)
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
- 멤버 프로필 사진: `assets/photos/members/`에 넣고 해당 멤버(또는 director)의 `photo`에 경로 입력. 비워두면 이니셜 표시
- 원형 crop 영역: `photo-crop.html`을 열어 멤버·사진 선택 → 드래그/확대로 영역 지정 → 나온 한 줄을 `data.js`에 붙여넣기 (상세 화면은 원본 비율로 표시)
- 멤버 상세: `bio`, `email`, `links` 선택 입력 (카드 클릭 시 표시)
- 갤러리: 사진을 `assets/photos/`에 넣고 `cover`(대표), `photos`(앨범) 경로 입력

## 블로그 글 쓰기
1. `posts/<글id>.md` 파일을 Markdown으로 작성 (제목은 본문에 다시 쓰지 않음)
2. 이미지는 `posts/<글id>/` 폴더에 넣고 본문에서 `![설명](<글id>/사진.jpg)`로 참조
3. `data.js`의 `blog` 맨 위에 항목 추가: `id`, `t`(제목), `d`(YYYY-MM-DD), `cat`(`"Lab Life"`/`"Research"`), `author`(멤버 이름이면 프로필 사진 표시), `excerpt`, `tags`, `cover`
4. `draft:true`면 목록에 안 보임 → `blog.html?drafts`로 미리보기
- 자세한 예시는 `blog.html?drafts`의 "How to write a blog post" 글 참고
- 글은 fetch로 불러오므로 파일 더블클릭(file://)이 아니라 로컬 서버나 GitHub Pages에서 봐야 해요

## 로컬 미리보기
```
python3 -m http.server 5173
```

## 배포 (택1)
- **GitHub Pages**: 저장소에 push → Settings › Pages › Branch `main` / root
- **Netlify / Cloudflare Pages**: 폴더 드래그 앤 드롭 (빌드 명령 없음)
