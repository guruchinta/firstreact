

class Header extends React.Component {
    render() {
      const optionsLis = ['First','Second','Third','Fourth'];
      return (
        <div>
          <h1>Indecision</h1>
          <h2>Put your life in the hands of a computer</h2>
          <Action />
          <Options optionsLis={optionsLis} title="TestingOptions"/>
          <AddOption />
        </div>
      );
    }
  }
  
  class Action extends React.Component {
    ClickMethod(){
        alert("Hello Guru");
    }
    render() {
    console.log(this.props )
      return (
        <div>
          <button onClick={this.ClickMethod}>Action Class here </button>
          {
            
          }
          
        </div>
      );
    }
  }
  
  class Options extends React.Component {
    constructor(props){
        super(props);
        this.RemoveAll = this.RemoveAll.bind(this);
    }
    RemoveAll(){
        console.log("Print Length" +this.props.optionsLis.length)
        console.log(this.props.optionsLis);
    }

    handleAll(){

    }

    FireALl(){

    }

    render() {
      return (
        <div>
        <button onClick={this.RemoveAll}> Remove All Buttons</button>
        <span> </span>
        <button onClick={this.handleAll}>Handle All Buttons</button>
        <span> </span>
        <button onClick={this.FireAll}> Fire Method </button>
        <span> </span>

          Options component here
          <p>{this.props.optionsLis.length}</p>
          <Option/>
          {
              this.props.optionsLis.map((item)=><p key={item}>{item} Option</p> )
          }
        </div>
      );
    }
  }
  
  class Option extends React.Component{
      render(){
          return(
            <div>
            <p> Option Component Here</p>
            </div>
          );
      }
  }
  class AddOption extends React.Component {
    SubmitForm(e){
        // e.preventDefault();
        e.preventDefault();
        const value= e.target.elements.textForm.value;
        if(value){
            alert(value);
        }
    }
    render() {
      return (
        <div>
          AddOption component here
          <form onSubmit={this.SubmitForm}>
          <input type="text"  name="textForm"/>
          <button> SubmitForm</button>
          </form>
        </div>
      );
    }
  }
  
  const jsx = (
    <div>
      <Header />
      
    </div>
  );
  
  ReactDOM.render(jsx, document.getElementById('app'));