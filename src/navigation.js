import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Events',
      href: getPermalink('/'),
    },

    {
      text: 'Membership',
      links: [
        {
          text: 'What we offer',
          href: getPermalink('/facilities'),
        },
        {
          text: 'Your first visit',
          href: getPermalink('/first_visit'),
        },
        {
          text: 'Pricing',
          href: getPermalink('/pricing'),
        },
      ],
    },

    {
      text: 'Pages',
      links: [
        {
          text: 'Wiki',
          href: getPermalink('https://wiki.artifactory.org.au/'),
        },
        {
          text: 'Webcams',
          href: getPermalink('https://space.artifactory.org.au/'),
        },
        {
          text: 'Slack',
          href: getPermalink('https://perart.io/slack'),
        },
      ],
    },


    {
      text: 'About us',
      links: [
        {
          text: 'Our Vision',
          href: getPermalink('/about'),
        },
        {
          text: 'Location',
          href: getPermalink('/about/#location'),
        },
        {
          text: 'Contact Us',
          href: getPermalink('/about/#contact'),
        },
        {
          text: 'Code of Conduct',
          href: getPermalink('/code_of_conduct'),
        },
      ],
    },
    /*
    {
      text: 'Homes',
      links: [
        {
          text: 'Sass',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },

    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details (or Services)',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },

    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        {
          text: 'Article',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
    */
  ],
  actions: [{ type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' }],
};

export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Home', href: '#' },
        { text: 'Plan your first visit', href: '#' },
        { text: 'Upcoming Events', href: '#' },
        { text: 'Wiki', href: '#' },
        { text: 'Webcams', href: '#' },
      ],
    },
    {
      title: 'Membership',
      links: [
        { text: 'Become a member', href: '#' },
        { text: 'What you get', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Free membership', href: '#' },
      ],
    },
    {
      title: 'Sponsors and Friends',
      links: [
        { text: 'Alby Beer', href: '#' },
        { text: 'Altronics', href: '#' },
        { text: 'Aussie Broadband', href: '#' },
        { text: 'Google NFP', href: '#' },
        { text: 'LotteryWest', href: '#' },
        { text: 'St. John', href: '#' },
        { text: 'Supanova', href: '#' },
        { text: 'Taubmans', href: '#' },
        { text: 'WebInABox', href: '#' },
      ],
    },
    {
      title: 'Organisation',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Code of Conduct', href: '/code_of_conduct' },
        { text: 'Constituition', href: '#' },
        { text: 'Discussion and Voting', href: 'https://perart.io/vote' },
        { text: 'Contact Us', href: '/contact' },
        { text: 'Facebook', href: 'https://www.facebook.com/pages/The-Perth-Artifactory/178514525501368' },
        { text: 'Instagram', href: 'https://www.instagram.com/theperthartifactory/' },
        { text: 'YouTube', href: 'https://www.youtube.com/channel/UC9N4yG2QzYZV9Naud_IsUfA' },
        { text: 'Meetup', href: 'https://www.meetup.com/Perth-Artifactory/' },
        { text: 'GitHub', href: 'https://github.com/Perth-Artifactory' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'About', href: '/about' },
    { text: 'Code of Conduct', href: getPermalink('/code_of_conduct') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-red-600 hover:underline dark:text-neutral-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
