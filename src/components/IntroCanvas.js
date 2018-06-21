import React, {Component} from 'react';

class CanvasHome extends Component {
  constructor(props) {
    super(props);

    this.ctx;
    this.starfield = [];

    console.log(this.props);
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.ctx.fillRect(0, 0, 1080, 600);

    //build a starfield for the canvas
    for (let i = 0; i < 512; i++) {
      // An array for aech star [x, y, o] -- x and y are randomized coords based on canvas size -- o is a random opacity from 0 to 1
      let s = [Math.floor(Math.random() * this.ctx.canvas.width), Math.floor(Math.random() * this.ctx.canvas.height), Math.random()];
      this.starfield.push(s);
    }

    for(let star of this.starfield) {
      this.ctx.fillStyle = `rgba(255,255,255,${star[2]})`;
      this.ctx.beginPath();
      this.ctx.arc(star[0], star[1], 1, 0, Math.PI * 2, true);
      this.ctx.closePath();
      this.ctx.fill();
    }
  }

  componentWillUnmount() {
    this.ctx = null;
  }

  render() {
    return (
      <div>
        <canvas ref={c => {if (c!== null) this.ctx = c.getContext('2d')}} width={1080} height={600}/>
      </div>
    );
  }
}

export default CanvasHome;