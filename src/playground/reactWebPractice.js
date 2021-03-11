function tick(){
    const element = (
        <div>
            <h1>Hello Practice </h1>
            <h2> It is {new Date().toLocaleTimeString() }</h2>
            
        </div>

    );
    ReactDOM.render(element,document.getElementById('app'));

    // alert("hello");
}

setInterval(tick,1000);


function Welcome(props){
    return (
        <div>
            <h1> Welcome Mr. {props.name} Chinta</h1>
        </div>
    );
}

const element2=(
    <Welcome name="Gurumlalikharjuna"/>
)

ReactDOM.render(element2,document.getElementById("testing"))




class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state  = {date:new Date()}
    }

    ComponentDidMount(){
        this.timerID = setInterval(
            ()=> this.tick(),1000
        );
    }
    ComponentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState(
            {
                date:new Date()
            }
        );
    }


    render(){
        return (
            <div>
                <h1>Hey testing1</h1>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
        
    }


}


ReactDOM.render(<Clock/>,document.getElementById("testing1"));



