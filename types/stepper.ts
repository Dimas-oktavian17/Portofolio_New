import type { MediumProps } from './support';

export interface Timeline {
    title: string;
    description: string;
    longDescription?: string;
    dateStart: Date; // Changed from string
    dateEnd: Date;   // Changed from string
    level?: Levels;
    tech?: Array<string>;
    images?: Array<Images>;
}

export interface Images {
    id: number;
    url: string;
}
export enum LevelEnum {
    Basic = "Basic",
    Medium = "Medium",
    High = "High"
}

export interface Levels {
    id: number;
    name: LevelEnum;
}
export interface ProjectData {
    picture?: string;
    title: string;
    dateStart: Date; // Changed from string
    dateEnd: Date;   // Changed from string
    description: string;
    longDescription?: string;
    links?: Array<{
        link: string;
        live: string;
        preview: string;
    }>;
    images?: Array<Images>;
    linkYt?: string;
    level?: Levels
    tech?: Array<string>;
    MediumProps?: MediumProps[];
}
export interface icons {
    name?: string
    style?:string
}
export interface buttonIcons {
    icons?: Array<icons>
}