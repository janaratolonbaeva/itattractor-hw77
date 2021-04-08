import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Collapse from "@material-ui/core/Collapse";
import {makeStyles} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {postThread} from "../../store/actions/threadActions";
import FileInput from "../FileInput/FileInput/FileInput";

const useStyle = makeStyles({
	marginBottom: {
		marginBottom: '20px'
	}
});

const SendForm = () => {
	const dispatch = useDispatch();
	const [checked, setChecked] = useState(false);
	const [thread, setThread] = useState({
		author: '',
		message: '',
		image: ''
	});

	const classes = useStyle();

	const handleChange = () => {
		setChecked((prev) => !prev);
	};

	const threadSubmit = async e => {
		e.preventDefault();

		const formData = new FormData();

		Object.keys(thread).forEach(key => {
			formData.append(key, thread[key]);
		});

		dispatch(postThread(formData));

		setThread({
			author: '',
			message: '',
			image: ''
		});

		setChecked((prev) => !prev);
	};

	const inputChange = e => {
		const {name, value} = e.target;

		setThread(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	const fileChangeHandler = e => {
		const name = e.target.name;
		const file = e.target.files[0];

		setThread(prevState => ({
			...prevState,
			[name]: file
		}));
	};

	return (
		<div className={classes.marginBottom}>
			<Button
				variant="outlined"
				color="primary"
				onClick={handleChange}
				className={classes.marginBottom}
			>
				Answer the thread
			</Button>
			<Collapse in={checked}>
				<form onSubmit={threadSubmit}>
					<TextField
						variant="outlined"
						label="Author"
						name="author"
						value={thread.author}
						fullWidth
						className={classes.marginBottom}
						onChange={inputChange}
					/>
					<TextField
						multiline
						variant="outlined"
						label="message"
						name="message"
						value={thread.message}
						required
						fullWidth
						className={classes.marginBottom}
						onChange={inputChange}
					/>
					<FileInput
						name="image"
						label="Choose File"
						onChange={fileChangeHandler}
					/>
					<Button
						variant="contained"
						type="submit"
						color="primary"
					>
						Submit
					</Button>
				</form>
			</Collapse>
		</div>
	);
};

export default SendForm;