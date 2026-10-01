import type { CourseCardProps } from "@/components/dashboard/hero-section-2/hero-section-2-card";

/** Profile information for a creator */
export interface CreatorProfile {
  /** Display name shown as the page heading */
  name: string;
  /** Short role / discipline line beneath the name */
  tagline: string;
  /** Path to the creator's avatar image */
  avatar: string;
  /** One or more bio paragraphs rendered in order */
  bio: string[];
}

/** Stat counters shown in the creator banner footer */
export interface CreatorStats {
  productCount: number;
  followerCount: number;
}

/** Full data shape for a creator page */
export interface CreatorData {
  profile: CreatorProfile;
  stats: CreatorStats;
  courses: CourseCardProps[];
}
