

export interface Step {
  id: number;
  title: string;
  isCompleted: boolean;
  isLocked: boolean;
  startTime?: number;
}

export interface Tutorial {
  id: string;
  title: string;
  duration: string;
  category: string;
  imageUrl: string;
  description: string;
  steps: Step[];
  videoUrl?: string;
  ingredients?: {
    name: string;
    icon: string;
    details?: string;
  }[];
  isPopular?: boolean;
  isHighlight?: boolean;
}

export interface PopularLesson {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ChefTip {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

