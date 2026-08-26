import { Project, PressMention } from '../types';
import sberbankAdImg from '../assets/images/sberbank_ad_final_1787727855659.jpg';
import forbesNilettoImg from '../assets/images/forbes.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'chbd-intro-branding',
    title: 'ЧТО БЫЛО ДАЛЬШЕ? (ЧБД) — BRAND IDENTITY & SHOW INTRO',
    client: 'LABELCOM / TNT PREMIER',
    artistOrClient: 'ЧБД / LABELCOM',
    role: 'Creative Director & Visual Design',
    category: 'SHOW',
    year: '2021',
    youtubeId: 'IINnt0YfCuQ',
    stillUrl: 'https://i.ytimg.com/vi/IINnt0YfCuQ/maxresdefault.jpg',
    stills: [
      'https://i.ytimg.com/vi/IINnt0YfCuQ/maxresdefault.jpg'
    ],
    highlightBadge: '#1 COMEDY SHOW',
    synopsis: 'Visual identity, motion design, and opening title sequences for "Что Было Дальше?" — the most influential comedy show format in Eastern Europe, created in collaboration with TNT.',
    specs: {
      camera: 'ARRI Alexa Mini LF + VFX'
    },
    credits: [
      { role: 'Visual Branding & Intro', name: 'Artem Sambura (Tom)' },
      { role: 'Network / Platform', name: 'TNT / Labelcom' }
    ]
  },
  {
    id: 'niletto-lyubimka',
    title: 'NILETTO — ЛЮБИМКА',
    client: 'NILETTO / ZION MUSIC',
    artistOrClient: 'NILETTO',
    role: 'Director & Editor',
    category: 'MUSIC',
    year: '2020',
    youtubeId: 'xSgT4ZtT5M0',
    stillUrl: 'https://i.ytimg.com/vi/xSgT4ZtT5M0/maxresdefault.jpg',
    stills: [
      'https://i.ytimg.com/vi/xSgT4ZtT5M0/maxresdefault.jpg',
      forbesNilettoImg
    ],
    highlightBadge: 'HIT OF THE YEAR',
    synopsis: 'Breakout music video that propelled the artist to the cover of Forbes 50 Stars and defined the modern visual style of Eastern European pop cinema.',
    specs: {
      camera: 'RED Helium 8K S35'
    },
    credits: [
      { role: 'Director', name: 'Artem Sambura (Tom)' },
      { role: 'Editor', name: 'Artem Sambura' },
      { role: 'Artist', name: 'NILETTO' }
    ]
  },
  {
    id: 'mts-tariff-x',
    title: 'MTS TELECOM — TARIFF X ft. BIG BABY TAPE',
    client: 'MTS TELECOM',
    artistOrClient: 'MTS Telecom x Big Baby Tape',
    role: 'Director',
    category: 'COMMERCIAL',
    year: '2021',
    youtubeId: 'eW0yDDRXTP4',
    stillUrl: 'https://i.ytimg.com/vi/eW0yDDRXTP4/maxresdefault.jpg',
    stills: [
      'https://i.ytimg.com/vi/eW0yDDRXTP4/maxresdefault.jpg'
    ],
    highlightBadge: 'BRAND CAMPAIGN',
    synopsis: 'Commercial campaign for the mobile telecommunications provider, fusing youth hip-hop subculture with high-impact corporate broadcast aesthetics.',
    specs: {
      camera: 'RED Monstro 8K VV'
    },
    credits: [
      { role: 'Director', name: 'Artem Sambura (Tom)' },
      { role: 'Agency / Client', name: 'MTS Telecommunications' },
      { role: 'Featuring', name: 'Big Baby Tape' }
    ]
  },
  {
    id: 'sberbank-future',
    title: 'SBERBANK — COMMERCIAL & ECOSYSTEM CAMPAIGN',
    client: 'SBERBANK',
    artistOrClient: 'Sberbank Innovation',
    role: 'Director & Editor',
    category: 'COMMERCIAL',
    year: '2021',
    youtubeId: 'FP5Awwf0tZI',
    stillUrl: sberbankAdImg,
    stills: [
      sberbankAdImg
    ],
    highlightBadge: 'COMMERCIAL CAMPAIGN',
    synopsis: 'Large-scale commercial film directed for Sberbank, fusing dynamic visual storytelling with high-end commercial production value.',
    specs: {
      camera: 'RED Monstro 8K VV'
    },
    credits: [
      { role: 'Director & Editor', name: 'Artem Sambura (Tom)' },
      { role: 'Client', name: 'Sberbank' }
    ]
  },
  {
    id: 'alyona-alyona-pushka',
    title: 'alyona alyona — ПУШКА',
    client: 'HITRECORD / DEF JAM POLAND',
    artistOrClient: 'alyona alyona',
    role: 'Director & Editor',
    category: 'MUSIC',
    year: '2019',
    youtubeId: '7sYUZEPIb2E',
    stillUrl: 'https://i.ytimg.com/vi/7sYUZEPIb2E/hqdefault.jpg',
    stills: [
      'https://i.ytimg.com/vi/7sYUZEPIb2E/hqdefault.jpg'
    ],
    highlightBadge: 'THE NEW YORK TIMES · VOGUE',
    synopsis: 'The breakout visual anthem that drew international critical acclaim from The New York Times, Vogue, and TIME magazine, marking a pivotal moment in contemporary European hip-hop cinema.',
    specs: {
      camera: 'Sony Alpha'
    },
    credits: [
      { role: 'Director', name: 'Artem Sambura (Tom)' },
      { role: 'Editor', name: 'Artem Sambura' }
    ]
  },
  {
    id: 'siromaha-siromag',
    title: 'KOZAK SIROMAHA — НОРМАЛЬНО',
    client: 'ENKO MUSIC',
    artistOrClient: 'KOZAK SIROMAHA',
    role: 'Director & Editor',
    category: 'MUSIC',
    year: '2022',
    youtubeId: 'CiK7yj5IN60',
    stillUrl: 'https://i.ytimg.com/vi/CiK7yj5IN60/maxresdefault.jpg',
    stills: [
      'https://i.ytimg.com/vi/CiK7yj5IN60/maxresdefault.jpg'
    ],
    highlightBadge: 'FOLK & HIP-HOP ROOTS',
    synopsis: 'Original visual work combining authentic Ukrainian folk heritage, shamanic aesthetics, and modern cinematic styling with ENKO Music.',
    specs: {
      camera: 'ARRI Alexa Mini / Vintage Glass'
    },
    credits: [
      { role: 'Director', name: 'Artem Sambura (Tom)' },
      { role: 'Artist', name: 'KOZAK SIROMAHA' },
      { role: 'Label', name: 'ENKO' }
    ]
  },
  {
    id: 'brutalbois-feel-ya',
    title: 'BRUTALBOIS — FEEL YA',
    client: 'DELTA ARTHUR / BRUTALBOIS',
    artistOrClient: 'BRUTALBOIS',
    role: 'Director & Editor',
    category: 'MUSIC',
    year: '2022',
    youtubeId: 'XApdT38qQwY',
    stillUrl: 'https://i.ytimg.com/vi/XApdT38qQwY/maxresdefault.jpg',
    stills: [
      'https://i.ytimg.com/vi/XApdT38qQwY/maxresdefault.jpg'
    ],
    highlightBadge: 'FILM LOOK',
    synopsis: 'Raw street energy, experimental montage pacing, and analog color science exploring underground counter-currents.',
    specs: {
      camera: 'Blackmagic Cinema Camera'
    },
    credits: [
      { role: 'Director & Colorist', name: 'Artem Sambura (Tom)' }
    ]
  },
  {
    id: 'kalush-ne-marynui',
    title: 'KALUSH — НЕ МАРИНУЙ',
    client: 'DEF JAM / ENKO',
    artistOrClient: 'KALUSH',
    role: 'Director & Editor',
    category: 'MUSIC',
    year: '2019',
    youtubeId: 'AqG2pkbRgr8',
    stillUrl: 'https://i.ytimg.com/vi/AqG2pkbRgr8/maxresdefault.jpg',
    stills: [
      'https://i.ytimg.com/vi/AqG2pkbRgr8/maxresdefault.jpg'
    ],
    highlightBadge: 'ORIGIN STORY · EUROVISION WINNERS',
    synopsis: 'The debut breakout music video for KALUSH filmed on the streets of their home city, establishing the iconic visual DNA that launched their meteoric rise to global prominence and eventual Eurovision victory.',
    specs: {
      camera: 'Sony Alpha'
    },
    credits: [
      { role: 'Director', name: 'Artem Sambura (Tom)' },
      { role: 'Artist', name: 'KALUSH' }
    ]
  }
];

export const PRESS_MENTIONS: PressMention[] = [
  {
    outlet: 'FORBES',
    headline: '50 STARS OF SHOW BUSINESS & MUSIC',
    quote: 'NILETTO crowned among top artists — his breakout hit video defined an entire generation of pop music and screen style.',
    tag: 'COVER STORY & FEATURE'
  },
  {
    outlet: 'THE NEW YORK TIMES',
    headline: 'POP ACTS WHO MATTER RIGHT NOW',
    quote: 'Electrifying, fiercely authentic visual identity and cinematic storytelling capturing global recognition.',
    tag: 'GLOBAL SPOTLIGHT'
  },
  {
    outlet: 'TIME',
    headline: 'NEXT GENERATION LEADERS & VISIONS',
    quote: 'Groundbreaking screen energy and cultural authenticity that bridges regional spirit with global scale.',
    tag: 'CULTURE FEATURE'
  },
  {
    outlet: 'VOGUE',
    headline: 'AESTHETIC REVOLUTION IN SCREEN DIRECTION',
    quote: 'Uncompromising visual boldness, raw street fashion aesthetics, and precision cinematography.',
    tag: 'FASHION & CULTURE'
  },
  {
    outlet: 'BBC',
    headline: 'EUROVISION TRIUMPH & VISUAL ROOTS',
    quote: 'From underground visual production to global arena anthems, showcasing extraordinary creative direction.',
    tag: 'BROADCAST FEATURE'
  },
  {
    outlet: 'BILLBOARD',
    headline: 'CHART-TOPPING POWER & VIDEO DIRECTION',
    quote: 'Spectacular visual execution with razor-sharp direction, memorable imagery and unforgettable hooks.',
    tag: 'INDUSTRY PROFILE'
  },
  {
    outlet: 'THE GUARDIAN',
    headline: 'THE NEW WAVE OF DIRECTORS & CREATORS',
    quote: 'Innovative, fast-paced directing style setting new international benchmarks for music videos and comedy entertainment.',
    tag: 'CRITIC REVIEW'
  }
];
