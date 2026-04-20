export type CategorySlug = "eventove-videa" | "reklamni-videa" | "firemni-videa";

export type ShowreelVideo = {
  title: string;
  duration: string;
  youtubeId: string;
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
        title: "Buď ve FLOW 2025",
        duration: "",
        youtubeId: "KekEKVCct5c",
        orientation: "landscape",
        noteCs: "Totální úlet, týden na moři 18 lodí. WOW",
        noteEn: "A total ride, a week at sea with 18 boats. WOW",
      },
      {
        title: "Firemní akce",
        duration: "",
        youtubeId: "e5SWLBMSu1I",
        orientation: "portrait",
        noteCs: "Úlet na horách",
        noteEn: "A wild company event in the mountains",
      },
      {
        title: "Firemní ples",
        duration: "",
        youtubeId: "9nQCyPVEi84",
        orientation: "landscape",
        noteCs: "Ples v duchu osmdesátek. Burlesky, zábava a tak.",
        noteEn: "An eighties-style ball with burlesque, entertainment, and the works.",
      },
      {
        title: "Aftermovie VUT plesu",
        duration: "",
        youtubeId: "y-5Tc9B3esY",
        orientation: "landscape",
        noteCs: "Aftermovie z největšího plesu v České republice",
        noteEn: "Aftermovie from the biggest ball in the Czech Republic",
      },
      {
        title: "Camea",
        duration: "",
        youtubeId: "cXrWnK4niJE",
        orientation: "landscape",
        noteCs: "Oslava 30 let od založení firmy",
        noteEn: "A celebration of 30 years since the company was founded",
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
        title: "Nikk services",
        duration: "",
        youtubeId: "0Eg2YkJj7hU",
        noteCs: "Video na web stavební firmy",
        noteEn: "A website video for a construction company",
      },
      {
        title: "Yummy burgers",
        duration: "",
        youtubeId: "qDGTCtiquAc",
        noteCs: "Reklamní video",
        noteEn: "Commercial video",
      },
      {
        title: "I want this",
        duration: "",
        youtubeId: "L1U3r3TTbDY",
        noteCs: "Reklamní video",
        noteEn: "Commercial video",
      },
    ],
  },
  {
    slug: "firemni-videa",
    titleCs: "Firemní videa",
    titleEn: "Corporate Videos",
    introCs: "Videa na zakázku pro firmy, ať už hiringové, case studies, nebo třeba ukázka prostor či produktu.",
    introEn: "Custom videos for companies, from hiring films and case studies to showcases of spaces or products.",
    videos: [
      {
        title: "Benefit",
        duration: "",
        youtubeId: "ptaKhyRVXr0",
        noteCs: "Firemní náborové video",
        noteEn: "Corporate recruitment video",
      },
      {
        title: "4 sestry & Jackies",
        duration: "",
        youtubeId: "KJ5uEdFmoGA",
        noteCs: "Case study",
        noteEn: "Case study",
      },
      {
        title: "Anond Performance",
        duration: "",
        youtubeId: "5TXYo1xB0Qo",
        noteCs: "Ukázka showroomu",
        noteEn: "Showroom showcase",
      },
    ],
  },
];

export function getShowreelCategory(slug: string) {
  return SHOWREEL_CATEGORIES.find((category) => category.slug === slug);
}
