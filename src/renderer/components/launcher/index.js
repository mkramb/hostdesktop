import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchBar from 'material-ui-search-bar';
import { lightBlue50 } from 'material-ui/styles/colors';
import { Applications } from '../applications';
import { searchAppsStart } from '../../middlewares/search';

const Container = styled.div`
  background-color: ${lightBlue50};
  height: 100vh;
`;

const Launcher = ({ apps, search }) => (
  <Container>
    <SearchBar
      hintText='Search for application'
      onChange={(term) => search(term)}
      onRequestSearch={() => undefined}
    />
    { apps && <Applications items={apps} /> }
  </Container>
);

const mapStateToProps = state => ({ apps: state.launcher.apps });
const mapDispatchToProps = dispatch => ({
  search: (term) => dispatch(searchAppsStart(term))
})

const LauncherConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Launcher)

export {
  Launcher,
  LauncherConnected
};
