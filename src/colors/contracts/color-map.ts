import { HexColor } from "@/colors/contracts/hex";

export interface ColorMapLabelsI {
  all: HexColor;
  water: HexColor;
  highway: HexColor;
  road: HexColor;
}

export interface ColorMapBordersI {
  country: HexColor;
  highway: HexColor;
  road: HexColor;
}

export interface ColorMapLandscapeI {
  all: HexColor;
  artificial: HexColor;
  terrain: HexColor;
  park: HexColor;
  poi: HexColor;
  water: HexColor;
  transit: HexColor;
  highway: HexColor;
  road: HexColor;
}

export interface ColorMapLabelsConfigI {
  all?: HexColor;
  water?: HexColor;
  highway?: HexColor;
  road?: HexColor;
}

export interface ColorMapBordersConfigI {
  country?: HexColor;
  highway?: HexColor;
  road?: HexColor;
}

export interface ColorMapLandscapeConfigI {
  all?: HexColor;
  artificial?: HexColor;
  terrain?: HexColor;
  park?: HexColor;
  poi?: HexColor;
  water?: HexColor;
  transit?: HexColor;
  highway?: HexColor;
  road?: HexColor;
}

export interface ColorMapI {
  label: ColorMapLabelsI;
  border: ColorMapBordersI;
  landscape: ColorMapLandscapeI;
}

export interface ColorMapConfigI {
  label?: ColorMapLabelsConfigI;
  border?: ColorMapBordersConfigI;
  landscape?: ColorMapLandscapeConfigI;
}
