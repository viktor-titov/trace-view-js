import type { TraceProps } from "./TraceProps";

/** Интерфейс Trace для отображения трейса. */
export interface TraceViewInterface {
    /** Монтирует Трейс в контейнер
     * и рендерит компонент Trace
     * 
     * @param props Свойств, которые будут переданы компоненту Trace 
     */
    render (props?: TraceProps);

    /** Удаляет смонтированный компонент Trace из контейнера. */
    destroy (): void;
}