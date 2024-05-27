export function simplePayloadElemMaker(label: any): {
    operation: string;
    service: string;
};
export namespace focalPayloadElem {
    let operation: string;
    let service: string;
}
export namespace firstPayloadElem { }
export namespace beforePayloadElem { }
export namespace midPayloadElem { }
export namespace afterPayloadElem { }
export namespace lastPayloadElem { }
export const shortPath: {
    operation: string;
    service: string;
}[];
export const simplePath: {
    operation: string;
    service: string;
}[];
export const longSimplePath: any[];
export const noFocalPath: {
    operation: string;
    service: string;
}[];
export const doubleFocalPath: {
    operation: string;
    service: string;
}[];
export const almostDoubleFocalPath: {
    operation: string;
    service: string;
}[];
export const convergentPaths: {
    operation: string;
    service: string;
}[][];
export const generationPaths: {
    operation: string;
    service: string;
}[][];
export function wrap(paths: any): {
    dependencies: any;
};
