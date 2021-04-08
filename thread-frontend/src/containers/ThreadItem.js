import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
	root: {
		marginBottom: '20px'
	},
	card: {
		display: 'flex',
		padding: '10px',
	},
	image: {
		display: 'block',
		width: '150px',
		height: '150px',
		marginRight: '20px',
		borderRadius: '6px'
	}
});

const ThreadItem = ({image, author, message}) => {
	const classes = useStyle();

	return (
		<Grid item className={classes.root}>
			<Card className={classes.card}>
				<CardMedia
					className={classes.image}
					image={`http://localhost:8000/uploads/${image}`}
					title="some media"
				/>
				<CardContent>
					<Typography variant="h6">{author}</Typography>
					<Typography variant="body1">{message}</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default ThreadItem;