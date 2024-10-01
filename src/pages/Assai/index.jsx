import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Container, Header, SubHeader, ContainerMarcas, AddTaskForm, TaskCard } from './style';
import FilterMarket from '../../components/FilterMarket';

import Candura from '../../assets/Candura.png';
import CNA from '../../assets/CNA.png';
import Coala from '../../assets/Coala.jpg';
import Dadinho from '../../assets/Dadinho.png';
import Keldog from '../../assets/Keldog.png';
import Montevergine from '../../assets/Montevergine.png';
import Multibrands from '../../assets/Multibrands.png';
import Raymundo from '../../assets/Raymundo.png';
import SertLixo from '../../assets/SertLixo.png';
import { FaTrash } from "react-icons/fa";

import Candura5L from '../../assets/Produtos/Candura1.png';
import Candura2L from '../../assets/Produtos/Candura2.png';
import Candura1L from '../../assets/Produtos/Candura3.png';
import Amaciante5L from '../../assets/Produtos/Candura4.png';
import APuroCarinho2L from '../../assets/Produtos/Candura5.png';
import AClassico2L from '../../assets/Produtos/Candura6.png';
import AGlamour2L from '../../assets/Produtos/Candura7.png';
import AEncantoRosa2L from '../../assets/Produtos/Candura8.png';
import Detergente5L from '../../assets/Produtos/Candura9.png';
import Detergente500mlNeutro from '../../assets/Produtos/Candura10.png';
import Detergente500mlCoco from '../../assets/Produtos/Candura11.png';
import AlvejanteSCloro from '../../assets/Produtos/Candura12.png';
import CloroGel from '../../assets/Produtos/Candura13.png';
import MultiusoOriginal from '../../assets/Produtos/Candura14.png';
import MultiusoCloro from '../../assets/Produtos/Candura15.png';

import Alvejante from '../../assets/Produtos/Raymundos1.png';
import Olimpo5L from '../../assets/Produtos/Raymundos2.png';
import Olimpo2L from '../../assets/Produtos/Raymundos3.png';
import Olimpo1L from '../../assets/Produtos/Raymundos4.png';

import Coperalcool500ml from '../../assets/Produtos/CNA1.png';
import Lavanda1L from '../../assets/Produtos/CNA2.png';
import Zulu from '../../assets/Produtos/CNA3.png';
import Alcool70 from '../../assets/Produtos/CNA4.png';
import AlcoolMaos from '../../assets/Produtos/CNA5.png';
import PanoRefil from '../../assets/Produtos/CNA6.png';
import PanoUmedecido from '../../assets/Produtos/CNA7.png';

const products = [
  { id: 1, name: 'Candura 5L', image: Candura5L, quantity: 0, stocked: false, brand: 'Candura' },
  { id: 2, name: 'Candura 2L', image: Candura2L, quantity: 0, stocked: false, brand: 'Candura' },
  { id: 3, name: 'Candura 1L', image: Candura1L, quantity: 0, stocked: false, brand: 'Candura' },
  { id: 4, name: 'Amaciante 5L', image: Amaciante5L, quantity: 0, stocked: false, brand: 'Candura' },
  { id: 5, name: 'Puro Carinho 2L', image: APuroCarinho2L, quantity: 0, stocked: false, brand: 'Candura' },
  { id: 6, name: 'Clássico 2L', image: AClassico2L, quantity: 0, stocked: false, brand: 'Candura' },
  { id: 7, name: 'Glamour 2L', image: AGlamour2L, quantity: 0, stocked: false, brand: 'Candura' },
  { id: 8, name: 'Enca. Rosa 2L', image: AEncantoRosa2L, quantity: 0, stocked: false, brand: 'Candura' },
  { id: 9, name: 'D. Neutro 5L', image: Detergente5L, quantity: 0, stocked: false, brand: 'Candura' },
  { id: 10, name: 'D. Coco', image: Detergente500mlCoco, quantity: 0, stocked: false, brand: 'Candura' },
  { id: 11, name: 'D. Neutro', image: Detergente500mlNeutro, quantity: 0, stocked: false, brand: 'Candura' },
  { id: 12, name: 'Alvejante', image: AlvejanteSCloro, quantity: 0, stocked: false, brand: 'Candura' },
  { id: 13, name: 'Cloro Gel', image: CloroGel, quantity: 0, stocked: false, brand: 'Candura' },
  { id: 14, name: 'Multiuso Orig', image: MultiusoOriginal, quantity: 0, stocked: false, brand: 'Candura' },
  { id: 15, name: 'Multiuso Cloro', image: MultiusoCloro, quantity: 0, stocked: false, brand: 'Candura' },

  { id: 16, name: 'Brillux', image: Alvejante, quantity: 0, stocked: false, brand: 'Raymundo' },
  { id: 17, name: 'Olimpo 5L', image: Olimpo5L, quantity: 0, stocked: false, brand: 'Raymundo' },
  { id: 18, name: 'Olimpo 2L', image: Olimpo2L, quantity: 0, stocked: false, brand: 'Raymundo' },
  { id: 19, name: 'Olimpo 1L', image: Olimpo1L, quantity: 0, stocked: false, brand: 'Raymundo' },

  { id: 20, name: 'CoperA. 500ml', image: Coperalcool500ml, quantity: 0, stocked: false, brand: 'CNA' },
  { id: 21, name: 'CoperA. Lavanda', image: Lavanda1L, quantity: 0, stocked: false, brand: 'CNA' },
  { id: 22, name: 'Zulu', image: Zulu, quantity: 0, stocked: false, brand: 'CNA' },
  { id: 23, name: 'CoperA. 70', image: Alcool70, quantity: 0, stocked: false, brand: 'CNA' },
  { id: 24, name: 'CoperA. Mãos', image: AlcoolMaos, quantity: 0, stocked: false, brand: 'CNA' },
  { id: 25, name: 'CoperA. RefiL', image: PanoRefil, quantity: 0, stocked: false, brand: 'CNA' },
  { id: 26, name: 'CoperA. Pano', image: PanoUmedecido, quantity: 0, stocked: false, brand: 'CNA' },
];

const markets = [
  { name: 'Candura', path: 'candura', image: Candura },
  { name: 'Raymundo', path: 'raymundo', image: Raymundo },
  { name: 'CNA', path: 'cna', image: CNA },
  { name: 'Coala', path: 'coala', image: Coala },
  { name: 'Montevergine', path: 'montevergine', image: Montevergine },
  { name: 'Dadinho', path: 'dadinho', image: Dadinho },
  { name: 'SertLixo', path: 'sertlixo', image: SertLixo },
  { name: 'Keldog', path: 'keldog', image: Keldog },
  { name: 'Multibrands', path: 'multibrands', image: Multibrands }
];

function Assai() {
  // Estado para pegar nossas tarefas do LocalStorage e salvar tambem
  const [tasks, setTasks] = useState(() => {
    const savedProdsLocalStorage = localStorage.getItem('products');
    return savedProdsLocalStorage ? JSON.parse(savedProdsLocalStorage) : []
  });

  const [selectedProductId, setSelectedProductId] = useState(null);
  const [productQuantity, setProductQuantity] = useState('');
  const [filter, setFilter] = useState('All'); // Estado para filtrarmos os produtos referente a marca ou todos

  // Efeito para armazenar as tarefas no localStorage sempre que mudarem  
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(tasks));
  }, [tasks]);

  // Função para adicionar nosso produto
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!selectedProductId || !productQuantity) {
      alert("Por favor, selecione um produto e preencha a quantidade.");
      return;
    };

    const product = products.find(p => p.id === selectedProductId);
    const newTask = {
      name: product.name,
      quantity: productQuantity,
      image: product.image,
      completed: false,
      brand: product.brand
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
    setProductQuantity('' );
    setSelectedProductId(null); // Reseta a seleção de produto  
  };

  // Função para marcar como completa a tarefa
  const handleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Função para remover a tarefa
  const handleRemoveTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Header></Header>

      <SubHeader>
        <h1>Qual marca irá atender?</h1>
      </SubHeader>

      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        pagination={false}
        modules={[Pagination]}
        className="mySwiper"
      >
        {markets.map((market, index) => (
          <SwiperSlide key={index}>
            <img
              src={market.image}
              alt={market.name}
              style={{ width: '100%', borderRadius: '10px', cursor: 'pointer' }}
            />

            <h3 className="market-name">{market.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>

      <ContainerMarcas>
        <h2>Produtos</h2>

        <FilterMarket filter={filter} setFilter={setFilter} />

        <AddTaskForm onSubmit={handleAddTask}>
          <select value={selectedProductId} onChange={(e) => setSelectedProductId(parseInt(e.target.value))}>
            <option value="">Selecione um produto</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>{product.name}</option>
            ))}
          </select>
          <div className='ContainerTask'>
            <input
              type="number"
              placeholder="Quantidade"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
            />
            <button type="submit">Adicionar Tarefa</button>
          </div>
        </AddTaskForm>

        {tasks
        .filter(task => filter === 'All' || task.brand === filter)
        .map((task, index) => (
          <TaskCard
            key={index}
            style={{ backgroundColor: task.completed ? '#c8e6c9' : '#fff' }}
          >
            <img src={task.image} alt={task.name} style={{ width: '50px', height: '50px' }} />
            <div>
              <h3>{task.name}</h3>
              <p>Quantidade: {task.quantity}</p>
            </div>
            <div className='input'>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskCompletion(index)}
              />
              <button onClick={() => handleRemoveTask(index)} >
                <FaTrash className='icon' />
              </button>
            </div>
          </TaskCard>
        ))}
      </ContainerMarcas>

    </Container>
  )
}

export default Assai
