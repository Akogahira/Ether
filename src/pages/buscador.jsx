import { useState, useEffect, useCallback } from "react";
import { Conver } from "../data/Conversaciones";
import { Tools } from "../data/Herramientas";
import {
  ContainerMain,
  Divider,
  TagConver,
  TextFieldContainer,
  TextFieldConver,
  TituloConvEsp,
  TituloHomeGenerico,
  BusquedaHerramientas,
  ResultHerr,
} from "../components/Layout.styles";
import { Link } from "react-router-dom";

const Buscador = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const performSearch = useCallback(() => {
    const conversacionesResults = Conver.filter((conv) =>
      conv.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const herramientasResults = Tools.filter((tool) =>
      tool.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(
      searchTerm
        ? [...conversacionesResults, ...herramientasResults]
        : []
    );
  }, [searchTerm]);

  useEffect(() => {
    performSearch();
  }, [searchTerm, performSearch]);

  return (
    <ContainerMain>
      <TextFieldContainer>
        <TextFieldConver
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </TextFieldContainer>

      {searchResults.length > 0 && (
        <>
          <TituloHomeGenerico>
            <h2>Resultado de conversaciones</h2>
          </TituloHomeGenerico>

          {searchResults
            .filter((result) => "title" in result)
            .map((result) => (
              <div key={result.id}>
                <Divider />
                <div>
                  <div>
                    <TagConver style={{ marginRight: "6px" }}>
                      {result.tag}
                    </TagConver>
                  </div>
                  <div>
                    <Link to={`/conversacionesp/${result.id}`}>
                      <TituloConvEsp style={{ marginTop: "6px" }}>
                        {result.title}
                      </TituloConvEsp>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          <Divider />

          <TituloHomeGenerico>
            <h2>Resultado de herramientas</h2>
          </TituloHomeGenerico>

          <BusquedaHerramientas>
            {searchResults
              .filter((result) => "nombre" in result)
              .map((result) => (
                <Link key={result.id} to={`/herramientaesp/${result.id}`}>
                  <ResultHerr>{result.nombre}</ResultHerr>
                </Link>
              ))}
          </BusquedaHerramientas>
        </>
      )}
    </ContainerMain>
  );
};

export default Buscador;
