class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggle:true};
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state=>({
            isToggle:!state.isToggle
        }) );
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.isToggle?'ON':'OFF'}</button>
            </div>

        )
    }

  }
  
  ReactDOM.render(
    <Toggle />,
    document.getElementById('testing1')
  );