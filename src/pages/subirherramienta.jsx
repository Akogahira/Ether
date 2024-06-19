import { useState } from "react";
import {
  ContainerMain,
  BotonSubirConv,
  TextFieldContainer,
  TextFieldSubirConv,
  TextFieldSubirConvGrande,
  BotonesSubirConv,
  TituloConvHome,
  PopupContainer,
  BotonConv,
  BotonCerrar,
  ErrorMessage,
  SuccessMessage,
  Overlay
} from '../components/Layout.styles';
import { ImPlus } from "react-icons/im";

const SubirHerr = () => {
  const [titulo, setTitulo] = useState('');
  const [seccionCount, setSeccionCount] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [tituloError, setTituloError] = useState('');
  const [seccionError, setSeccionError] = useState('');
  const [descripcionError, setDescripcionError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const agregarSeccion = () => {
    setSeccionCount(seccionCount + 1);
  };

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
    if (titulo.length < 5 || titulo.length > 25) {
      setTituloError('El título debe tener entre 5 y 25 caracteres.');
      isValid = false;
    } else {
      setTituloError('');
    }

    for (let i = 1; i <= seccionCount; i++) {
      const seccionTitle = document.getElementById(`seccion${i}Titulo`).value;
      if (seccionTitle.length < 20 || seccionTitle.length > 45) {
        setSeccionError(`El título de la sección debe tener entre 20 y 45 caracteres.`);
        isValid = false;
        break;
      } else {
        setSeccionError('');
      }
    }

    for (let i = 1; i <= seccionCount; i++) {
      const seccionDescription = document.getElementById(`seccion${i}Descripcion`).value;
      if (seccionDescription.length < 40 || seccionDescription.length > 200) {
        setDescripcionError(`La descripción de la sección debe tener entre 40 y 200 caracteres.`);
        isValid = false;
        break;
      } else {
        setDescripcionError('');
      }
    }

    if (isValid) {
      setFormSubmitted(true);
    }
  };

  return (
    <ContainerMain>
      <div>
        <TituloConvHome>Escribe el título de tu herramienta.</TituloConvHome>
        <TextFieldContainer>
          <TextFieldSubirConv
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título principal."
            id="titulo"
            name="titulo"
          />
        </TextFieldContainer>
        {tituloError && <ErrorMessage>{tituloError}</ErrorMessage>}
      </div>

      <TituloConvHome>Desarrolla y explica tu herramienta.</TituloConvHome>
      {[...Array(seccionCount)].map((_, index) => (
        <div key={index}>
          <TextFieldContainer>
            <p>{index + 1}.</p>
            <TextFieldSubirConv
              type="text"
              id={`seccion${index + 1}Titulo`}
              name={`seccion${index + 1}Titulo`}
              placeholder={`Título de la sección ${index + 1}.`}
            />
          </TextFieldContainer>
          {seccionError && <ErrorMessage>{seccionError}</ErrorMessage>}
          <TextFieldContainer>
            <TextFieldSubirConvGrande
              type="text"
              id={`seccion${index + 1}Descripcion`}
              name={`seccion${index + 1}Descripcion`}
              placeholder={`Descripción de la sección ${index + 1}.`}
            />
          </TextFieldContainer>
          {descripcionError && <ErrorMessage>{descripcionError}</ErrorMessage>}
        </div>
      ))}

      <BotonesSubirConv>
        <div onClick={agregarSeccion}>
          <ImPlus></ImPlus> Añadir sección
        </div>
        <BotonSubirConv onClick={toggleFilters}>Añadir filtros</BotonSubirConv>
      </BotonesSubirConv>

      {showFilters && (
        <>
          <Overlay onClick={toggleFilters} />
          <PopupContainer>
            <BotonCerrar onClick={toggleFilters}>X</BotonCerrar>
            <h2>Selecciona filtros</h2>
            {["Terapia guiada", "Autodirigida", "Técnica mixta"].map((filter, index) => (
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

      <BotonesSubirConv style={{ display: "flex", alignItems: "flex-end" }}>
        <BotonSubirConv onClick={handleSubmit}>Enviar</BotonSubirConv>
      </BotonesSubirConv>

      {formSubmitted && <SuccessMessage> ¡Herramienta enviada! Nuestro equipo la moderará en breve y será publicada si cumple con nuestra política. Gracias por participar en la comunidad.</SuccessMessage>}
    </ContainerMain>
  );
};

export default SubirHerr;
