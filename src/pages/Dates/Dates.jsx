import React from 'react';

// Styles
import './StylesDates.css';

// Components
import CardDate from '../../components/CardDate/CardDate';
import Loading from '../../components/Loading/Loading';

// Services
import { getData } from '../../services/GetData.jsx';

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      loading: true
    }
  }

  async getDates() {
    const data = await getData().then(data => data);
    this.setState({ dates: data });
    this.setState({ loading: false });
  }

  componentDidMount() {
    this.getDates()
  }

  render() {
    return (
      <section className="dates-section">
        {
          this.state.loading === true ? <Loading /> :
            this.state.dates.map(
              date => <CardDate key={date.date.year} img={date.date.image} id={date.date.women.id} year={date.date.year} title={date.date.title} subTitle={date.date.subTitle} description={date.date.description} />
            )

        }
      </section>
    );
  }
}

export default Dates;
