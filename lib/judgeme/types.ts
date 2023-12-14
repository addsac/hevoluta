export type Review = {
  id: number;
  title: string;
  body: string;
  rating: number;
  product_external_id: number;
  product_title: string;
  product_handle: string;
  reviewer: {
    id: number;
    email: string;
    name: string;
    phone: string;
    tags: string[];
    accepts_marketing: boolean;
    unsubscribed_at: string;
    external_id: number;
  };
  source: string;
  curated: string;
  hidden: boolean;
  verified: string;
  created_at: Date;
  updated_at: Date;
  ip_address: string;
  has_published_pictures: boolean;
  has_published_videos: boolean;
  pictures: {
    hidden: boolean;
    urls: {
      small: string;
      compact: string;
      huge: string;
      original: string;
    };
  }[];
};

export type ReviewResponse = {
  current_page: number;
  per_page: number;
  reviews: Review[];
};

export type CreateReviewResponse = {
  shop_domain: string;
  platform: string;
  id: number;
  email: string;
  name: string;
  reviewer_name_format: string;
  rating: number;
  title: string;
  body: string;
  cf_answers: CustomFieldAnswer[];
  picture_urls: string[]; // Assuming all URLs are strings. If not, adjust accordingly.
  ip_addr: string;
};

export type CustomFieldAnswer = {
  cf_question_id: number;
  value: string;
};