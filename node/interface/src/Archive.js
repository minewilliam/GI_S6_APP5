import "./App.css";
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import axios from "axios";
import { Button } from "@mui/material";
import Item from "./Item.js"

const ARCHIVEURL = `http://localhost:3002/`;

class Archive extends React.Component {
    constructor (props){
        super(props);

        this.state = {
			items: [],
		};
    }

    get_Items(){
        console.log("Requesting update");
        axios.get(ARCHIVEURL).then((res) => {
            this.setState({
				items: res.data.result,
			});
		});
        return;
    }

    render(){
        return (
            <Stack spacing={0.5} >
                <Item style={{maxHeight: 300, overflow: 'auto'}}>
                    <List spacing={0.2}>
                        {this.state.items.map((value) => {
                            return (
                                <ListItem>
                                    <ListItemText primary={value} />
                                </ListItem>
                            );
                        })}
                    </List>
                </Item>
                <Item>
                    <Button variant="contained" onClick={() => this.get_Items()}>
                        Update
                    </Button>
                </Item>
            </Stack>
        );
    }
}

export default Archive;