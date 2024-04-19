import { RadiusConfigI, RadiusI } from "../contracts/radius";
declare const RadiusBuilder: ({ base, config, }: {
    base: RadiusI;
    config?: RadiusConfigI;
}) => RadiusI;
export { RadiusBuilder };
