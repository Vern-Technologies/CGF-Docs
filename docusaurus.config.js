module.exports = {
  title: 'CGF Documentation',
  tagline: '',
  url: 'https://Vern-Technologies.github.io',
  baseUrl: '/CGF-Docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Vern-Technologies', //GitHub org/user name.
  projectName: 'CGF-Docs', // repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'CGF DOCS',
      logo: {
        alt: 'Site Logo',
        src: 'img/documents.svg',
      },
      items: [
        {
          to: 'docs/tracker_web/customers',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Company',
          items: [
            {
              label: 'Company',
              to: 'https://www.cgf-llc.com/about-us',
            },
            {
              label: 'Approach',
              to: 'https://www.cgf-llc.com/our-approach',
            },
            {
              label: 'Events',
              to: 'https://www.cgf-llc.com/about-us-2',
            },
            {
              label: 'Team',
              to: 'https://www.cgf-llc.com/kunden-und-branchen',
            },
            {
              label: 'Partners',
              to: 'https://www.cgf-llc.com/our-partners',
            },
            {
              label: 'Career Opportunities',
              to: 'https://www.cgf-llc.com/career-opportunities',
            },
            {
              label: 'Webinars',
              to: 'https://www.cgf-llc.com/webinar',
            },
            {
              label: 'Newsletter',
              to: 'https://www.cgf-llc.com/monthly-newsletters',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'CGF',
              href: 'https://www.cgf-llc.com/',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/cgf-llc/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/CGF_LLC', 
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/Counselgroupfrankfurt/', 
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Docs',
              to: 'docs/tracker_web/customers',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CGF Documentation`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  customFields: {
    tab_title: 'CGF DOCS'
  },
};
