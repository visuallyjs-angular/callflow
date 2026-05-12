import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallFlowVariable } from "../definitions"
import { uuid, Vertex } from "@visuallyjs/browser-ui"

@Component({
  selector: 'app-set-variables-inspector',
  template: `
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Value</th>
          <th></th>
      </tr>
    </thead>
    <tbody>
      @for(variable of variables; track variable.id) {
          <tr>
            <td><input [value]="variable.name" type="text" (blur)="setName(variable.id, $event)" /></td>
            <td><input [value]="variable.value" type="text" (blur)="setValue(variable.id, $event)" /></td>
            <td><button (click)="deleteVariable(variable.id)">✖</button></td>
          </tr>
      }

      <tr>
        <td colspan="2">
          <hr style="color:whitesmoke" />
        </td>
      </tr>

      <tr>
        <td><input placeholder="new variable name" type="text" #newVariableNameInput /></td>
        <td><input placeholder="new variable value" type="text" #newVariableValueInput /></td>
        <td><button (click)="addVariable()">+</button></td>
      </tr>
    </tbody>
  </table>
  <div class="vjs-callflow-set-variables-buttons">
    <button (click)="commit()">Save</button>
    <button (click)="onCancel.emit()">Cancel</button>
  </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class SetVariablesInspectorComponent {
  private _obj!: Vertex;
  variables: Array<CallFlowVariable> = [];

  @Input() set obj(val: Vertex) {
    this._obj = val;
    this.variables = val.data.variables.map((v: CallFlowVariable) => Object.assign({}, v));
  }
  get obj(): Vertex { return this._obj; }

  @Output() onSave = new EventEmitter<Array<CallFlowVariable>>();
  @Output() onCancel = new EventEmitter<void>();

  @ViewChild('newVariableNameInput') newVariableNameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('newVariableValueInput') newVariableValueInput!: ElementRef<HTMLInputElement>;

  addVariable() {
    const nameEl = this.newVariableNameInput.nativeElement;
    const valueEl = this.newVariableValueInput.nativeElement;
    if (nameEl.value.length > 0 && valueEl.value.length > 0) {
      this.variables.push({
        name: nameEl.value,
        value: valueEl.value,
        id: uuid()
      })
      nameEl.value = ""
      valueEl.value = ""
    }
  }

  deleteVariable(id: string) {
    this.variables = this.variables.filter((v: CallFlowVariable) => v.id !== id)
  }

  setName(id: string, event: Event) {
    const target = event.target as HTMLInputElement
    const variable = this.variables.find(v => v.id === id)
    if (variable) {
      variable.name = target.value
    }
  }

  setValue(id: string, event: Event) {
    const target = event.target as HTMLInputElement
    const variable = this.variables.find(v => v.id === id)
    if (variable) {
      variable.value = target.value
    }
  }

  commit() {
    this.onSave.emit(this.variables)
  }
}
