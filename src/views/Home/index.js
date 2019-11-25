import { Component } from "inferno"
import Button from "../../components/Button"

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 })
  }

  hanldeDecrement() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div class="w-full h-screen flex flex-col justify-center items-center">
        <div class="text-red-500 uppercase tracking-widest">
          <p>Count: {this.state.count}</p>
        </div>
        <div class="mt-4 flex justify-center items-center">
          <Button onClick={() => this.handleIncrement()}>+ Increment</Button>
          <div className="px-2" />
          <Button onClick={() => this.hanldeDecrement()}>- Decrement</Button>
        </div>
      </div>
    )
  }
}

export default Home
