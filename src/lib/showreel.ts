export type CategorySlug = "eventove-videa" | "reklamni-videa" | "firemni-videa";

export type ShowreelVideo = {
  title: string;
  duration: string;
  src: string;
  poster?: string;
  orientation?: "landscape" | "portrait";
  noteCs: string;
  noteEn: string;
};

export type ShowreelCategory = {
  slug: CategorySlug;
  titleCs: string;
  titleEn: string;
  introCs: string;
  introEn: string;
  videos: ShowreelVideo[];
};

export const SHOWREEL_CATEGORIES: ShowreelCategory[] = [
  {
    slug: "eventove-videa",
    titleCs: "Eventové videa",
    titleEn: "Event Videos",
    introCs: "Plesy, konference, jachty, hory. Cokoliv, kde se něco děje.",
    introEn: "Balls, conferences, yachts, mountains. Anywhere something's happening.",
    videos: [
      {
        title: "MOTO GP 2025",
        duration: "01:12",
        src: "/video/eventy/aftermovie-moto-gp.mp4",
        poster: "/images/posters/AFTERMOVIE MOTO GP.mp4.png",
        orientation: "portrait",
        noteCs: "aftermovie z moto GP",
        noteEn: "Moto GP aftermovie",
      },
      {
        title: "Aftermovie VUT plesu",
        duration: "00:48",
        src: "/video/eventy/aftermovie-s-logem-720p.m4v",
        poster: "/images/posters/Aftermovie (s logem).mp4.png",
        orientation: "landscape",
        noteCs: "aftermovie z nějvětšího plesu v české republice",
        noteEn: "Aftermovie from the biggest ball in the Czech Republic",
      },
      {
        title: "Buď ve FLOW 2025",
        duration: "00:56",
        src: "/video/eventy/flow-official-aftermovie-2025-720p.m4v",
        poster: "/images/posters/FLOW- OFFICIAL AFTERMOVIE 2025.mp4.png",
        orientation: "landscape",
        noteCs: "totální úlet, týden na moři 18 lodí. WOW",
        noteEn: "Total madness, a week at sea, 18 boats. WOW",
      },
    ],
  },
  {
    slug: "reklamni-videa",
    titleCs: "Reklamní videa",
    titleEn: "Commercial Videos",
    introCs: "Brandové spoty pro kampaně, social ads a performance creative.",
    introEn: "Brand spots for campaigns, social ads, and performance creatives.",
    videos: [
      {
        title: "I want this",
        duration: "00:30",
        src: "/video/reklamy/i-want-this-hq.m4v",
        poster: "/images/posters/reklamy/i-want-this-v7-table.png",
        noteCs: "Reklamní video",
        noteEn: "Commercial video",
      },
      {
        title: "Yummy burgers",
        duration: "00:20",
        src: "/video/reklamy/yummy-burgers-hq.m4v",
        poster: "/images/posters/reklamy/Yummy burgers .mp4.png",
        noteCs: "Reklamní video",
        noteEn: "Commercial video",
      },
      {
        title: "MORE KETO LESS SUGAR",
        duration: "00:15",
        src: "/video/reklamy/more-keto-less-sugar-hq.m4v",
        poster: "/images/posters/reklamy/MORE KETO LESS SUGAR.MOV.png",
        noteCs: "Reklamní video",
        noteEn: "Commercial video",
      },
    ],
  },
  {
    slug: "firemni-videa",
    titleCs: "Firemní videa",
    titleEn: "Corporate Videos",
    introCs: "tady taky něco bude, až to Mára dodělá",
    introEn: "Company profiles, hiring videos, and internal communication with a polished tone.",
    videos: [
      {
        title: "Company Story Film",
        duration: "01:45",
        src: "https://videos.pexels.com/video-files/3209298/3209298-hd_1920_1080_25fps.mp4",
        noteCs: "Kombinace interview + B-roll",
        noteEn: "Interview and B-roll combination",
      },
      {
        title: "Recruitment Campaign",
        duration: "01:05",
        src: "https://videos.pexels.com/video-files/6473668/6473668-hd_1920_1080_25fps.mp4",
        noteCs: "Employer branding pro hiring",
        noteEn: "Employer branding for hiring",
      },
      {
        title: "Factory Operations Edit",
        duration: "00:52",
        src: "https://videos.pexels.com/video-files/5512609/5512609-hd_1920_1080_25fps.mp4",
        noteCs: "Procesní video pro B2B prezentace",
        noteEn: "Process video for B2B presentations",
      },
    ],
  },
];

export function getShowreelCategory(slug: string) {
  return SHOWREEL_CATEGORIES.find((category) => category.slug === slug);
}
