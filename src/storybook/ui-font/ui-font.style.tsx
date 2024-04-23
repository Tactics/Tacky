import styled from 'styled-components'

export const StorybookUiFontPreview = styled.div<{ font: string }>`
    font: ${(props) => props.font};
`