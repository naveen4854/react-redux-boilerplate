import { SAMPLE } from "./home.constants"

export const increaseCount = (number) => {
    return {
        type: SAMPLE,
        payload: { count: number + 1 }
    }
}