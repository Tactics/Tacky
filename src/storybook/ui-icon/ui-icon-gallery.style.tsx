import styled from "styled-components";

export const StyledUiIconGallery = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const StyledUiIconGalleryList = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const StyledUiIconGalleryItem = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 calc(20% - 10px);
  min-width: 300px;
  margin: 0 10px 30px 0;
`;

export const StyledUiIconGalleryItemSpecimen = styled.div`
  border-radius: 4px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 3px 0;
  border: 1px solid hsla(203, 50%, 30%, 0.15);
  overflow: hidden;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
`;

export const StyledUiIconGalleryItemLabel = styled.div`
  margin-left: 10px;
  line-height: 1.2;
  text-transform: lowercase;
  color: #2e3438;
`;
