import { useState } from "react";
import { ImUpload } from "react-icons/im";
import {
  BotonSubirConv,
  ContainerMain,
  TextFieldContainer,
  TextFieldSubirConv,
  TextFieldSubirConvGrande,
  BotonesSubirConv,
  TituloConvHome,
  PopupContainer,
  BotonConv,
  BotonCerrar,
} from "../components/Layout.styles";

const SubirConv = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

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
        <TituloConvHome>
          Explicación sobre el título de la conversación.
        </TituloConvHome>
        <TextFieldContainer>
          <TextFieldSubirConv></TextFieldSubirConv>
        </TextFieldContainer>
      </div>
      <div>
        <TituloConvHome>Explicación sobre el título resumido.</TituloConvHome>
        <TextFieldContainer>
          <TextFieldSubirConvGrande></TextFieldSubirConvGrande>
        </TextFieldContainer>
      </div>
      <div>
        <TituloConvHome>
          Explicación sobre el desarrollo del tema de la conversación.
        </TituloConvHome>
        <TextFieldContainer>
          <TextFieldSubirConvGrande></TextFieldSubirConvGrande>
        </TextFieldContainer>
      </div>

      <BotonesSubirConv>
        <div>
          <ImUpload /> Subir imagen
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

      <BotonesSubirConv style={{ display: "flex", alignItems: "flex-end" }}>
        <BotonSubirConv>Enviar</BotonSubirConv>
      </BotonesSubirConv>
    </ContainerMain>
  );
};

export default SubirConv;
