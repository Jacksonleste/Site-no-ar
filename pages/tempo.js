function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicString =dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicString} (Dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>
        </div>
    ) 
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

export default Tempo;