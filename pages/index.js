import React, { Component } from 'react'
import { Container,
				 Segment,
				 Menu,
				 Divider,
				 Image,
				 Grid,
				 Header,
				 Icon,
				 Popup } from 'semantic-ui-react'

export default class App extends Component {

	state = {activeItem: 'home'}

	handleMenuClick = (e, { name }) => this.setState({ activeItem: name })

	render() {

		const { activeItem } = this.state
		return (
			<div>
			<Container text style={{ marginTop: '3em' }}>
				<style>{`
					html,body {
						background-color: #010101 !important;
					}

					p {
				        align-content: center;
				        background-color: #000000;
				        color: #fff;
				        display: flex;
				        flex-direction: column;
				        justify-content: center;
				        min-height: 6em;
				    }

				  .icon-block-container {
				  	text-align: center;
				  	padding: 10px 10px 0px 10px;
				  }

				  .icon-block {
				  	display: inline-block;
				  }
				`}</style>
				<div>
					<Header as='h2' inverted textAlign='center'>
						<Header.Content>Noodle</Header.Content>
						<Header.Subheader>
							Wordle but for pasta
						</Header.Subheader>
					</Header>
					<Image circular centered size='large' src='static/images/ramen.jpg' />
					<div className='icon-block-container'>
						<div className='icon-block'>
						foo
						</div>
					</div>
				</div>
				<Divider />

				<Grid columns='1'>
					<Grid.Row>
						<Grid.Column>
							<Segment color='grey' align='center' inverted raised >
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
			</div>
		)
	}

}