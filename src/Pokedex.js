import './Pokedex.css';
import Pokemon from './Pokemon';
import data from './data';
import React from 'react';
import Button from './Button';

class Pokedex extends React.Component {
  constructor() {
		super();
		
		this.state = {
			pokemonNumber: 0,
			data: data,
		}
		this.pokemonChangeFront = this.pokemonChangeFront.bind(this);
		this.pokemonChangeBack = this.pokemonChangeBack.bind(this);
		this.pokemonFilter = this.pokemonFilter.bind(this);
	}

	pokemonChangeFront() {
		if (this.state.pokemonNumber === this.state.data.length - 1){
			this.setState(() => ({
				pokemonNumber: 0,
			}))
		} else {
			this.setState((previousState, _props) => ({
				pokemonNumber: previousState.pokemonNumber + 1,
			}))
		}
	}

	pokemonChangeBack() {
		if (this.state.pokemonNumber === 0){
			this.setState(() => ({
				pokemonNumber: this.state.data.length - 1,
			}))
		} else {
			this.setState((previousState, _props) => ({
				pokemonNumber: previousState.pokemonNumber - 1,
			}))
		}
	}

	pokemonFilter(type) {
		const tipo = (type.target.innerText);
		if(tipo !== 'All'){
			const newData = data.filter((pokemon) => pokemon.type === tipo);
			this.setState(() => ({
				data: newData,
				pokemonNumber: 0,
			}))
		}else{
			this.setState(() => ({
				data: data,
				pokemonNumber: 0,
			}))
		}
	}
	
	render() {
    return (
			<main>
				<div className="pokedex">
					<div className="topSide">
						<div className="topSideLeft">
							<div className="circleArea">
								<div className="circle">
								<div className="circleIntern">
									<div className="moon"></div>
								</div>
								</div>
							</div>
							<div className="miniCircles">
								<div className="circleA">
									<div className="moonB"></div>
								</div>
								<div className="circleB">
									<div className="moonB"></div>
								</div>
								<div className="circleC">
									<div className="moonB"></div>
								</div>
							</div>
						</div>
						<div className="topSideRight"></div>
					</div>
						<div className="mainDiv">
							<Pokemon pokemon={ this.state.data[this.state.pokemonNumber] } />
							<aside>
								{this.state.data.map((pokemon) => (
									<Button function={this.pokemonFilter} pokemon={ pokemon } />
								))}
								<button onClick={this.pokemonFilter}>All</button>
								{/* <button onClick={this.pokemonFilter}>Electric</button>
								<button onClick={this.pokemonFilter}>Fire</button>
								<button onClick={this.pokemonFilter}>Bug</button>
								<button onClick={this.pokemonFilter}>Poison</button>
								<button onClick={this.pokemonFilter}>Psychic</button>
								<button onClick={this.pokemonFilter}>Normal</button>
								<button onClick={this.pokemonFilter}>Dragon</button> */}
							</aside>
						</div>
							<div className="changeButtons">
								<button onClick={this.pokemonChangeBack}>Previous</button>
								<button onClick={this.pokemonChangeFront}>Next</button>
							</div>
				</div>
			</main>
		);
  }
}

export default Pokedex;