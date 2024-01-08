export type Review = {
  id: number;
  score: number;
  votes_up: number;
  votes_down: number;
  content: string;
  title: string;
  sentiment: any;
  created_at: string; // ISO 8601 date format
  deleted: boolean;
  verified_buyer: any;
  source_review_id: any;
  custom_fields: any;
  product_id: number;
  is_incentivized: boolean;
  incentive_type: any;
  images_data: any;
  comment: any;
  user: {
    user_id: any;
    social_image: any;
    user_type: any;
    is_social_connected: number;
    display_name: string;
  };
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
  picture_urls: string[];
  ip_addr: string;
};

export type CustomFieldAnswer = {
  cf_question_id: number;
  value: string;
};
