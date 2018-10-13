import React, {Component, PropTypes} from 'react';
import $ from 'jquery';
import envKeys from './.envKeys.js';
import * as actions from './actions';
import { connect } from 'react-redux';
import * as services from './services';
import reducers from './reducers';
import { createStore } from 'redux';

const store = createStore(reducers);

class CharactersById extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {
            chars : []
        }
    }

    componentDidMount() {
        // $('#charById').text(JSON.stringify(this.props.characterId));
        var character = this.props.characterId[0];
        this.displayCharacter(character);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.characterId !== this.props.characterId){
            $('#charById').text('');
            var character = nextProps.characterId[0];
            this.displayCharacter(character);
            // $('#charById').text(JSON.stringify(charId));
        }
    }

    displayCharacter(character){
        for(var key in character){
            // if(typeof character[key] == 'object'){
            //     this.displayCharacter(character[key]);
            // }
            $('#charById').append('<tr><td>'+key+'</td><td>'+JSON.stringify(character[key])+'</td></tr>');
            
        }
    }

    render(){
        return (
            <div>
                <table id="charById" border="1"></table>
            </div>
        )
    }
}

export default connect()(CharactersById);