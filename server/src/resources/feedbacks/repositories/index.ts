type Type = string;
type Comment = string;
type Screenshot = string;
type FeedbackId = string;
export type UserId = string;

export interface Feedback {
    id : FeedbackId;
    type : Type;
    comment : Comment;
    screenshot: Screenshot | null;
    userId: UserId | null;
};

export type FeedbackCreateData = Omit<Feedback, "id">;

export interface FeedbacksRepository {
    get : (userId : UserId) => Promise<Feedback[] | null>;
    create : (data : FeedbackCreateData) => Promise<void>;
};