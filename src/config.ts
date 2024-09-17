import { flattenDiagnosticMessageText } from 'typescript'
import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: '盈尘小站',
  subtitle: '首页',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 80,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/Banner_new!.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'top', // Equivalent to object-position, defaults center
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  favicon: [     
     {
       src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
       //theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
       //sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/Asano.png',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: '谢星霖',
  bio: 'aka “Asano”，努力创造一些有意思的事物。',
  links: [
    {
      name: 'Mail',
      icon: 'material-symbols:mail-outline',       // Visit https://icones.js.org/ for icon codes
                                        // You will need to install the corresponding icon set if it's not already included
                                        // `pnpm add @iconify-json/<icon-set-name>`
      url: 'mailto:magmalatte@outlook.com',
    },
    {
      name: 'Steam',
      icon: 'fa6-brands:steam',
      url: 'https://steamcommunity.com/id/Dr_Asano/',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/Senokotvsky',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
}
