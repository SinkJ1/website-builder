import { Element, ElementAction, ADD_ELEMENT, CHANGE_ELEMENT } from "./actions"

export interface ElementConfig {
    elements: Element[]
}

const defaultState: ElementConfig = {
    elements: []
}

export const elementReducer = (state: ElementConfig = defaultState, action: ElementAction): ElementConfig => {
    switch (action.type) {
        case ADD_ELEMENT:
            return {
                ...state,
                elements: state.elements.concat(action.payload)
            }
        case CHANGE_ELEMENT:
            return {
                ...state,
                elements: state.elements.map(
                    (element: Element) => element.id === action.payload.id ? { ...element, value: action.payload.value }
                        : element
                )
            }
    }
    return state
}