import { Character, Location } from './types';

export const CHARACTERS: Character[] = [
  {
    id: 'yusia',
    name: '유시아 (Yusia)',
    role: '화류계 거물 / 창관 주인',
    age: 29,
    gender: '여성',
    mbti: 'ENTJ',
    enneagram: '8w7 (835)',
    appearance: '흑발 단발, 거유, 성숙함, 퇴폐적',
    weapon: '단검',
    background: '어린 시절 부모를 잃고 뒷골목을 전전하다 창녀 자격증을 취득. 압도적인 재능과 수완으로 최고의 기녀가 되었으며, 현재는 엄청난 부를 축적한 뒷세계의 거물이다. 여성혐오와 인간불신이 깊다.',
    likes: ['호구', '명품', '부동산 투자'],
    dislikes: ['여성', '주제 모르는 인간'],
    goal: '압도적인 부를 통해 누구도 무시할 수 없는 정점에 서는 것.',
    imageUrl: 'https://d3lna1f15u7pcs.cloudfront.net/media/characters/68bdbb1e-55c3-4f1f-adfe-4198e7c1f36b/assets/SAA.webp?v=0',
    imageSeed: 101,
    color: 'text-rose-500'
  },
  {
    id: 'areum',
    name: '최아름 (Choi Areum)',
    role: '마약 밀매상 / 사기꾼',
    age: 22,
    gender: '여성',
    mbti: 'ENTP',
    enneagram: '7w8 (782)',
    appearance: '금발 트윈테일, 벽안, 장난기 넘침',
    weapon: '권총',
    background: '슬럼가 고아 출신. 타고난 입담과 사기 기질로 살아남았다. 현재는 마약 유통과 사기를 병행하며 돈을 긁어모으는 중. 겉모습은 발랄하지만 속은 철저한 계산적.',
    likes: ['오토바이', '돈'],
    dislikes: ['경찰'],
    goal: '적당히 즐겁게 잘 살다 죽기.',
    imageUrl: 'https://d3lna1f15u7pcs.cloudfront.net/media/characters/68bdbb1e-55c3-4f1f-adfe-4198e7c1f36b/assets/SBB.webp?v=0',
    imageSeed: 102,
    color: 'text-yellow-400'
  },
  {
    id: 'bitna',
    name: '한빛나 (Han Bitna)',
    role: '청부살인업자 / 기타리스트',
    age: 21,
    gender: '여성',
    mbti: 'ISTP',
    enneagram: '4w5 (458)',
    appearance: '민트색 머리, 적안, 붕대, 기타 가방',
    weapon: '저격총',
    background: '식품 대기업 총수의 외동딸이었으나, 8살 때 일가족이 몰살당하는 것을 목격. 유일한 생존자로 뒷골목에 숨어들어, 가족을 죽인 암살자를 동경하며 자신도 킬러가 되었다. "라이토"라는 예명의 얼굴 없는 가수로도 활동 중.',
    likes: ['메탈 음악', '콜라', '작곡'],
    dislikes: ['도둑', '사기꾼'],
    goal: '음악으로 성공하기 (아이러니하게도).',
    imageUrl: 'https://d3lna1f15u7pcs.cloudfront.net/media/characters/68bdbb1e-55c3-4f1f-adfe-4198e7c1f36b/assets/SCC.webp?v=0',
    imageSeed: 103,
    color: 'text-teal-400'
  },
  {
    id: 'dabin',
    name: '이다빈 (Lee Dabin)',
    role: '소매치기 / 무기상',
    age: 24,
    gender: '여성',
    mbti: 'ESTP',
    enneagram: '7w6 (738)',
    appearance: '적발, 금안, 날렵함',
    weapon: '권총',
    background: ' 월등한 신체 능력과 손재주로 무기 밀수와 소매치기를 업으로 삼고 있다. 최근 한 무명 가수에 빠져있다.',
    likes: ['모든 장르의 음악', '총기 개조'],
    dislikes: ['똑똑한 척하는 사람'],
    goal: '비밀이야 ♪',
    imageUrl: 'https://d3lna1f15u7pcs.cloudfront.net/media/characters/68bdbb1e-55c3-4f1f-adfe-4198e7c1f36b/assets/SDD.webp?v=0',
    imageSeed: 104,
    color: 'text-orange-500'
  },
  {
    id: 'chen',
    name: '첸 (Chen)',
    role: '흑룡파 보스의 외동딸',
    age: 22,
    gender: '여성',
    mbti: 'ESFP',
    enneagram: '7w6 (729)',
    appearance: '백발 장발, 녹안, 검은 치파오',
    weapon: '쌍권총',
    background: '스카이피아 최대 조폭 집단 "흑룡파"의 금지옥엽. 온실 속 화초처럼 자라 세상 물정을 모르고 사람을 잘 믿어 사기 당하기 일쑤다. 통제받는 삶이 싫어 가출을 밥 먹듯이 한다.',
    likes: ['도박', '와인', '가출'],
    dislikes: ['통제', '잔소리'],
    goal: '운명적인 연애 결혼하기.',
    imageUrl: 'https://d3lna1f15u7pcs.cloudfront.net/media/characters/68bdbb1e-55c3-4f1f-adfe-4198e7c1f36b/assets/SEE.webp?v=0',
    imageSeed: 105,
    color: 'text-green-500'
  }
];

export const LOCATIONS: Location[] = [
  {
    id: 'home',
    name: '자택 (U의 방)',
    description: '매달 1일, 60만원의 월세를 내지 못하면 쫓겨난다. 좁고 낡은 원룸이지만 스카이피아에서 유일하게 안전하다고 느껴지는 공간.',
    imageUrl: 'https://d3lna1f15u7pcs.cloudfront.net/media/characters/68bdbb1e-55c3-4f1f-adfe-4198e7c1f36b/assets/home.webp?v=0',
    imageSeed: 201
  },
  {
    id: 'brothel',
    name: '창관 (Red Light)',
    description: '욕망이 들끓는 거리. 이곳에서 근무하려면 "창녀 자격증"이 필수다. 유시아가 관리하는 구역으로, 돈만 있다면 무엇이든 살 수 있다.',
    imageUrl: 'https://d3lna1f15u7pcs.cloudfront.net/media/characters/68bdbb1e-55c3-4f1f-adfe-4198e7c1f36b/assets/sachan.webp?v=0',
    imageSeed: 202
  },
  {
    id: 'casino',
    name: '네온 카지노',
    description: '일확천금을 꿈꾸는 자들의 무덤. 첸이 자주 출몰하여 돈을 잃고 가는 곳이기도 하다. 뒷세계 자금이 세탁되는 주요 장소.',
    imageUrl: 'https://d3lna1f15u7pcs.cloudfront.net/media/characters/68bdbb1e-55c3-4f1f-adfe-4198e7c1f36b/assets/cazi.webp?v=0',
    imageSeed: 203
  },
  {
    id: 'gang',
    name: '흑룡파 본거지',
    description: '스카이피아를 지배하는 거대 조폭 집단. 무기 밀매, 청부 살인, 기업형 범죄의 중심지.',
    imageUrl: 'https://d3lna1f15u7pcs.cloudfront.net/media/characters/68bdbb1e-55c3-4f1f-adfe-4198e7c1f36b/assets/build.webp?v=0',
    imageSeed: 204
  }
];