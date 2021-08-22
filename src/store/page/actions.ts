export const ADD_ELEMENT = 'ELEMENT'
export const CHANGE_ELEMENT = 'CHANGE_ELEMENT'

export interface Element {
    id: number,
    name: string,
    value: string,
    style: any
}

type AddElementAction = {
    type: typeof ADD_ELEMENT,
    payload: Element
}

type ChangeElementAction = {
    type: typeof CHANGE_ELEMENT,
    payload: Element
}

export type ElementAction = AddElementAction | ChangeElementAction

export const addElement = (element: Element): AddElementAction => ({
    type: ADD_ELEMENT,
    payload: element
})

export const changeElement = (element: Element): ChangeElementAction => ({
    type: CHANGE_ELEMENT,
    payload: element
})

