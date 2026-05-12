import { AnchorLocations, BrowserElement, EVENT_TAP, NodeEventCallbackPayload, DEFAULT, OVERLAY_VISIBILITY_HOVER, PlainArrowOverlay, PortEventCallbackPayload, OverlayVisibility } from "@visuallyjs/browser-ui";
import {
    SELECTABLE,
    TYPE_CALL_FORWARD,
    TYPE_CONDITIONS,
    TYPE_KEYPAD_ENTRY,
    TYPE_REQUEST,
    TYPE_SET_VARIABLES
} from "./constants";
import { BasicNodeComponent } from "./components/basic-node.component";
import { SetVariablesComponent } from "./components/set-variables.component";
import { RequestNodeComponent } from "./components/request-node.component";
import { KeypadEntryComponent } from "./components/keypad-entry.component";
import { ConditionsComponent } from "./components/conditions.component";
import { CallForwardingComponent } from "./components/call-forwarding.component";

/**
 * View options map node/group types to the component used to render them and to various aspects of the given vertex type's
 * behaviour. They also allow you to map edge types to edge appearance and behaviour, although for simple config
 * you can use the `edges` render option in place of an edge mapping a view (see code above).
 */
const viewOptions = {
    nodes: {
        // abstract parent mapping with an event binding to the TAP event - user taps a node
        // and it is set as the Toolkit's current selection.
        [SELECTABLE]: {
            events: {
                [EVENT_TAP]: (p: NodeEventCallbackPayload<BrowserElement>) => {
                    p.model.setSelection(p.obj)
                }
            }
        },
        [DEFAULT]: {
            // The default mapping uses `BasicNodeComponent`, which shows a label and
            // optionally some text. If there is no other mapping found for a node this
            // one is used.
            parent: SELECTABLE,
            component: BasicNodeComponent
        },
        // Some more complex nodes have their own components...
        [TYPE_SET_VARIABLES]: {
            parent: SELECTABLE,
            component: SetVariablesComponent
        },
        [TYPE_REQUEST]: {
            parent: SELECTABLE,
            component: RequestNodeComponent
        },
        [TYPE_KEYPAD_ENTRY]: {
            parent: SELECTABLE,
            component: KeypadEntryComponent
        },
        [TYPE_CONDITIONS]: {
            parent: SELECTABLE,
            component: ConditionsComponent
        },
        [TYPE_CALL_FORWARD]: {
            parent: SELECTABLE,
            component: CallForwardingComponent
        }
    },
    edges: {
        [DEFAULT]: {
            // edges have a delete button that is visible on hover (although on
            // a touch device visuallyjs will ensure it is always visible)
            deleteButton: OVERLAY_VISIBILITY_HOVER as OverlayVisibility,
            targetMarker: {
                // show a plain arrow at the end of each edge.
                type: PlainArrowOverlay.type,
                options: {
                    width: 10,
                    length: 10
                }
            }
        }
    }
}

export default viewOptions
