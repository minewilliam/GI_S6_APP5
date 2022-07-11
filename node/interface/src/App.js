import "./App.css";
import React from "react";
import Control from "./Control.js"
import Archive from "./Archive";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"
import Item from "./Item.js"

class App extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
		<div className="App">
			<header className="App-header">
				<Grid container spacing={2}>
					<Grid item>
						<Item>
							<Control/>
						</Item>
					</Grid>
					<Grid item xs>
						<Item>
							<Archive/>
						</Item>
					</Grid>
				</Grid>
			</header>
		</div>
		);
	}
}

export default App;
