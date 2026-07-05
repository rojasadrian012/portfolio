import type { TranslateFn } from "@/types/experience";
import { TAGS } from "@/data/tags";

export function getProjects(t: TranslateFn) {
  return [
    {
      title: t("main.projects.titleXmenu"),
      description: t("main.projects.descriptionXmenu"),
      // link: "#",
      image: {
        src: "/projects/x-menu.webp",
        alt: t("main.projects.imageAltXmenu"),
      },
      tags: [
        TAGS.REACT,
        TAGS.TAILWIND,
        TAGS.NESTJS,
        TAGS.DOCKER,
        TAGS.POSTGRESQL,
      ],
    },
    {
      title: t("main.projects.titleQuickmock"),
      description: t("main.projects.descriptionQuickmock"),
      link: "https://www.quickmock.net",
      github: "https://github.com/Lemoncode/quickmock",
      image: {
        src: "/projects/quickmock.webp",
        alt: t("main.projects.imageAltQuickmock"),
      },
      tags: [TAGS.REACT, TAGS.REACT_KONVA],
    },
  ];
}
