import { useState } from "react";
import {
  ContainerMain,
  BotonConv,
  Divider,
  ContainerHerrFiltro,
  ContainerHerr,
  CardHerr,
  CardHerrInfo,
  IntroPageHerr,
} from "../components/Layout.styles";
import { Link } from "react-router-dom";
import { Tools } from "../data/Herramientas";

const Herramientas = () => {
  const [filtro, setFiltro] = useState("todas");

  const handleFiltroChange = (filtroSeleccionado) => {
    setFiltro(filtroSeleccionado);
  };

  const filteredTools = Tools.filter((tool) => {
    if (filtro === "todas") return true;
    return tool.tipo.toLowerCase() === filtro.toLowerCase();
  });

  return (
    <div>
      <ContainerMain>
        <IntroPageHerr>
          ¿Conoces alguna herramienta que no encuentras aquí? ¡Compártela!
        </IntroPageHerr>
        <Link
          to="/subirherramienta"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <BotonConv>Publica una herramienta</BotonConv>
        </Link>
        <Divider />

        <ContainerHerrFiltro>
          <BotonConv onClick={() => handleFiltroChange("todas")}>Todas</BotonConv>
          <BotonConv onClick={() => handleFiltroChange("oficial")}>Oficiales</BotonConv>
          <BotonConv onClick={() => handleFiltroChange("comunidad")}>Comunidad</BotonConv>
        </ContainerHerrFiltro>

        <ContainerHerr>
          {filteredTools.map((tool, index) => (
            <CardHerr key={index}>
              <Link
                to={`/herramienta/${tool.nombre}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardHerrInfo>
                  <img src={tool.foto} alt={tool.nombre} />
                  <p>{tool.nombre}</p>
                </CardHerrInfo>
              </Link>
            </CardHerr>
          ))}
        </ContainerHerr>
      </ContainerMain>
    </div>
  );
};

export default Herramientas;
