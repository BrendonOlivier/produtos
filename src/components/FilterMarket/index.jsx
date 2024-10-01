import { Container, FilterOptions } from './style';

// eslint-disable-next-line react/prop-types
const Filter = ({ filter, setFilter }) => {
    return (
        <Container>
            <h2>Filtrar Produtos</h2>
            <FilterOptions>
                <div>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Candura">Candura</option>
                        <option value="Raymundo">Raymundo</option>
                        <option value="CNA">CNA</option>
                    </select>
                </div>
            </FilterOptions>
        </Container>
    );
};

export default Filter;  