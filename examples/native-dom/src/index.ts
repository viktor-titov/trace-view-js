import { TraceView, generateMockTrace } from "@viktor-titov/trace-view-js"
import type { TraceConfig } from '@viktor-titov/trace-view-js'

window.addEventListener('load', () => {
    const traceBox = document.getElementById('traceBox')
    if (traceBox) {
        const config: TraceConfig = {
            container: traceBox,
        } 

        const trace = new TraceView(config)
        const props = {
            trace: generateMockTrace(),
        }
        trace.render(props);
    }

})