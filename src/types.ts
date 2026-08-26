export interface ProjectSpec {
  camera?: string;
}

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  client?: string;
  artistOrClient?: string;
  role: string;
  category: 'MUSIC' | 'COMMERCIAL' | 'SHOW';
  year: string;
  views?: string;
  youtubeId?: string;
  videoUrl?: string;
  stillUrl: string;
  stills?: string[];
  synopsis: string;
  specs: ProjectSpec;
  credits?: ProjectCredit[];
  highlightBadge?: string;
}

export interface PressMention {
  outlet: string;
  headline: string;
  quote: string;
  tag: string;
  url?: string;
}
