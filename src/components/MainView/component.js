import React from 'react';
import PropTypes from 'prop-types';
import SongList from '../SongList';
import AlbumList from '../AlbumList';
import ArtistList from '../ArtistList';
import BrowseView from '../BrowseView';
import './MainView.css';

const MainView = ({ headerTitle, audioControl, resumeSong, pauseSong }) => {

  return (
    <div>
      {
        headerTitle === 'Álbuns' ?
          (<AlbumList audioControl={ audioControl } />) :
          headerTitle === 'Artistas' ?
            (<ArtistList />) :
            (headerTitle === 'Home') ?
              ( <BrowseView />) :
              //anything else show SongList
              ( <SongList resumeSong={ resumeSong } pauseSong={ pauseSong } audioControl={ audioControl } />)
      }
    </div>
  );

};

MainView.propTypes = {
  headerTitle: PropTypes.string,
  audioControl: PropTypes.func,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func
};

export default MainView;
