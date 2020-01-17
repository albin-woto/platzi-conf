import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Badge from '../components/Badge'
import api from '../api';

class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    } else if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    const badge = this.state.data;

    return (
      <React.Fragment>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="BadgeDetails__hero-logo">
                <img src={confLogo} alt="Logo de la Conferencia" />
              </div>
              <div className="BadgeDetails__hero-attendant-name">
                <h1>
                  {badge.firstName} {badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                jobTitle={badge.jobTitle}
                twitter={badge.twitter}
              />
            </div>  
            <div className="col actions">
              <h2>Actions</h2>
              <Link className="btn btn-primary" to={`/badges/${badge.id}/edit`}>
                Edit
              </Link>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeDetails;
