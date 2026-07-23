export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  iconName: string;
  features: string[];
  specs: { label: string; value: string }[];
}

export interface IndustryItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  benefits: string[];
  applications: string[];
}

export interface QuoteFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
  deliveryDate?: string;
  location?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface StatisticItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}
