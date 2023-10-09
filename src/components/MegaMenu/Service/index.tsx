import CustomCarousel from '@/components/CustomCarousel';
import { Space, Typography } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const { Text, Link, Title } = Typography;

const serviceCarouselData = [
  '/assets/images/carousel_4.jpeg',
  '/assets/images/carousel_2.jpeg',
];

export default function MegaMenuService() {
  const router = useRouter()

  const navigateToService = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    router.push('/bang-gia')
  }
  const navigateToAlbumWedding = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    router.push('/chup-album-cuoi')
  }
  const navigateToWeddingDayReportage = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    router.push('/dich-vu-phong-su-ngay-cuoi')
  }
  const renderCarousel = () => {
    return serviceCarouselData.map((item, index) => (
      <div key={index} className='h-[180px] w-[300px]'>
        <Image
          className='object-cover'
          alt={item}
          src={item}
          height={180}
          width={300}
        />
      </div>
    ));
  };

  return (
    <div className='flex mx-auto w-full p-14 justify-center gap-20'>
      <Space direction='vertical'>
        <Title level={5} className='uppercase'>
          BẢNG GIÁ
        </Title>
        <Text onClick={navigateToService}>Bảng giá</Text>
        <Text onClick={navigateToAlbumWedding}>Chụp Album Cưới</Text>
        <Text onClick={navigateToWeddingDayReportage}>Phóng sự ngày cưới</Text>
      </Space>
      <div className='w-[300px] h-[180px]'>
        <CustomCarousel>{renderCarousel()}</CustomCarousel>
      </div>
    </div>
  );
}
