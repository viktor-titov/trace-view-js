/**
 * Build a tree of { value: spanID, children } items derived from the
 * `span.references` information. The tree represents the grouping of parent /
 * child relationships. The root-most node is nominal in that
 * `.value === TREE_ROOT_ID`. This is done because a root span (the main trace
 * span) is not always included with the trace data. Thus, there can be
 * multiple top-level spans, and the root node acts as their common parent.
 *
 * The children are sorted by `span.startTime` after the tree is built.
 *
 * @param  {Trace} trace The trace to build the tree of spanIDs.
 * @return {TreeNode}    A tree of spanIDs derived from the relationships
 *                       between spans in the trace.
 */
export function getTraceSpanIdsAsTree(trace: Trace): TreeNode;
export function getTraceId(trace: any): any;
export function getTraceSpans(trace: any): any;
export const getTraceSpansAsMap: any;
export const TREE_ROOT_ID: "__root__";
export function hydrateSpansWithProcesses(trace: any): any;
export const getTraceSpanCount: any;
export const getTraceTimestamp: any;
export const getTraceDuration: any;
export const getTraceEndTimestamp: any;
export const getParentSpan: any;
export const getTraceDepth: any;
export const getSpanDepthForTrace: any;
export const getTraceServices: any;
export const getTraceServiceCount: any;
export namespace DURATION_FORMATTERS {
    export { formatMillisecondTime as ms };
    export { formatSecondTime as s };
}
export const formatDurationForUnit: any;
export const formatDurationForTrace: any;
export const getSortedSpans: any;
export const getTreeSizeForTraceSpan: any;
export const getSpanHierarchySortPositionForTrace: any;
export const getTraceName: any;
export const omitCollapsedSpans: any;
export const DEFAULT_TICK_INTERVAL: 4;
export const DEFAULT_TICK_WIDTH: 3;
export const getTicksForTrace: any;
export const enforceUniqueSpanIds: any;
export const dropEmptyStartTimeSpans: any;
import TreeNode from '../utils/TreeNode';
import { formatMillisecondTime } from '../utils/date';
import { formatSecondTime } from '../utils/date';
