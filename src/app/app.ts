import { Component } from '@angular/core';
import { VisuallyJsModule } from "@visuallyjs/browser-ui-angular";

import renderOptions from "./render-options"
import viewOptions from "./view-options"
import modelOptions from "./model-options"
import {CallFlowPaletteComponent} from "./components/palette.component";
import {CallFlowInspectorComponent} from "./components/inspector.component";

@Component({
  selector: 'app-root',
  imports: [VisuallyJsModule, CallFlowPaletteComponent, CallFlowInspectorComponent],
  templateUrl: './app.html'
})
export class App {
  renderOptions = renderOptions
  viewOptions= viewOptions
  modelOptions = modelOptions
  url = "/callflow.json"
}
