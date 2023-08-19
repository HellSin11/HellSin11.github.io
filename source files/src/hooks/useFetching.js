import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(undefined)

    const fetching = async (q) => {
        try {
            setIsLoading(true)
            await callback(q);
            setError(undefined)
        } catch (e) {
            setError(e.message)
            console.log("e.message: " + e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]

}