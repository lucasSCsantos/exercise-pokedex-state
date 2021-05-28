import './Pokemon.css'
import React from 'react';

class Pokemon extends React.Component {
  render() {
		const codeColors = {
			'Electric': 'yellow',
			'Fire': 'red',
			'Bug': 'green',
			'Poison': 'purple',
			'Psychic': 'violet',
			'Normal': 'grey',
			'Dragon': 'pink'
		};
		let typeColor = '';

		for (const key in codeColors) {
			if(key === this.props.pokemon.type){
				typeColor = codeColors[key];
				console.log(typeColor)
			}
		}
		
    return (
      <section>
				<div className="pokemonLeft" style={{width: '100%'}}>
					<div className="nameType">
						<p>
							{this.props.pokemon.name}
						</p>
						<div className="type" style={{backgroundColor: `${typeColor}`}}>
							<p>
								{this.props.pokemon.type}
							</p>
						</div>
					</div>
					<p>
						Id: {this.props.pokemon.id}
					</p>
					<p>
						Height: {this.props.pokemon.averageWeight.value}{this.props.pokemon.averageWeight.measurementUnit}
					</p>
				</div>
				<div className="pokemonRight">
					<img src={this.props.pokemon.image} alt={this.props.pokemon.name}></img>
				</div>
			</section>
    );
  }
}

export default Pokemon;