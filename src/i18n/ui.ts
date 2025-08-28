export const defaultLang = 'en';
export const languages = {
  es: "Español",
  en: "English",
  pt: "Português",
}

type UiLanguage = {
  [key: string]: string | UiLanguage;
};

export const ui: { [lang: string]: UiLanguage } = {
  en: {
    "header.nav.about": "About me",
    "header.nav.projects": "Projects",
    "header.nav.experience": "Experience",
    "header.nav.contact": "Contact",
    "hero.availability": "Available to work",
    "hero.title": "Hey, I'm Adrian",
    "hero.description": "+2 years of experience. <strong>Full-stack Developer</strong> From Ciudad del Este, Paraguay 🇵🇾. Specialized in creating unique solutions.",
    "hero.contactme": "Contact me",
    "main.workExperience": "Work Experience",
    "main.projects": "Projects",
    "main.me": "About Me",
    "main.workExperience.dateMcde": "Currently...",
    "main.workExperience.titleMcde": "Full-stack Developer",
    "main.workExperience.companyMcde": "Municipalidad de Ciudad del Este",
    "main.workExperience.descriptionMcde": "Development of an interactive city map for updating street names; contributed to property updates using QGIS and integrated geospatial features with modern frontend frameworks.",
    "main.workExperience.linkMcde": "#",
    "main.workExperience.linkTextMcde": "Learn more",
    "main.workExperience.dateGeo": "October 2024",
    "main.workExperience.titleGeo": "Full-stack Developer",
    "main.workExperience.companyGeo": "GeoStory (Freelancer)",
    "main.workExperience.descriptionGeo": "Interactive app to facilitate history and geography learning for sixth-grade students. I implemented unlockable thematic levels, scoring logic using NestJS, PostgreSQL, and TypeORM, and an engaging interface using Angular and Lottie animations. I also developed dynamic, real-time leaderboards.",
    "main.workExperience.linkGeo": "#",
    "main.workExperience.linkTextGeo": "Learn more",
    "main.workExperience.dateFdm": "March 2024",
    "main.workExperience.titleFdm": "Full-stack Developer",
    "main.workExperience.companyFdm": "Farmacia Divina Misericordia (Freelancer)",
    "main.workExperience.descriptionFdm": "Inventory management system for small pharmacies. It included stock control, generation of regulatory reports in Excel using DotNetCore.NPOI, ticket and PDF report creation using PdfMake, and an interactive control panel using Angular and .NET.",
    "main.workExperience.dateMoura": "February 2023",
    "main.workExperience.titleMoura": "Full-stack Developer",
    "main.workExperience.companyMoura": "Moura Management Systems",
    "main.workExperience.descriptionMoura": "Participation in the development of business management modules. I designed interfaces with Angular, developed backend logic with Visual Basic and ASP.NET, fixed bugs, generated Excel reports, and collaborated in an agile environment using GitLab and Swagger.",
    "main.workExperience.linkMoura": "https://www.jnmoura.com.br/",
    "main.workExperience.technologies": "Technologies and Tools",
    "main.projects.titleXmenu": "Online Catalog for Restaurants",
    "main.projects.descriptionXmenu": "Responsive web application that functions as a digital catalog for restaurants. It allows users to explore menus organized by categories, view addresses, and locate the venues. Users can select dishes and add them to a cart; upon checkout, the app generates the order and sends it directly to WhatsApp for confirmation, without processing online payments.",
    "main.projects.titleQuickmock": "Quickmock",
    "main.projects.descriptionQuickmock": "Open-source tool for simulating low-fidelity user interfaces. I actively contributed by reviewing and troubleshooting issues in the repository, as well as implementing new features using React, TypeScript, and React Konva to integrate interactive SVG-based components.",
    "main.aboutMe": `
      <p>
        I started my training in <strong>Systems Analysis</strong>, but my true passion for programming was born during an intensive course in <strong>Brazil</strong>. It was a unique challenge; I was the only one who didn’t speak Portuguese well in a program conducted entirely in <strong>Portuguese</strong>, but that experience allowed me to learn from exceptional professors and acquire knowledge in technologies like <strong>Angular</strong> and <strong>.NET</strong>. Upon finishing, I was selected for my first job as a remote developer.
      </p>
      <p>
        With over <strong>2 years of experience</strong>, I work in <strong>frontend and fullstack development</strong>, building web applications with <strong>React</strong>, <strong>Angular</strong>, <strong>Nest.js</strong>, <strong>.NET</strong>, and <strong>PostgreSQL</strong>. I have participated in various projects, from <strong>gamification</strong> applications to enterprise resource planning systems. My experience includes working in agile teams with <strong>Scrum</strong> methodologies, and I am currently exploring tools like <strong>Docker</strong> and <strong>artificial intelligence</strong> to improve my workflow.
      </p>
      <p>
        My focus has always been on delivering quality solutions by working <strong>collaboratively</strong> to generate real value in every project. Although I handle the full stack, I find my greatest passion in <strong>frontend</strong> due to its visual and creative component. When I’m not programming, I enjoy <strong>volleyball</strong>, geopolitics, technology, and <strong>video games</strong>.
      </p>
      `,
    "themeDark": "Light",
    "themeLight": "Dark",
    "themeSystem": "System",
    "layout.title": "Adrian's Portfolio - Web Developer and Programmer with 2+ years of experience",
    "layout.description": "Hire Adrian to create your web or mobile application. Web Developer and Content Creator. Specialized in creating unique applications.",
    "footer.copyright": "Almost all rights reserved",
  },
  es: {
    "header.nav.about": "Sobre mí",
    "header.nav.projects": "Proyectos",
    "header.nav.experience": "Experiencia",
    "header.nav.contact": "Contacto",
    "hero.availability": "Disponible para trabajar",
    "hero.title": "Hola, soy Adrian",
    "hero.description": "+2 de años de experiencia. <strong>Desarrollador Fullstack</strong> De Ciudad del Este, Paraguay 🇵🇾. Especializado en crear soluciones únicas.",
    "hero.contactme": "Contáctame",
    "main.workExperience": "Experiencia laboral",
    "main.projects": "Proyectos",
    "main.me": "Sobre mí",
    "main.workExperience.dateMcde": "Actualmente...",
    "main.workExperience.titleMcde": "Desarrollador Fullstack",
    "main.workExperience.companyMcde": "Municipalidad de Ciudad del Este",
    "main.workExperience.descriptionMcde": "Desarrollo de un mapa interactivo de la ciudad para actualizar nombres de calles, contribuí para actualizar propiedades usando QGIS e integré recursos geoespaciales con frameworks frontend modernos.",
    "main.workExperience.linkMcde": "#",
    "main.workExperience.linkGeo": "#",
    "main.workExperience.linkTextGeo": "Saber más",
    "main.workExperience.linkTextMcde": "Saber más",
    "main.workExperience.dateGeo": "octubre 2024",
    "main.workExperience.titleGeo": "Desarrollador Fullstack",
    "main.workExperience.companyGeo": "GeoStory (Freelancer)",
    "main.workExperience.descriptionGeo": "Aplicación interactiva para facilitar el aprendizaje de historia y geografía en estudiantes de sexto grado. Implementé niveles temáticos desbloqueables, lógica de puntuación con NestJS, PostgreSQL y TypeORM, y una interfaz atractiva con Angular y animaciones Lottie. También desarrollé tablas de clasificación dinámicas en tiempo real.",
    "main.workExperience.dateFdm": "marzo 2024",
    "main.workExperience.titleFdm": "Desarrollador FullStack",
    "main.workExperience.companyFdm": "Farmacia Divina Misericordia (Freelancer)",
    "main.workExperience.descriptionFdm": "Sistema de gestión de inventarios, ventas y reportes para pequeñas farmacias. Incluyó control de stock, generación de reportes regulatorios en Excel con DotNetCore.NPOI, creación de tickets y reportes PDF con PdfMake, y diseño de un panel de control interactivo con Angular y .NET.",
    "main.workExperience.dateMoura": "febrero 2023",
    "main.workExperience.titleMoura": "Desarrollador FullStack",
    "main.workExperience.companyMoura": "Moura Sistemas de Gestão",
    "main.workExperience.descriptionMoura": "Participación en el desarrollo de módulos de gestión empresarial. Diseñé interfaces con Angular, desarrollé lógica en backend con Visual Basic y ASP.NET, resolví bugs, generé reportes Excel, y colaboré en un entorno ágil utilizando GitLab y Swagger.",
    "main.workExperience.technologies": "Tecnologías y Herramientas",
    "main.workExperience.linkMoura": "https://www.jnmoura.com.br/",
    "main.projects.titleXmenu": "Catálogo Online para Restaurantes",
    "main.projects.descriptionXmenu": "Aplicación web responsive que funciona como catálogo digital para restaurantes. Permite explorar menús organizados por categorías, visualizar direcciones y localizar los locales. Los usuarios pueden seleccionar platos y añadirlos a un carrito; al finalizar, la app genera el pedido y lo envía directamente a WhatsApp para su confirmación, sin procesar pagos en línea.",
    "main.projects.titleQuickmock": "Quickmock",
    "main.projects.descriptionQuickmock": "Herramienta de código abierto para la simulación de interfaces de usuario de baja fidelidad. Contribuí activamente revisando y solucionando problemas en el repositorio, además de implementar nuevas funcionalidades usando React, TypeScript y React Konva para integrar componentes interactivos basados en SVG.",
    "main.aboutMe": `
      <p>
        Comencé mi formación en <strong>Análisis de Sistemas</strong>, pero mi
        verdadera pasión por la programación nació durante un curso intensivo en <strong
          >Brasil</strong
        >. Fue un desafío único, era el único que no hablaba bien portugues en un
        programa dictado completamente en <strong>portugués</strong>, pero esa
        experiencia me permitió aprender de profesores excepcionales y adquirir
        conocimientos en tecnologías como <strong>Angular</strong> y <strong
          >.NET</strong
        >. Al finalizar, fui seleccionado para mi primer empleo como desarrollador
        remoto.
      </p>
      <p>
        Con más de <strong>2 años de experiencia</strong>, trabajo en desarrollo <strong
          >frontend y fullstack</strong
        >, construyendo aplicaciones web con <strong>React</strong>, <strong
          >Angular</strong
        >, <strong>Nest.js</strong>, <strong>.NET</strong> y <strong
          >PostgreSQL</strong
        >. He participado en proyectos diversos, desde aplicaciones de <strong
          >gamificación</strong
        > hasta sistemas de gestión empresarial. Mi experiencia incluye trabajo en
        equipos ágiles con metodologías <strong>Scrum</strong>, y actualmente
        exploro herramientas como <strong>Docker</strong> e <strong
          >inteligencia artificial</strong
        > para mejorar mi flujo de trabajo.
      </p>

      <p>
        Mi enfoque siempre ha sido entregar soluciones de calidad trabajando de
        forma <strong>colaborativa</strong> para generar valor real en cada proyecto.
        Aunque manejo el stack completo, encuentro mi mayor pasión en el <strong
          >frontend</strong
        > por su componente visual y creativo. Cuando no estoy programando, disfruto
        del <strong>voleibol</strong>, geopolítica, tecnología y <strong>videojuegos</strong>.
      </p>
      `,
    "themeDark": "Oscuro",
    "themeLight": "Claro",
    "themeSystem": "Sistema",
    "layout.title": "Porfolio de Adrian - Desarrollador y Programador Web con +2 años de experiencia.",
    "layout.description": "Contrata a adrian para crear tu aplicación web o móvil. Desarrollador Web y Creador de Contenido. Especializado en crear aplicaciones únicas.",
    "footer.copyright": "Casi todos los derechos reservados",
  },
  pt: {
    "header.nav.about": "Sobre mim",
    "header.nav.projects": "Projetos",
    "header.nav.experience": "Experiência",
    "header.nav.contact": "Contato",
    "hero.availability": "Disponível para trabalhar",
    "hero.title": "Olá, eu sou Adrian",
    "hero.description": "+2 anos de experiência. <strong>Desenvolvedor Fullstack</strong> De Ciudad del Este, Paraguay 🇵🇾. Especializado em criar soluções únicas.",
    "hero.contactme": "Contate-me",
    "main.workExperience": "Experiência laboral",
    "main.projects": "Projetos",
    "main.me": "Sobre mim",
    "main.workExperience.dateMcde": "Atualmente...",
    "main.workExperience.titleMcde": "Desenvolvedor Fullstack",
    "main.workExperience.companyMcde": "Municipalidade de Ciudad del Este",
    "main.workExperience.descriptionMcde": "Desenvolvimento de um mapa interativo da cidade para atualização de nomes de ruas; contribuí para atualizações de propriedades usando QGIS e integrei recursos geoespaciais com modernos frameworks frontend.",
    "main.workExperience.linkTextMcde": "Saber mais",
    "main.workExperience.dateGeo": "Outubro 2024",
    "main.workExperience.titleGeo": "Desenvolvedor Fullstack",
    "main.workExperience.companyGeo": "GeoStory (Freelancer)",
    "main.workExperience.descriptionGeo": "Aplicação interativa para facilitar o aprendizado de história e geografia para alunos da sexta série. Implementei níveis temáticos desbloqueáveis, lógica de pontuação com NestJS, PostgreSQL e TypeORM, e uma interface envolvente com Angular e animações Lottie. Também desenvolvi rankings dinâmicos em tempo real.",
    "main.workExperience.linkMcde": "#",
    "main.workExperience.linkGeo": "#",
    "main.workExperience.linkTextGeo": "Saber mais",
    "main.workExperience.dateFdm": "Março 2024",
    "main.workExperience.titleFdm": "Desenvolvedor Full-stack",
    "main.workExperience.companyFdm": "Farmacia Divina Misericordia (Freelancer)",
    "main.workExperience.descriptionFdm": "Sistema de gestão de inventários para pequenas farmácias. Inclui controle de estoque, geração de relatórios regulamentares em Excel usando DotNetCore.NPOI, criação de tickets e relatórios em PDF usando PdfMake, e um painel de controle interativo utilizando Angular e .NET.",
    "main.workExperience.dateMoura": "Fevereiro 2023",
    "main.workExperience.titleMoura": "Desenvolvedor FullStack",
    "main.workExperience.companyMoura": "Moura Sistemas de Gestão",
    "main.workExperience.descriptionMoura": "Participação no desenvolvimento de módulos de gestão empresarial. Desenhei interfaces com Angular, desenvolvi lógica no backend com Visual Basic e ASP.NET, corrigi bugs, gerei relatórios em Excel e colaborei em um ambiente ágil utilizando GitLab e Swagger.",
    "main.workExperience.technologies": "Tecnologias e Ferramentas",
    "main.workExperience.linkMoura": "https://www.jnmoura.com.br/",
    "main.projects.titleXmenu": "Catálogo Online para Restaurantes",
    "main.projects.descriptionXmenu": "Aplicativo web responsivo que funciona como um catálogo digital para restaurantes. Permite explorar menus organizados por categorias, visualizar endereços e localizar os estabelecimentos. Os usuários podem selecionar pratos e adicioná-los ao carrinho; ao finalizar, o app gera o pedido e o envia diretamente para o WhatsApp para confirmação, sem processar pagamentos online.",
    "main.projects.titleQuickmock": "Quickmock",
    "main.projects.descriptionQuickmock": "Ferramenta open-source para simulação de interfaces de usuário de baixa fidelidade. Contribuí ativamente revisando e solucionando problemas no repositório, além de implementar novas funcionalidades usando React, TypeScript e React Konva para integrar componentes interativos baseados em SVG.",
    "main.aboutMe": `
      <p>
        Comecei minha formação em <strong>Análise de Sistemas</strong>, mas minha verdadeira paixão pela programação surgiu durante um curso intensivo no <strong>Brasil</strong>. Foi um desafio único, eu era o único que não falava bem português em um programa totalmente ministrado em <strong>português</strong>, mas essa experiência me permitiu aprender com professores excepcionais e adquirir conhecimentos em tecnologias como <strong>Angular</strong> e <strong>.NET</strong>. Ao finalizar, fui selecionado para o meu primeiro emprego como desenvolvedor remoto.
      </p>
      <p>
        Com mais de <strong>2 anos de experiência</strong>, trabalho no desenvolvimento <strong>frontend e fullstack</strong>, criando aplicações web com <strong>React</strong>, <strong>Angular</strong>, <strong>Nest.js</strong>, <strong>.NET</strong> e <strong>PostgreSQL</strong>. Participei de projetos diversos, desde aplicações de <strong>gamificação</strong> até sistemas de gestão empresarial. Minha experiência inclui trabalho em equipes ágeis com metodologias <strong>Scrum</strong>, e atualmente estou explorando ferramentas como <strong>Docker</strong> e <strong>inteligência artificial</strong> para melhorar meu fluxo de trabalho.
      </p>
      <p>
        Meu foco sempre foi entregar soluções de qualidade, trabalhando de forma <strong>colaborativa</strong> para gerar valor real em cada projeto. Embora eu trabalhe com o stack completo, minha maior paixão é o <strong>frontend</strong> devido ao seu componente visual e criativo. Quando não estou programando, gosto de <strong>vôlei</strong>, geopolítica, tecnologia e <strong>videogames</strong>.
      </p>
      `,
    "themeDark": "Claro",
    "themeLight": "Escuro",
    "themeSystem": "Sistema",
    "layout.title": "Portfólio de Adrian - Desenvolvedor Web e Programador com mais de 2 anos de experiência.",
    "layout.description": "Contrate Adrian para criar sua aplicação web ou móvel. Desenvolvedor Web e Criador de Conteúdo. Especializado em criar aplicações únicas.",
    "footer.copyright": "Quase todos os direitos reservados",
  }
}
