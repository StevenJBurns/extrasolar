import React from 'react';

export class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      ctx: null,
      starfield: [],
      w: window.innerWidth
    }
  }

  updateCanvas() {
    this.setState({ ...this.state, w: window.innerWidth });
    console.log(this.state)
  };

  componentDidMount() {
    console.log(this.w);
    window.addEventListener("resize", this.updateCanvas.bind(this));
    
    this.ctx.fillRect(0, 0, this.state.w, this.state.h);

    //build a starfield for the canvas
    if (this.state.ctx) {
      for (let i = 0; i < 512; i++) {
        let randomX = Math.floor(Math.random() * this.state.ctx.canvas.width);
        let randomY = Math.floor(Math.random() * this.state.ctx.canvas.height);
        let randomO = Math.random();

        // An array for each star [x, y, o] -- x and y are randomized coords based on canvas size -- o is a random opacity from 0 to 1
        let s = [randomX, randomY, randomO];
        this.state.starfield.push(s);
      }

      for(let star of this.state.starfield) {
        this.ctx.fillStyle = `rgba(255,255,255,${star[2]})`;
        this.ctx.beginPath();
        this.ctx.arc(star[0], star[1], 1, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fill();
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateCanvas.bind(this))
    this.ctx = null;
  }

  render() {
    return (
      <div>
        <canvas ref={c => {if (c!== null) this.ctx = c.getContext('2d')}} width={this.state.w} height={this.state.w <= 800 ? this.state.w / 2 : 400} />
      </div>
    );
  }
}
