// // class NameForm extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {value: ''};

// //     this.handleChange = this.handleChange.bind(this);
// //     this.handleSubmit = this.handleSubmit.bind(this);
// //   }

// //   handleChange(event) {
// //     this.setState({value: event.target.value});
// //   }

// //   handleSubmit(event) {
// //     alert('A name was submitted: ' + this.state.value);
// //     event.preventDefault();
// //   }

// //   render() {
// //     return (
// //       <form onSubmit={this.handleSubmit}>
// //         <label>
// //           Name:
// //           <input type="text" value={this.state.value} onChange={this.handleChange} />
// //         </label>
// //         <input type="submit" value="Submit" />
// //       </form>
// //     );
// //   }
// // }

// // ReactDOM.render(
// //   <NameForm />,
// //   document.getElementById('root')
// // );

// const e = React.createElement;

// class button extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//     this.count = 0;
//     this.message = "abc";
//     this.value=0;

//     // this.state = {value: ''};
//     // this.handleChange = this.handleChange.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     if (this.state.liked) {
//         // this.count+=1;
//         // if (this.count == 1){
//         //     return e(
//         //         'button',
//         //         { onClick: () => this.setState({ liked: false }) },
//         //         'I was clicked once'
//         //       );
//         // }
//         return e('button',
//           <input type="text" value={this.value} />, this.message
//           );
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       this.message, 'Click Me!!'
//     );

//   }
// }

// const domContainer = document.querySelector('#root');
// ReactDOM.render(e(button), domContainer);

// _____________________________________________________________

// ReactDOM.render(
//   <img src='react_logo.png' height={200}/>,
//   document.getElementById('root')
// );

const e = React.createElement;

class button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.count = 0;
  }

  render() {
    this.count+=1;
    if (this.count>=1){
      return e(<button id="b1">Now this is a button object</button>, this.count);
    }
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      this.count,
      'Click Me!'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(button), domContainer);