export interface FeedbackData {
    id : string;
    type : string;
    comment : string;
    screenshot: string | null;
    userId: string | null;
};

export type FeedbackCreateData = Omit<FeedbackData, "id">;

export interface FeedbacksRepository {
    get : (userId : string) => Promise<FeedbackData[] | null>;
    create : (data : FeedbackCreateData) => Promise<void>;
};