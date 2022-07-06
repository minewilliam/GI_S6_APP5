import "./App.css";
import React from "react";
import axios from "axios";

// https://api.particle.io/v1/devices/E00FCE68986801735C908D66/LED

const DEVID = "https://api.particle.io/v1/devices/E00FCE68986801735C908D66";
const ACCESSTOKEN = "9bf9cd2bbb783ae5a966e1eea48c4f568ce4da29";
const PARTICLEAPI = `${DEVID}/status?access_token=${ACCESSTOKEN}`;
const POSTURL = `${DEVID}/LED?access_token=${ACCESSTOKEN}`;

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			status: false,
		};
		this.switchLED = this.switchLED.bind(this);
	}

	componentDidMount() {
		axios.get(PARTICLEAPI).then((res) => {
			this.setState({
				status: res.data.result,
			});
		});
	}

	switchLED() {
		axios
			.post(POSTURL)
			.then((res) => {
				console.log(res.data.return_value);
				this.setState({
					status: res.data.return_value,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>
						Click{" "}
						<a style={{ color: "blue" }} onClick={this.switchLED}>
							HERE
						</a>{" "}
						to switch the LED on or off.
						<br />
						LED status: {`${this.state.status}`}
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
