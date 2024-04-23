import React from 'react';
import {
    StorybookUiColorPreview,
    StorybookUiColorPreviewDetails,
    StorybookUiColorPreviewDetailsTitle, StorybookUiColorPreviewDetailsValue,
    StorybookUiColorPreviewDisplay
} from "./ui-color.style";
import {useThemeFonts} from "../../hooks/use-theme-fonts";
import {useThemeColor} from "../../hooks/use-theme-colors";

export const StorybookUiColor = (
    { title, color } : { title : string, color : string }
) => {

    const typography = useThemeFonts();
    const colors = useThemeColor();

    return (
        <StorybookUiColorPreview>
            <StorybookUiColorPreviewDisplay
                color={ color }
            >
            </StorybookUiColorPreviewDisplay>
            <StorybookUiColorPreviewDetails>
                <StorybookUiColorPreviewDetailsTitle
                    font={ typography.primary.sm }
                    color={ colors.neutrals.tint_800 }
                >
                    { title }
                </StorybookUiColorPreviewDetailsTitle>
                <StorybookUiColorPreviewDetailsValue
                    font={ typography.primary.xs }
                    color={ colors.neutrals.tint_800 }
                >
                    { color }
                </StorybookUiColorPreviewDetailsValue>
            </StorybookUiColorPreviewDetails>
        </StorybookUiColorPreview>
    );
};

