import { createEffect, createSignal, onCleanup } from "solid-js";

export default function Counter (props) {
    const [count, setCount] = createSignal(props.init)
    setInterval(() => setCount(count() * 2), 1000)
    createEffect(() => {
        console.log(count());
    })
    return <>
    <h1>{count()}</h1>
    </>
}