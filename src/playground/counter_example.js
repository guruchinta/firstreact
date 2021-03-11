class CounterComponent extends React.Component{
    constructor(props){
        super(props);
        this.AdditionMethod = this.AdditionMethod.bind(this);
        this.SubMethod = this.SubMethod.bind(this);
        this.ResetMethod = this.ResetMethod.bind(this);
        this.state = {
            count:0
        };
    }
    AdditionMethod(){
        this.setState( 
            (prevStat) =>{
                return {
                    count:prevStat.count+1 
                };

            }
        )
    }
    SubMethod(){
        this.setState(
            (prevStat)=>{
                return {
                    count:prevStat.count-1
                }
            }

        )
            
    }
    ResetMethod(){
        this.setState(
            (prevStat)=>{
                return {
                    count:0
                }
            }
        )

    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.AdditionMethod}>+1</button>
                <button onClick={this.SubMethod}>-1</button>
                <button onClick={this.ResetMethod}>Reset</button>


            </div>
        )
        
    }

}


ReactDOM.render(<CounterComponent/>,document.getElementById('app'));