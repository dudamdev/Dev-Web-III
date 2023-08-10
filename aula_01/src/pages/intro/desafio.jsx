export default function Desafio() {
    return (
        <>
            {render()}
            {render(20)}
        </>
    )
}

function render(final = 10) {
    const array = [];
    for (let index = 1; index <= final; index++) {
        array.push(<div>{index}</div>)
    }
    return array
}