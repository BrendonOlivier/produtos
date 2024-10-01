import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { useNavigate } from 'react-router-dom';

import { Container } from './style'
import assaiImg from '../../assets/Assai.png'
import atacadaoImg from '../../assets/Atacadao.png'
import paguemenosImg from '../../assets/paguemenos.jpg'
import saoVicenteImg from '../../assets/saovicente.jpg'
import cremaImg from '../../assets/crema.png'
import spaniImg from '../../assets/Spani.png'

const markets = [
  { name: 'Assaí', path: 'assai', image: assaiImg },
  { name: 'Atacadão', path: 'atacadao', image: atacadaoImg },
  { name: 'Paguemenos', path: 'paguemenos', image: paguemenosImg },
  { name: 'São Vicente', path: 'saovicente', image: saoVicenteImg },
  { name: 'Crema', path: 'crema', image: cremaImg },
  { name: 'Spani', path: 'spani', image: spaniImg }
];

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Bem-vindo Promotor!</h1>
      <h2>Qual loja irá atender hoje?</h2>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {markets.map((market, index) => (
          <SwiperSlide key={index}>
              <img 
              src={market.image} 
              alt={market.name} 
              style={{ width: '100%', borderRadius: '10px', cursor: 'pointer' }} 
              onClick={() => navigate(`/${market.path}`)} />

              <h3 className="market-name">{market.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Home
