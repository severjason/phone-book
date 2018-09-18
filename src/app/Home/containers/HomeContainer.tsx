import * as React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators, Dispatch } from 'redux';
/*

interface AppRoute {
  match: any;
}*/

class HomeContainer extends React.Component<any, {}> {

  public render() {
    return (
      <div> home</div>
    );
  }
}
export default HomeContainer;
/*
export default connect<NoteProps, AppHomeDispatch>(
  (state: AppState) => ({
    notes: state.notes.byId,
    activeCategory: state.categories.activated,
  }),
  (dispatch: Dispatch<AppAction>) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(NoteContainer);*/
