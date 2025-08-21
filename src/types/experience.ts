import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface Tag {
    name: string;
    class: string;
    icon: AstroComponentFactory;
}

export interface Project {
    img: {
        src: string;
        alt: string;
    };
    tags: Tag[];
};

export interface Experience {
    title: string;
    company: string;
    description: string;
    link?: string;
    date: string;
    project?: Project
}