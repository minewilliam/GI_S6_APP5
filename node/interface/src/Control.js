import "./App.css";
import React from "react";
import axios from "axios";

// https://api.particle.io/v1/devices/E00FCE68986801735C908D66/LED

const STATUSURL = `http://localhost:3001/status`;
const SWITCHURL = `http://localhost:3001/switch`;

class Control extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			status: false,
		};
		this.switchLED = this.switchLED.bind(this);
	}

	componentDidMount() {
		axios.get(STATUSURL).then((res) => {
			this.setState({
				status: res.data.result,
			});
		});
	}

	switchLED() {
		axios
			.post(SWITCHURL)
			.then((res) => {
				this.setState({
					status: res.data.result,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

    render()
    {
        return (
            <div>
                Click{" "}
                <a style={{ color: "blue" }} onClick={this.switchLED}>
                    HERE
                </a>{" "}
                to switch the LED on or off.
                <br />
                LED status: {`${this.state.status}`}
            </div>
        );
    }
}

export default Control;