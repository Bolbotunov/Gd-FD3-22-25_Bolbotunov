
export const ACTION_MINUS = '-'
export const ACTION_PLUS = '+'

const initState = {
    showCommand: '',
    count: 0
}

export type ReduxAction = {
    type: typeof ACTION_MINUS | typeof ACTION_PLUS,
    showCommand: string,
    count: number,
}


export default function numberReducer(state = initState, action: ReduxAction) {
    switch (action?.type) {
        case '+':
            return {
                showCommand: '+',
                count: action.count + 1,
            }
        case '-':
            return {
                showCommand: '-',
                count: action.count - 1,
            }
            default:
            return state;
    }
}