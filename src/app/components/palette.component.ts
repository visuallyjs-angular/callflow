import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    VisuallyJsModule
} from "@visuallyjs/browser-ui-angular";
import { NODE_TYPES } from "../node-types";
import {BrowserElement} from "@visuallyjs/browser-ui";

@Component({
  selector: 'app-palette',
  template: `
    <div vjs-palette [dataGenerator]="dataGenerator" class="vjs-callflow-palette">
      @for(nt of nodeTypes; track nt) {
          <div class="vjs-callflow-palette-item" [attr.data-vjs-type]="nt.type" title="Drag to add new">
			  <div class="vjs-callflow-node-icon"></div>
			  {{ nt.label }}
		  </div>
      }
    </div>
  `,
  standalone: true,
  imports: [CommonModule, VisuallyJsModule]
})
export class CallFlowPaletteComponent {
  nodeTypes = NODE_TYPES;

  dataGenerator(el: BrowserElement) {
    const type = el.getAttribute("data-vjs-type")
    const nt = NODE_TYPES.find(t => t.type === type)
    const base: any = { type }
    if (nt && nt.payload) {
        Object.assign(base, JSON.parse(JSON.stringify(nt.payload)))
    }
    return base
  }
}
