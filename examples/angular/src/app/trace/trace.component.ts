import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-wrapper',
    standalone: true,
    imports: [],
    templateUrl: './trace.component.html',
})
export class TraceComponent {
    protected loading: boolean = false;
    private traceViewTest?: (root: Element) => void;
    @ViewChild('boxForTrace') containerRef?: ElementRef;

    async ngAfterViewInit() {
        console.log('::ngAfterViewInit');
        this.loading = true;
        await this.load();
        this.loading = false;
        this.renderTraceViewComponent();
    }

    ngOnChanges() {
        console.log('::ngOnChanges');
        this.renderTraceViewComponent()
    }

    ngOnDestroy() {
        console.log('::ngOnDestroy');
    }

    private async load(): Promise<void> {
        console.group('::load')
        
        const {TraceViewTest} = await import('@viktor-titov/trace-view-js');
        console.log('TraceViewTest', TraceViewTest);
        this.traceViewTest = TraceViewTest
        console.groupEnd()
    }

    private renderTraceViewComponent() {
        console.group('renderTraceViewComponent')
        console.log("containerRef", this.containerRef);
        console.log('traceViewTest', this.traceViewTest);
        if (this.containerRef && this.traceViewTest) {
            this.traceViewTest(this.containerRef.nativeElement)
        }
        console.groupEnd()
    }
}
