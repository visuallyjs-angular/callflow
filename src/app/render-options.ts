import {BackgroundPlugin, GeneratedGridBackground, AnchorLocations, CONNECTOR_TYPE_ORTHOGONAL} from "@visuallyjs/browser-ui";
import {AngularRenderOptions} from "@visuallyjs/browser-ui-angular";

const renderOptions:AngularRenderOptions = {

    // zoom content to fit on load
    zoomToFit:true,
    // allow user to right-click to inspect (in prod you probably want to leave this out)
    consumeRightClick:false,
    edges:{
        // paint a transparent outline around connectors, to make it easier to hover
        // to see the delete button.
        paintOutline:true,
        // anchors are always on the right edge of the source and the left edge of the target
        anchors:[AnchorLocations.Right, AnchorLocations.Left],
        // use an orthogonal connector with a 5px corner radius
        connector:{
            type:CONNECTOR_TYPE_ORTHOGONAL,
            options:{
                cornerRadius:5
            }
        }
    },
    plugins:[
        {
            type:BackgroundPlugin.type,
            options:{
                type:GeneratedGridBackground.type
            }
        }
    ]
}

export default renderOptions
