import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SendForm from "../../components/SendForm/SendForm";
import {useDispatch, useSelector} from "react-redux";
import {fetchThreads} from "../../store/actions/threadActions";
import ThreadItem from "../ThreadItem";

const ThreadPage = () => {
	const dispatch = useDispatch();
	const messages = useSelector(state => state.messages);

	useEffect(() => {
		dispatch(fetchThreads());
	}, [dispatch]);

	return (
		<Container maxWidth="sm">
			<Grid container direction="column">
				<Grid item>
					<SendForm/>
				</Grid>
				{messages ? messages.map(item => (
					<ThreadItem
						key={item.id}
						image={item.image}
						author={item.author}
						message={item.message}
					/>
				)): null}
			</Grid>
		</Container>
	);
};

export default ThreadPage;