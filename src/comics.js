import React, {Component} from 'react';
import $ from 'jquery';
import * as actions from './actions';
import { connect } from 'react-redux';
import * as services from './services';
import reducers from './reducers';


class Comics extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {
            offset : 0,
            chars : [],
            characterId : ''
        }
    }

    componentDidMount() {
        this.getChars();
    }

    getChars(){
        var that = this;
        var offset = this.state.offset;
        services.getCharas(offset).done(function(res){
            var chars = res.data.results;
            that.props.getCharaters(chars);
            that.getCharsNames();
        });
    }

    getCharsNames() {
        var results = this.props.characters;
        for(var i=0; i<results.length; i++){
            this.setState({
                chars : this.state.chars.concat(results[i])
            })
        }
    }

    getCharById(e){
        var id = e.currentTarget.id;
        var that = this;
        services.getCharasById(id).done(function(res){
            var charById = res.data.results;
            that.props.getCharsById(charById);
        });
    }

    loadMore(){
        this.state.offset = this.state.offset + 20;
        this.getChars();
    }

    render(){
        return (
            <div>
                Comics
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return {
//         characters: state.characters,
//         characterById: state.characterById
//     }
// }

// function mapDispatchToProps(dispatch){
//     return {
//         getCharaters: function(chars){
//             actions.getCharaters(dispatch,chars);
//         }
//     }
// }

export default connect()(Comics);