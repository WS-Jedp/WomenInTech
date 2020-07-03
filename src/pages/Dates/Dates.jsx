import React from 'react';

// Styles
import './StylesDates.css';

// Components
import CardDate from '../../components/CardDate/CardDate';

// Services
import { getData } from '../../services/GetData.jsx';

class Dates extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dates: [],
      loading: true
    }
  }

  async getDates(){
    const data = await getData().then(data => data);
    this.setState({dates: data});
    this.setState({loading: false});
  }

  componentDidMount(){
    this.getDates()
  }

  render(){
    return(
        <section className="dates-section">
          { 
            this.state.loading === true ? 'Cargando' : 
              this.state.dates.map(
                date => <CardDate key={date.year} year={date.year} title={date.title} subTitle={date.subtitle} description={date.description} />
              ) 
          }
        </section>
    );
  }
}

export default Dates;
