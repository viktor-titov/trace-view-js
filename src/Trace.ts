import React from "react";
import ReactDOM from "react-dom";

import { TraceViewComponent } from "./TraceViewComponent/TraceViewComponent";

import type { TraceProps } from "./types/TraceProps";
import type { TraceConfig } from "./types/TraceConfig";
import type { TraceViewInterface } from './types/Trace';

/** Объект Trace для отображения трейса. */
class TraceView implements TraceViewInterface {
	private config: TraceConfig;

	constructor(config: TraceConfig) {
		if (!config.container) {
			throw Error('Container element cannot be null');
		}

		if (config.container?.childNodes.length > 0) {
			console.error(`The container element ${config.container} is not empty. Make sure the container is empty and call render() again`)
		}

		this.config = config;
	}

	/** Монтирует Трейс в контейнер
     * и рендерит компонент Trace
     * 
     * @param props Свойств, которые будут переданы компоненту Trace 
     */
	render(props?: TraceProps): this {
		const traceComponent = React.createElement(TraceViewComponent, props);
		ReactDOM.render(traceComponent, this.config.container);

		return this;
	}

	/** Удаляет смонтированный компонент Trace из контейнера. */
	destroy(): void {
		ReactDOM.unmountComponentAtNode(this.config.container)
	}
}

export default TraceView;