export default class TreeNode {
    static iterFunction(fn: any, depth?: number): (node: any) => any;
    static searchFunction(search: any): any;
    constructor(value: any, children?: any[]);
    value: any;
    children: any[];
    get depth(): any;
    get size(): number;
    addChild(child: any): this;
    find(search: any): any;
    getPath(search: any): any;
    walk(fn: any, depth?: number): void;
}
