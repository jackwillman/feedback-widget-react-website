export interface Feedback {
    id : string;
    type : string;
    comment : string;
    screenshot: string | null;
    userId: string | null;
};

export type FeedbackCreateData = Omit<Feedback, "id">;

export interface FeedbacksRepository {
    get : (userId : string) => Promise<Feedback[] | null>;
    create : (data : FeedbackCreateData) => Promise<void>;
};