import styled from "styled-components";
import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;

  const CardStyled = styled.div`
    padding: 10px;
    margin-left: 11%;
    float: left;
    position: relative;
  `;
  return (
    <>
      {characters.map(({id, name, species, gender, image }) => (
        <CardStyled key={id}>
          <Card 
          name={name} 
          gender={gender} 
          species={species} 
          image={image} 
          detailId={id}
          onClose={() => props.onClose(id)}
          />
        </CardStyled>
      ))}
    </>
  );
}
