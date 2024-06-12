import { useState } from "react";
import { BotonSubirConv, ContainerMain, TextFieldContainer, TextFieldSubirConv, TextFieldSubirConvGrande, BotonesSubirConv, TituloConvHome, PopupContainer, BotonConv, BotonCerrar, ErrorMessage } from '../components/Layout.styles';
import { ImUpload } from "react-icons/im";

const SubirConv = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [resumen, setResumen] = useState('');
  const [desarrollo, setDesarrollo] = useState('');
  const [tituloError, setTituloError] = useState('');
  const [resumenError, setResumenError] = useState('');
  const [desarrolloError, setDesarrolloError] = useState('');

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleFilterClick = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((item) => item !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const handleSubmit = () => {
    // Validar los campos antes de enviar el formulario
    let isValid = true;
    if (titulo.length < 20 || titulo.length > 45) {
      setTituloError('El título debe tener entre 20 y 45 caracteres.');
      isValid = false;
    } else {
      setTituloError('');
    }
    if (resumen.length < 40 || resumen.length > 80) {
      setResumenError('El resumen debe tener entre 40 y 80 caracteres.');
      isValid = false;
    } else {
      setResumenError('');
    }
    if (desarrollo.length < 40 || desarrollo.length > 200) {
      setDesarrolloError('El desarrollo debe tener entre 40 y 200 caracteres.');
      isValid = false;
    } else {
      setDesarrolloError('');
    }

    // Si todos los campos son válidos, enviar el formulario
    if (isValid) {
      console.log('Formulario enviado');
    }
  };

  return (
    <ContainerMain>
      <div>
        <TituloConvHome>
          Explicación sobre el título de la conversación.
        </TituloConvHome>
        <TextFieldContainer>
          <TextFieldSubirConv
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título de tu conversación"
          />
        </TextFieldContainer>
        {tituloError && <ErrorMessage>{tituloError}</ErrorMessage>}
      </div>
      <div>
        <TituloConvHome>Explicación sobre el título resumido.</TituloConvHome>
        <TextFieldContainer>
          <TextFieldSubirConvGrande
            type="text"
            value={resumen}
            onChange={(e) => setResumen(e.target.value)}
            placeholder="Título resumido para la portada"
          />
        </TextFieldContainer>
        {resumenError && <ErrorMessage>{resumenError}</ErrorMessage>}
      </div>
      <div>
        <TituloConvHome>
          Explicación sobre el desarrollo del tema de la conversación.
        </TituloConvHome>
        <TextFieldContainer>
          <TextFieldSubirConvGrande
            type="text"
            value={desarrollo}
            onChange={(e) => setDesarrollo(e.target.value)}
            placeholder="Desarrolla tu conversación"
          />
        </TextFieldContainer>
        {desarrolloError && <ErrorMessage>{desarrolloError}</ErrorMessage>}
      </div>

      <BotonesSubirConv>
        <div>
          <ImUpload /> Subir imagen
        </div>
        <BotonSubirConv onClick={toggleFilters}>Añadir filtros</BotonSubirConv>
      </BotonesSubirConv>
      <BotonesSubirConv style={{ display: "flex", alignItems: "flex-end" }}>
        <BotonSubirConv onClick={handleSubmit}>Enviar</BotonSubirConv>
      </BotonesSubirConv>

      {/* Pop-up de filtros */}
      {showFilters && (
        <PopupContainer>
          <BotonCerrar onClick={toggleFilters}>X</BotonCerrar>
          <h2>Selecciona filtros</h2>
          <BotonConv
            isActive={activeFilters.includes("Filtro 1")}
            onClick={() => handleFilterClick("Filtro 1")}
          >
            Salud mental
          </BotonConv>
          <BotonConv
            isActive={activeFilters.includes("Filtro 2")}
            onClick={() => handleFilterClick("Filtro 2")}
          >
            Salud física
          </BotonConv>
          <BotonConv
            isActive={activeFilters.includes("Filtro 3")}
            onClick={() => handleFilterClick("Filtro 3")}
          >
            Herramientas
          </BotonConv>
          <BotonConv
            isActive={activeFilters.includes("Filtro 4")}
            onClick={() => handleFilterClick("Filtro 4")}
          >
            Videojuegos
          </BotonConv>
          <BotonConv
            isActive={activeFilters.includes("Filtro 5")}
            onClick={() => handleFilterClick("Filtro 5")}
          >
            Día a día
          </BotonConv>
          <BotonConv
            isActive={activeFilters.includes("Filtro 6")}
            onClick={() => handleFilterClick("Filtro 6")}
          >
            Opinión
          </BotonConv>
        </PopupContainer>
      )}
    </ContainerMain>
  );
};

export default SubirConv;
