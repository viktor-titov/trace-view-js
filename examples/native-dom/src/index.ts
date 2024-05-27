import {TraceViewTest} from "@viktor-titov/trace-view-js"

window.addEventListener('load', () => {
    const traceBox = document.getElementById('traceBox')
    if (traceBox) {
        TraceViewTest(traceBox)
    }
})