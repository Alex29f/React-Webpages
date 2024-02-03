export interface Testimonial {
  id: number;
  clientName: string;
  clientTitle: string;
  avatar: string;
  testimonialText: string;
  rating: number;
}

export interface Company {
  id: number;
  name: string;
  logo: string;
  link: string;
}

export interface FormFieldModel {
  name: string;
  label: string;
  type: string;
  validation?: any; // Add validation rules here
}

export interface ProjectBase {
  id?: number;
  date: string;
  imageUrl: string;
  videoUrl: string;
  link: string;
}
export interface ProjectTranslation {
  language: string;
  title: string;
  subtitle: string;
  description: string;
  results: string;
}
export interface ProjectFormData {
  date: string;
  imageUrl: string;
  videoUrl: string;
  link: string;
  lv: {
    title: string;
    subtitle: string;
    description: string;
    results: string;
  };
  ru: {
    title: string;
    subtitle: string;
    description: string;
    results: string;
  };
}
export interface ProjectResponse extends ProjectBase {
  id: number;
  project_translations: ProjectTranslation[];
}

export interface Project extends ProjectBase {
  title: string;
  subtitle: string;
  description: string;
  results: string;
  language: string;
}
export const projectsMock: Project[] = [
  {
    id: 1,
    title: "Company 1",
    subtitle: "B2B Market",
    description:
      "Devo focuses exclusively on the B2B market and serves professionals and specialty stores.",
    date: "2022-01-01",
    results: "Expanded market reach",
    imageUrl:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Coca_Cola_Marketing_Strategy_2022.jpg",
    link: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Coca_Cola_Marketing_Strategy_2022.jpg",
    videoUrl:
      "https://gnqortpqkhncljsfpdab.supabase.co/storage/v1/object/public/Data/Snaptik.app_7317211569174138145.mp4?t=2024-01-04T08%3A59%3A05.949Z",
    language: "en",
  },
  {
    id: 2,
    title: "Company 2",
    subtitle: "Creative Woodworks",
    description: "A company full of creative energy with love for wood!",
    date: "2023-05-12",
    results: "Innovative designs",
    imageUrl:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Coca_Cola_Marketing_Strategy_2022.jpg",
    link: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Coca_Cola_Marketing_Strategy_2022.jpg",
    videoUrl:
      "https://res.cloudinary.com/dwxzwubw8/video/upload/v1703872764/mwhpaftznyqsx55q9wvy.mp4",
    language: "en",
  },
  {
    id: 3,
    title: "Company 3",
    subtitle: "Creative Woodworks2",
    description: "222A company full of creative energy with love for wood!",
    date: "2023-05-12",
    results: "Innovative designs",
    imageUrl:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Coca_Cola_Marketing_Strategy_2022.jpg",
    link: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Coca_Cola_Marketing_Strategy_2022.jpg",
    videoUrl:
      "https://res.cloudinary.com/dwxzwubw8/video/upload/v1703872764/mwhpaftznyqsx55q9wvy.mp4",
    language: "en",
  },
  {
    id: 4,
    title: "Company 4",
    subtitle: "Creative Woodworks3",
    description: "333A company full of creative energy with love for wood!",
    date: "2023-05-12",
    results: "Innovative designs",
    imageUrl:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Coca_Cola_Marketing_Strategy_2022.jpg",
    link: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Coca_Cola_Marketing_Strategy_2022.jpg",
    videoUrl:
      "https://res.cloudinary.com/dwxzwubw8/video/upload/v1703872764/mwhpaftznyqsx55q9wvy.mp4",
    language: "en",
  },
];
export const companyMock: Company[] = [
  {
    id: 1,
    name: "Mustangs Autoskola",
    logo: "https://www.mustangs.lv/wp-content/themes/mustangs/img/other/logo.png",
    link: "https://www.mustangs.lv/",
  },
  {
    id: 2,
    name: "Dr. SOLOMATINA Acu centrs",
    logo: "https://acucentrs.lv/wp-content/themes/acucentrs/images/logo-lv.svg",
    link: "https://acucentrs.lv/",
  },
  {
    id: 3,
    name: "PrimeIT Solutions",
    logo: "https://res.cloudinary.com/dwxzwubw8/image/upload/v1703886789/qgaae6b9xdmdqxcw03i8.png",
    link: "https://primeit.lv/",
  },
  // Add more companies as needed
];
export const testimonialsMock: Testimonial[] = [
  {
    id: 1,
    clientName: "John Doe",
    testimonialText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    clientTitle: "CEO",
    rating: 4.5,
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    clientName: "Jane Smith",
    testimonialText:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    clientTitle: "CTO",
    rating: 4.5,
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    clientName: "John Doevich",
    testimonialText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    clientTitle: "CEO",
    rating: 4.5,
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    clientName: "Jane Smithovich",
    testimonialText:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    clientTitle: "CTO",
    rating: 4.5,
    avatar: "https://via.placeholder.com/150",
  },
  // Add more testimonials as needed
];
