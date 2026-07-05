import type { Experience, TranslateFn } from "@/types/experience";
import { TAGS } from "@/data/tags";

export function getExperience(t: TranslateFn): Experience[] {
  return [
    {
      title: t("main.workExperience.titleMcde"),
      company: t("main.workExperience.companyMcde"),
      description: t("main.workExperience.descriptionMcde"),
      date: t("main.workExperience.dateMcde"),
      project: [
        {
          img: {
            src: "/projects/mcde-catastro.webp",
            alt: t("main.workExperience.imageAltMcdeCatastro"),
          },
          description: t("main.workExperience.project2Mcde"),
          tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.REACT_LEAFLET, TAGS.SUPABASE],
        },
        {
          img: {
            src: "",
            alt: t("main.workExperience.imageAltMcdeVial"),
          },
          description: t("main.workExperience.project1Mcde"),
          linkProject: "https://www.sebamartinez.com.py/",
          tags: [
            TAGS.REACT,
            TAGS.TAILWIND,
            TAGS.REACT_LEAFLET,
            TAGS.SUPABASE,
            TAGS.QGIS,
          ],
        },
      ],
    },
    {
      title: t("main.workExperience.titleGeo"),
      company: t("main.workExperience.companyGeo"),
      description: t("main.workExperience.descriptionGeo"),
      date: t("main.workExperience.dateGeo"),
      project: {
        img: {
          src: "/projects/geostory.webp",
          alt: t("main.workExperience.imageAltGeo"),
        },
        tags: [
          TAGS.ANGULAR,
          // TAGS.PRIMENG,
          TAGS.NESTJS,
          TAGS.DOCKER,
          TAGS.POSTGRESQL,
        ],
      },
    },
    {
      title: t("main.workExperience.titleFdm"),
      company: t("main.workExperience.companyFdm"),
      description: t("main.workExperience.descriptionFdm"),
      date: t("main.workExperience.dateFdm"),
      project: {
        img: {
          src: "/projects/fdm.webp",
          alt: t("main.workExperience.imageAltFdm"),
        },
        tags: [
          TAGS.ANGULAR,
          // TAGS.PRIMENG,
          TAGS.DOTNET,
          TAGS.SQLSERVER,
        ],
      },
    },
    {
      title: t("main.workExperience.titleMoura"),
      company: t("main.workExperience.companyMoura"),
      description: t("main.workExperience.descriptionMoura"),
      link: t("main.workExperience.linkMoura"),
      linkText: t("main.workExperience.linkTextMoura"),
      date: t("main.workExperience.dateMoura"),
    },
  ];
}
