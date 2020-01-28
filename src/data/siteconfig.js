const config = {
  siteTitle: 'Arden', // Site title.
  siteTitleShort: 'Arden', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Arden, London JavaScript developer', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: '', // Domain of your website without pathPrefix.
  siteDescription:
    'London-based JavaScript developer with an interest in working with data layers', // Website description used for RSS feeds/meta description tag.
  email: 'j.gaddas@outlook.com', // Email used for RSS feed's author segment
  twitter: '@_ardenj', // Optionally renders "Follow Me" in the UserInfo segment.
  github: 'ArdenJ', // User location to display in the author segment.

  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'twitter',
      url: 'https://www.twitter.com/_ardenj',
    },
    {
      label: 'email',
      url: 'mailto:j.gaddas@outlook.com',
    },
    {
      label: 'github',
      url: 'https://www.github.com/ArdenJ',
    },
  ],
  copyright: 'Arden 🚀', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#191414', // Used for setting manifest and progress theme colors.
  backgroundColor: '#191414', // Used for setting manifest background color.
}

module.exports = config
