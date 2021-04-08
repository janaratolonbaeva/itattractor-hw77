import React, {useRef, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
	marginBottom: {
		marginBottom: '20px'
	},
	fileInput: {
		display: 'none'
	},
	button: {
		marginLeft: '10px'
	}
});

const FileInput = ({onChange, name, label}) => {
	const inputRef = useRef();
	const [filename, setFilename] = useState('');
	const classes = useStyle();

	const activateInput = () => {
		inputRef.current.click();
	};

	const onFileChange = e => {
		if (e.target.files[0]) {
			setFilename(e.target.files[0].name);
		} else {
			setFilename('');
		}

		onChange(e);
	};

	return (
		<>
			<input
				className={classes.fileInput}
				type="file"
				name={name}
				ref={inputRef}
				onChange={onFileChange}
			/>
			<Grid container alignItems="center" className={classes.marginBottom}>
				<Grid item xs>
					<TextField
						variant="outlined"
						label={label}
						value={filename}
						fullWidth
						disabled
						onClick={activateInput}
					/>
				</Grid>
				<Grid>
					<Button
						variant="contained"
						type="button"
						className={classes.button}
						onClick={activateInput}
					>
						Browse
					</Button>
				</Grid>
			</Grid>
		</>
	);
};

export default FileInput;