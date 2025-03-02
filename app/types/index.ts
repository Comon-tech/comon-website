export interface Actor {
    id: number;
    name: string;
    display_name: string;
    display_avatar_url: string;
    avatar_url: string;
    ai_interacted_at: string | null;
    xp: number;
    level: number;
    rank: number;
    gold: number;
    items: object[];
}

export type Actors = Actor[];
