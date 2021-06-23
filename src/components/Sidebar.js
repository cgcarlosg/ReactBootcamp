import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Sidebar extends Component {

    searchRef = React.createRef();

    state = {
        search: "",
        redirect: false
    }

    redirectToSearch = (e) => {
        e.preventDefault();
        
        this.setState({
            search: this.searchRef.current.value,
            redirect: true
        });
    }

    render() {

        if(this.state.redirect){

            return(
                <Redirect to={'/redirect/'+this.state.search} />
            );
        }
        return (

            <aside id="sidebar">
             
                <div id="nav-blog" className="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <a href="#" className="btn btn-success">Crear artículo</a>
                </div>

                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el artículo que buscas</p>
                    <form onSubmit= {this.redirectToSearch}>
                        <input type="text" name="search" ref={this.searchRef}/>
                        <input type="submit" name="submit" value="Buscar" class="btn" />
                    </form>
                </div>

            </aside>

        )
    }

}

export default Sidebar
