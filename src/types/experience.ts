import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import type { useTranslations } from "@/i18n/utils";

export type TranslateFn = ReturnType<typeof useTranslations>;

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
    description?: string;
    linkProject?: string;
};

export interface Experience {
    title: string;
    company: string;
    description: string;
    link?: string;
    linkText?: string;
    date: string;
    project?: Project | Project[];
}
