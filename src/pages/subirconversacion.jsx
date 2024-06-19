import { useState } from "react";
import { BotonSubirConv, ContainerMain, TextFieldContainer, TextFieldSubirConv, TextFieldSubirConvGrande, BotonesSubirConv, TituloConvHome, PopupContainer, BotonConv, BotonCerrar, ErrorMessage, SuccessMessage, Overlay } from '../components/Layout.styles';
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
  const [formSubmitted, setFormSubmitted] = useState(false);

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

    if (isValid) {
      setFormSubmitted(true);
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

      {showFilters && (
        <>
          <Overlay onClick={toggleFilters} />
          <PopupContainer>
            <BotonCerrar onClick={toggleFilters}>X</BotonCerrar>
            <h2>Selecciona filtros</h2>
            {["Salud mental", "Salud física", "Herramientas", "Videojuegos", "Día a día", "Opinión"].map((filter, index) => (
              <BotonConv
                key={index}
                onClick={() => handleFilterClick(filter)}
                className={activeFilters.includes(filter) ? 'active' : ''}
              >
                {filter}
              </BotonConv>
            ))}
          </PopupContainer>
        </>
      )}

      {formSubmitted && <SuccessMessage>Conversación enviada, nuestro equipo la moderará en breve.</SuccessMessage>}

    </ContainerMain>
  );
};

export default SubirConv;
