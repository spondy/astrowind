import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Events',
      href: getPermalink('/events'),
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
          href: 'https://wiki.artifactory.org.au/',
        },
        {
          text: 'Webcams',
          href: 'https://space.artifactory.org.au/',
        },
        {
          text: 'Slack',
//          href: 'https://perart.io/slack',
          href: getPermalink('/slack'),
        },
      ],
    },


    {
      text: 'About us',
      links: [
        {
          text: 'Our Values',
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
  ],
  actions: [{ type: 'button', text: 'Sign Up', href: '/pricing' }],
};



export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Plan your first visit', href: '/first_visit' },
        { text: 'Upcoming Events', href: '/events' },
        { text: 'Wiki', href: 'https://wiki.artifactory.org.au/' },
        { text: 'Webcams', href: 'https://space.artifactory.org.au/' },
      ],
    },
    {
      title: 'Membership',
      links: [
        { text: 'Become a member', href: '/pricing' },
        { text: 'What we offer', href: '/facilities' },
        { text: 'Pricing', href: '/pricing' },
      ],
    },
    {
      title: 'Organisation',
      links: [
/*        { text: 'About', href: '/about' },
        { text: 'Constitution', href: 'https://wiki.artifactory.org.au/en/constitution' }, */
        { text: 'Code of Conduct', href: '/code_of_conduct' },
        { text: 'Discussion and Voting', href: 'https://perart.io/vote' },
        { text: 'Contact Us', href: '/about/#contact' },
        { text: 'Slack', href: '/slack' },
        { text: 'Meetup', href: 'https://www.meetup.com/Perth-Artifactory/' },
/*        { text: 'Facebook', href: 'https://www.facebook.com/pages/The-Perth-Artifactory/178514525501368' },
        { text: 'Instagram', href: 'https://www.instagram.com/theperthartifactory/' },
        { text: 'YouTube', href: 'https://www.youtube.com/channel/UC9N4yG2QzYZV9Naud_IsUfA' },
        { text: 'GitHub', href: 'https://github.com/Perth-Artifactory' }, */
      ],
    },
    {
      title: 'Australian Makerspaces',
      links: [
        { text: 'ACT: Make, Hack, Void', href: 'https://canberramaker.space/', target: '_blank'},
        { text: 'NSW: Robots & Dinosaurs', href: 'https://robodino.org/', target: '_blank'},
        { text: 'SA: Hackerspace Adelaide', href: 'https://www.hackerspace-adelaide.org.au/', target: '_blank'},
        { text: 'TAS: Hobart Hackerspace', href: 'https://www.hobarthackerspace.org.au/', target: '_blank'},
        { text: 'QLD: Brisbane Makerspace', href: 'https://brisbanemaker.space/', target: '_blank'},
        { text: 'QLD: HSBNE', href: 'https://hsbne.org/', target: '_blank'},
        { text: 'VIC: CCHS', href: 'https://hackmelbourne.com/', target: '_blank'},
        { text: 'WA: South West Makers', href: 'http://swmakers.org/', target: '_blank'},
      ],
    },
/*    {
      title: 'Sponsors and Friends',
      links: [
        { text: 'Alby Beer', href: 'http://alby.beer/', target: '_blank'},
        { text: 'Altronics', href: 'https://www.altronics.com.au/' },
        { text: 'Aussie Broadband', href: 'https://www.aussiebroadband.com.au/' },
        { text: 'Google NFP', href: 'https://www.google.com.au/nonprofits/' },
        { text: 'LotteryWest', href: 'https://www.lotterywest.wa.gov.au/' },
        { text: 'St. John WA', href: 'https://stjohnwa.com.au/' },
        { text: 'Supanova', href: 'https://www.supanova.com.au/' },
        { text: 'Taubmans', href: 'https://www.taubmans.com.au/' },
        { text: 'WebInABox', href: 'https://www.webinabox.net.au/' },
      ],
    }, */
  ],
  secondaryLinks: [
    { text: 'About', href: '/about' },
    { text: 'Constitution', href: 'https://wiki.artifactory.org.au/en/constitution' },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/pages/The-Perth-Artifactory/178514525501368' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/theperthartifactory/' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.facebook.com/pages/The-Perth-Artifactory/178514525501368' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-secondary hover:underline dark:text-neutral-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
