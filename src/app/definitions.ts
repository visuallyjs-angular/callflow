import { ObjectData } from "@visuallyjs/browser-ui"

export type CallFlowVariable = {name:string, value:string, id:string}

export type CallFlowCondition = {id:string, value:string}

export type CallFlowNodeTypeDef = {
    type:string,
    label:string,
    payload?:ObjectData
}

