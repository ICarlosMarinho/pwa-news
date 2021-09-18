import styled from "styled-components";

interface Props {
  headline: boolean;
}

export const CardContainer = styled.article<Props>`
  display: flex;
  flex-direction: ${(props) => (props.headline ? "row" : "column")};
  gap: ${(props) => (props.headline ? "30px" : "10px")};
  grid-area: ${(props) => (props.headline ? "headline" : "")};
  width: ${(props) => (props.headline ? "default" : "20%")};
  padding: ${(props) => (props.headline ? "0 20px" : "0")};
`;

export const Image = styled.img<Props>`
  width: ${(props) => (props.headline ? "50%" : "100%")};
  border-radius: 3px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
`;

export const Title = styled.h3<Props>`
  color: ${(props) => (props.headline ? "#BB2020" : props.theme.colors.title)};
  font-size: ${(props) => (props.headline ? "2em" : "1em")};
`;

export const PublishDate = styled.p`
  color: ${(props) => props.theme.colors.subtitle};
`;

export const Description = styled(PublishDate)`
  font-weight: bold;
`;
