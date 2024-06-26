import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTheme } from '@grafana/ui';

import {
  KeyValuePair,
  Link,
  Span,
  ThemeOptions,
  ThemeProvider,
  ThemeType,
  Trace,
  TraceData,
  TracePageHeader,
  TraceTimelineViewer,
  transformTraceData,
  TTraceTimeline,
  UIElementsContext,
} from '../jaeger-ui-components';

import { UIElements } from './ui-elements';
import { useViewRange } from './services/view-range';
import { useSearch } from './services/search';
import { useChildrenState } from './services/children-state';
import { useDetailState } from './services/detail-state';
import { useHoverIndentGuide } from './services/hover-indent-guide';
import { colors } from './utils/colors';
import { TraceProps } from '../types/TraceProps';

const emptyTrace: TraceProps["trace"] = {
  traceID: "empty",
  processes: {},
  spans: [],
} 

export function TraceViewComponent(props?: TraceProps) {
  const { expandOne, collapseOne, childrenToggle, collapseAll, childrenHiddenIDs, expandAll } = useChildrenState();
  const {
    detailStates,
    toggleDetail,
    detailLogItemToggle,
    detailLogsToggle,
    detailProcessToggle,
    detailReferencesToggle,
    detailTagsToggle,
    detailWarningsToggle,
  } = useDetailState();
  const { removeHoverIndentGuideId, addHoverIndentGuideId, hoverIndentGuideIds } = useHoverIndentGuide();
  const { viewRange, updateViewRangeTime, updateNextViewRangeTime } = useViewRange();

  /**
   * Keeps state of resizable name column width
   */
  const [spanNameColumnWidth, setSpanNameColumnWidth] = useState(0.25);
  /**
   * State of the top minimap, slim means it is collapsed.
   */
  const [slim, setSlim] = useState(false);

  const traceProp = useMemo(() => transformTraceData(props.trace ?? emptyTrace), [props.trace]);
  const { search, setSearch, spanFindMatches } = useSearch(traceProp?.spans);

  const theme = useTheme();
  const traceTheme = useMemo(
    () => ({ type: ThemeType.Light, servicesColorPalette: colors } as ThemeOptions),
    [theme]
  );
  const traceTimeline: TTraceTimeline = useMemo(
    () => ({
      childrenHiddenIDs,
      detailStates,
      hoverIndentGuideIds,
      shouldScrollToFirstUiFindMatch: false,
      spanNameColumnWidth,
      traceID: traceProp.traceID,
    }),
    [childrenHiddenIDs, detailStates, hoverIndentGuideIds, spanNameColumnWidth, traceProp.traceID]
  );

  return (
    <ThemeProvider value={traceTheme}>
      <UIElementsContext.Provider value={UIElements}>
        <TracePageHeader
          canCollapse={true}
          clearSearch={useCallback(() => {}, [])}
          focusUiFindMatches={useCallback(() => {}, [])}
          hideMap={false}
          hideSummary={false}
          nextResult={useCallback(() => {}, [])}
          onSlimViewClicked={useCallback(() => setSlim(!slim), [])}
          onTraceGraphViewClicked={useCallback(() => {}, [])}
          prevResult={useCallback(() => {}, [])}
          resultCount={0}
          slimView={slim}
          textFilter={null}
          trace={traceProp}
          traceGraphView={false}
          updateNextViewRangeTime={updateNextViewRangeTime}
          updateViewRangeTime={updateViewRangeTime}
          viewRange={viewRange}
          searchValue={search}
          onSearchValueChange={setSearch}
          hideSearchButtons={true}
        />
        <TraceTimelineViewer
          registerAccessors={useCallback(() => {}, [])}
          scrollToFirstVisibleSpan={useCallback(() => {}, [])}
          findMatchesIDs={spanFindMatches}
          trace={traceProp}
          traceTimeline={traceTimeline}
          updateNextViewRangeTime={updateNextViewRangeTime}
          updateViewRangeTime={updateViewRangeTime}
          viewRange={viewRange}
          focusSpan={useCallback(() => {}, [])}
          createLinkToExternalSpan={useCallback(() => '', [])}
          setSpanNameColumnWidth={setSpanNameColumnWidth}
          collapseAll={collapseAll}
          collapseOne={collapseOne}
          expandAll={expandAll}
          expandOne={expandOne}
          childrenToggle={childrenToggle}
          clearShouldScrollToFirstUiFindMatch={useCallback(() => {}, [])}
          detailLogItemToggle={detailLogItemToggle}
          detailLogsToggle={detailLogsToggle}
          detailWarningsToggle={detailWarningsToggle}
          detailReferencesToggle={detailReferencesToggle}
          detailProcessToggle={detailProcessToggle}
          detailTagsToggle={detailTagsToggle}
          detailToggle={toggleDetail}
          setTrace={useCallback((trace: Trace | null, uiFind: string | null) => {}, [])}
          addHoverIndentGuideId={addHoverIndentGuideId}
          removeHoverIndentGuideId={removeHoverIndentGuideId}
          linksGetter={useCallback((span: Span, items: KeyValuePair[], itemIndex: number) => [] as Link[], [])}
          uiFind={search}
        />
      </UIElementsContext.Provider>
    </ThemeProvider>
  );
}
