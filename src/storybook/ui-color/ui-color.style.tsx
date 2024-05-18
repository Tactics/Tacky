import styled from "styled-components";

export const StorybookUiColorPreviewList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StorybookUiColorAdditionalPreviewList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const StorybookUiColorPreview = styled.div`
  flex-grow: 1;
  min-width: 80px;
`;

export const StorybookUiColorPreviewDisplay = styled.div<{ color: string }>`
  background: ${(props) => props.color};
  width: 100%;
  height: 2.5rem;
  margin-bottom: 0.5rem;
`;

export const StorybookUiColorPreviewDetails = styled.div``;

export const StorybookUiColorPreviewDetailsTitle = styled.div<{
  color: string;
  font: string;
}>`
  font: ${(props) => props.font};
  color: ${(props) => props.color};
`;

export const StorybookUiColorPreviewDetailsValue = styled.div<{
  color: string;
  font: string;
}>`
  margin-top: 0.25rem;
  font: ${(props) => props.font};
  color: ${(props) => props.color};
`;
