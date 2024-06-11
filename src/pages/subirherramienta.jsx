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
} from "../components/Layout.styles";
import { ImPlus } from "react-icons/im";

const SubirHerr = () => {
  const [seccionCount, setSeccionCount] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

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

  return (
    <ContainerMain>
      <div>
        <TituloConvHome>Escribe el título de la herramienta.</TituloConvHome>
        <TextFieldContainer>
          <TextFieldSubirConv></TextFieldSubirConv>
        </TextFieldContainer>
      </div>

      <TituloConvHome>Desarrolla y explica tu herramienta.</TituloConvHome>
      {[...Array(seccionCount)].map((_, index) => (
        <div key={index}>
          <TextFieldContainer>
            <p>{index + 1}.</p>
            <TextFieldSubirConv></TextFieldSubirConv>
          </TextFieldContainer>
          <TextFieldContainer>
            <TextFieldSubirConvGrande></TextFieldSubirConvGrande>
          </TextFieldContainer>
        </div>
      ))}

      <BotonesSubirConv>
        <div onClick={agregarSeccion}>
          <ImPlus></ImPlus> Añadir sección
        </div>
        <BotonSubirConv onClick={toggleFilters}>Añadir filtros</BotonSubirConv>
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
            Filtro 1
          </BotonConv>
          <BotonConv
            isActive={activeFilters.includes("Filtro 2")}
            onClick={() => handleFilterClick("Filtro 2")}
          >
            Filtro 2
          </BotonConv>
          <BotonConv
            isActive={activeFilters.includes("Filtro 3")}
            onClick={() => handleFilterClick("Filtro 3")}
          >
            Filtro 3
          </BotonConv>
          <BotonConv
            isActive={activeFilters.includes("Filtro 4")}
            onClick={() => handleFilterClick("Filtro 4")}
          >
            Filtro 4
          </BotonConv>
          <BotonConv
            isActive={activeFilters.includes("Filtro 5")}
            onClick={() => handleFilterClick("Filtro 5")}
          >
            Filtro 5
          </BotonConv>
          {/* Agrega aquí más botones de filtros según sea necesario */}
        </PopupContainer>
      )}

      <BotonesSubirConv style={{ display: "flex", alignItems: "flex-end" }}>
        <BotonSubirConv>Enviar</BotonSubirConv>
      </BotonesSubirConv>
    </ContainerMain>
  );
};

export default SubirHerr;
