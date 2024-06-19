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
          <BotonConv
            className={filtro === "todas" ? "active" : ""}
            onClick={() => handleFiltroChange("todas")}
          >
            Todas
          </BotonConv>
          <BotonConv
            className={filtro === "oficial" ? "active" : ""}
            onClick={() => handleFiltroChange("oficial")}
          >
            Oficiales
          </BotonConv>
          <BotonConv
            className={filtro === "comunidad" ? "active" : ""}
            onClick={() => handleFiltroChange("comunidad")}
          >
            Comunidad
          </BotonConv>
        </ContainerHerrFiltro>

        <ContainerHerr>
          {Tools.filter((tool) => {
            if (filtro === "todas") return true;
            return tool.tipo.toLowerCase() === filtro.toLowerCase();
          }).map((tool, index) => (
            <CardHerr key={index}>
              <Link
                to={`/herramientaesp/${tool.id}`}
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
