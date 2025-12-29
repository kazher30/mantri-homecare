
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceInfo?: string;
}

export interface HealthTip {
  category: string;
  content: string;
  title: string;
}

export enum Section {
  HERO = 'hero',
  SERVICES = 'services',
  WOUND_CARE = 'wound-care',
  TIPS = 'tips',
  CONTACT = 'contact'
}
