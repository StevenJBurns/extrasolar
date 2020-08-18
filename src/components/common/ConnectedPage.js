/* React and Redux imports */
import { connect } from "react-redux";
import { changeAudioSource, changeFilters } from "../redux/actions/index.js";

/* Component Imports */ 
import PageData from "../components/pages/PageData"
import PageSolarSystems from "../components/pages/PageSolarSystems";


const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  changeAudioSource: audioSource => dispatch(changeAudioSource(audioSource)),
  changeFilters: newFilter => dispatch(changeFilters(newFilter))
});

export const ConnectedPageData = connect(mapStateToProps, mapDispatchToProps)(PageData);
export const ConnectedPageSolarSystems = connect(mapStateToProps, mapDispatchToProps)(PageSolarSystems);
