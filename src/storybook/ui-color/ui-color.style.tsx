import styled from 'styled-components'

export const StorybookUiColorPreviewList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
`

export const StorybookUiColorPreview = styled.div`
    flex-grow: 1;
`

export const StorybookUiColorPreviewDisplay = styled.div<{ color: string }>`
    background: ${(props) => props.color};
    box-shadow: rgba(39, 51, 68, 0.1) 0 4px 7px;
    border-radius: 8px;
    width: 100%;
    height: 2.5rem;
    margin-bottom: 0.5rem;
`

export const StorybookUiColorPreviewDetails = styled.div`
`

export const StorybookUiColorPreviewDetailsTitle = styled.div<{ color: string, font: string }>`
    font: ${(props) => props.font};
    color: ${(props) => props.color};
`

export const StorybookUiColorPreviewDetailsValue = styled.div<{ color: string, font: string }>`
    margin-top: .25rem;
    font: ${(props) => props.font};
    color: ${(props) => props.color};
`
