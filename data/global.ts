// types.ts (or wherever your types and footer config are)

type Route = {
  title: string,
  path: string
};

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
};

type Footer = {
  columns: FooterCol[]
};

// Route definitions
export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects",
  },
  // {
  //   title: "Designs",
  //   path: "/designs",
  // },
];

// Footer content without 'support'
export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/jheus1",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/jheus-p-reyes/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:jheusreyes213@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
         {
          name: "Facebook",
          link: "https://www.facebook.com/jheus.p.reyes",
          icon: "/static/icons/fb5.svg",
          leavesWebsite: true,
        },
      ],
    },

     {
      title: "resume",
      links: [
        {
          name: "Jheus's Resume",
          link: "https://drive.google.com/uc?export=download&id=1-NhPQ9_LsyJ1hpNiRtgTI9gpCqBXxk9T",
          leavesWebsite: true,
        },
      ],
    },
  ],
};
