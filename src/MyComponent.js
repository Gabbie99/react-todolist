




var MyComponent = (props)=>{
    console.log(props)
    return (
        <div className="Component">
            <h1>{props.salute} my name is {props.name}. I am a {props.gender} in her {props.age} at her prime.</h1>
            <p>We're running react and learning to deploy websites</p>

        </div>
    )
}
export default MyComponent