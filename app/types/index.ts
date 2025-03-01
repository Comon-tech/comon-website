export interface Actor {
    id: number;
    name: string;
    display_name: string;
    avatar_url: string;
    ai_interacted_at: string | null;
    xp: number;
    level: number;
    rank: number;
    gold: number;
    items: any[];
}

export type Actors = Actor[];
