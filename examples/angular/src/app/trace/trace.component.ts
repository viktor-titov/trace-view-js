import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import type { TraceViewInterface, TraceProps } from '@viktor-titov/trace-view-js'
import { generateMockTrace } from '@viktor-titov/trace-view-js'

@Component({
    selector: 'app-wrapper',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './trace.component.html',
})
export class TraceComponent {
    protected loading: boolean = true;
    private traceView?: TraceViewInterface;
    private props?: unknown;

    @ViewChild('boxForTrace') containerRef?: ElementRef;

    async ngAfterViewInit() {
        console.log('::ngAfterViewInit');
        await this.load();
        this.loading = false;
        
        this.renderTrace();
    }

    ngOnChanges() {
        console.log('::ngOnChanges');
        this.renderTrace()
    }

    ngOnDestroy() {
        console.log('::ngOnDestroy');
        this.traceView?.destroy();
    }

    private async load(): Promise<void> {
        const { TraceView } = await import('@viktor-titov/trace-view-js');
        if (this.containerRef) {
            this.traceView = new TraceView({container: this.containerRef.nativeElement})
        }
    }

    private renderTrace(props?: TraceProps) {
        console.log('::renderTrace', props);
        if (this.traceView) {
            this.traceView.render(props);
        }
    }

    protected updateHandler() {
        this.traceView?.destroy();
        this.renderTrace({trace: generateMockTrace()});
    }
}
