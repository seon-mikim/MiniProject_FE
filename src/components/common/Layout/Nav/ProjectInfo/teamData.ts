export interface element {
  id: number,
  name: string,
  git: string,
  src: string,
  task: taskEl[]
}
export interface taskEl {
  id: number,
  title: string
}

export const teamDataFe: element[] = [
  {
    id: 1, 
    name: '박희수', 
    git: 'https://github.com/Nevacat',
    src: 'https://avatars.githubusercontent.com/u/110139098?v=4',
    task: [
      {id: 1, title: '메인 페이지'},
      {id: 2, title: '캘린더 모달 컴포넌트'},
      {id: 3, title: '페이지 배포'},
    ]
  },
  {
    id: 2, 
    name: '임성열', 
    git: 'https://github.com/sung34',
    src: 'https://avatars.githubusercontent.com/u/120437898?v=4',
    task: [
      {id: 1, title: '관리자 권한 수정 페이지'},
      {id: 2, title: '회원가입 승인 페이지'},
      {id: 3, title: '모달 컴포넌트'},
    ]
  },
  {
    id: 3, 
    name: '김선미', 
    git: 'https://github.com/seon-mikim',
    src: 'https://avatars.githubusercontent.com/u/100131415?v=4',
    task: [
      {id: 1, title: '연차/당직 승인 및 내역 페이지'},
      {id: 2, title: '로고 디자인'},
    ]
  },
  {
    id: 4, 
    name: '김민기', 
    git: 'https://github.com/minki-dev',
    src: 'https://avatars.githubusercontent.com/u/120410962?v=4',
    task: [
      {id: 1, title: '마이페이지'},
      {id: 2, title: '네비게이션 바'},
      {id: 3, title: '프로필 모달'},
    ]
  },
  {
    id: 5, 
    name: '정윤조', 
    git: 'https://github.com/jyj1111',
    src: 'https://avatars.githubusercontent.com/u/89414343?v=4',
    task: [
      {id: 1, title: '회원가입 페이지'},
      {id: 2, title: '로그인 페이지'},
      {id: 3, title: '에러 페이지'},
      {id: 3, title: '토스트 컴포넌트'},
    ]
  },
]

export const teamDataBe: element[] = [
  {
    id: 1, 
    name: '신효원', 
    git: 'https://github.com/HyowonSin',
    src: 'https://avatars.githubusercontent.com/u/48724199?v=4',
    task: [
      {id: 1, title: 'BE 개발'},
    ]
  },
  {
    id: 2, 
    name: '이지훈', 
    git: 'https://github.com/ji-hoooon',
    src: 'https://avatars.githubusercontent.com/u/37648641?v=4',
    task: [
      {id: 1, title: 'BE 개발'},
    ]
  },
  {
    id: 3, 
    name: '고예림', 
    git: 'https://github.com/yeeeeerim',
    src: 'https://avatars.githubusercontent.com/u/95463650?v=4',
    task: [
      {id: 1, title: 'BE 개발'},
    ]
  },
]