import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RoxanaTech - Thiết kế và phát triển website',
    short_name: 'RoxanaTech',
    description: 'RoxanaTech - Thiết kế phát triển website, ứng dụng di động trên nền tảng android và ios.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '../assets/roxanatech_logo.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}