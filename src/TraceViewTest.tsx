import React from "react";
import ReactDOM from "react-dom";

import { TraceView } from "./TraceView/TraceView";
import { transformTraceData } from "./jaeger-ui-components";
import traceGenerators from "./jaeger-ui-components/demo/trace-generators";

const trace = transformTraceData(traceGenerators.trace({}));

export function TraceViewTest(root: Element): void {
	ReactDOM.render(<TraceView trace={trace} />, root);
}