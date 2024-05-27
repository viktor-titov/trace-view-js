export namespace followsFromRef {
    namespace processes {
        namespace p1 {
            let serviceName: string;
            let tags: any[];
        }
    }
    let spans: {
        duration: number;
        flags: number;
        logs: any[];
        operationName: string;
        processID: string;
        references: {
            refType: string;
            spanID: string;
            traceID: string;
        }[];
        spanID: string;
        startTime: number;
        tags: any[];
        traceID: string;
        warnings: any;
    }[];
    let traceID: string;
    let warnings: any;
}
