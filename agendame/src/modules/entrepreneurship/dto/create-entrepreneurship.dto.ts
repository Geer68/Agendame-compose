export class CreateEntrepreneurshipDto {
  name?: string;
  category?: string;
  description?: string;
  img?: string;
  social_links?: object;
  cancellation_policy?: string;
  reminder_text?: string;
  mp_token?: string;
  mp_interest_rate?: number;
  account_id: number;
}
