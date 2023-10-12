import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'RoxanaTech - Thiết kế website/app chuyên nghiệp cho doanh nghiệp',
    short_name: 'website/app',
    description: 'Thiết kế website/app cho doanh nghiệp, uy tín, chuẩn UX,UI✅ website/app doanh nghiệp chuẩn SEO ✅ tại TPHCM và các tỉnh miền Tây nam bộ. Dịch vụ uy tín, hỗ trợ kỹ thuật 24/7, tư vấn miễn phí theo yêu cầu chỉ từ 2tr8 ✅ tặng hosting tên miền tốc độ cao. Miễn phí dùng thử ✅, thiết kế chọn gói website/app tại RoxanaTech.',
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