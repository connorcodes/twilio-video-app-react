import React from 'react';
import { styled } from '@material-ui/core/styles';
import { Grid, Typography, Button, Link } from '@material-ui/core';

import Controls from './components/Controls/Controls';
import LocalVideoPreview from './components/LocalVideoPreview/LocalVideoPreview';
import MenuBar from './components/MenuBar/MenuBar';
import ReconnectingNotification from './components/ReconnectingNotification/ReconnectingNotification';
import Room from './components/Room/Room';

import useHeight from './hooks/useHeight/useHeight';
import useRoomState from './hooks/useRoomState/useRoomState';

import { setExercise } from '../src/redux/redux.js';
import Img1 from './categories/images/img1.png';
import Img2 from './categories/images/img2.png';
import Img3 from './categories/images/img3.png';
import Img4 from './categories/images/img4.png';
import Img5 from './categories/images/img5.png';
import Img6 from './categories/images/img6.png';
import Img7 from './categories/images/img7.png';
import Img8 from './categories/images/img8.png';
import Img9 from './categories/images/img9.png';
import { useDispatch } from 'react-redux';

const Container = styled('div')({
  display: 'grid',
  gridTemplateRows: 'auto 1fr',
});

const Main = styled('main')({
  overflow: 'hidden',
});

export default function App() {
  const displayVid = false;
  const roomState = useRoomState();

  // Here we would like the height of the main container to be the height of the viewport.
  // On some mobile browsers, 'height: 100vh' sets the height equal to that of the screen,
  // not the viewport. This looks bad when the mobile browsers location bar is open.
  // We will dynamically set the height with 'window.innerHeight', which means that this
  // will look good on mobile browsers even after the location bar opens or closes.
  const height = useHeight();

  const Categories = (props: any) => {
    const dispatch = useDispatch();
    const videos = {
      1: '8V6IBmD1qeI',
      2: 'rxEMKXW2Wqs',
      3: 'kzAi0fnElCA',
      4: 'E3ODVGAjePg',
      5: 'WJm9zA2NY8E',
      6: 'qfoW2PKugyk',
      7: 'RjexvOAsVtI',
      8: '6jHsraw2NIk',
      9: 'vPhg6sc1Mk4',
    };

    const setVideo = (videoId: string) => {
      dispatch(setExercise(`https://www.youtube.com/embed/${videoId}`));
      return (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      );
    };

    return (
      <div>
        <Container style={{ height }}>
          <MenuBar />
          <Main>
            {roomState === 'disconnected' ? (
              <LocalVideoPreview />
            ) : (
              <div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Knfudi-xDAE"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                <Room />
              </div>
            )}

            <Controls />
          </Main>
          <ReconnectingNotification />

          <Typography>Workout Treasures</Typography>

          <Grid container>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/8V6IBmD1qeI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

            <Grid container>
              <Grid sm={12} md={4}>
                <Button
                  onClick={() => {
                    setVideo(videos[1]);
                  }}
                >
                  {' '}
                  <img src={Img1} />{' '}
                </Button>
              </Grid>
              <Grid sm={12} md={4}>
                <Button
                  onClick={() => {
                    setVideo(videos[2]);
                  }}
                >
                  {' '}
                  <img src={Img2} />{' '}
                </Button>
              </Grid>
              <Grid sm={12} md={4}>
                <Button
                  onClick={() => {
                    setVideo(videos[3]);
                  }}
                >
                  {' '}
                  <img src={Img3} />{' '}
                </Button>
              </Grid>
            </Grid>

            <Grid container>
              <Grid sm={12} md={4}>
                <Button
                  onClick={() => {
                    setVideo(videos[4]);
                  }}
                >
                  {' '}
                  <img src={Img4} />{' '}
                </Button>
              </Grid>
              <Grid sm={12} md={4}>
                <Button
                  onClick={() => {
                    setVideo(videos[5]);
                  }}
                >
                  {' '}
                  <img src={Img5} />{' '}
                </Button>
              </Grid>
              <Grid sm={12} md={4}>
                <Button
                  onClick={() => {
                    setVideo(videos[6]);
                  }}
                >
                  {' '}
                  <img src={Img6} />{' '}
                </Button>
              </Grid>
            </Grid>

            <Grid container>
              <Grid sm={12} md={4}>
                <Button
                  onClick={() => {
                    setVideo(videos[7]);
                  }}
                >
                  {' '}
                  <img src={Img7} />{' '}
                </Button>
              </Grid>
              <Grid sm={12} md={4}>
                <Button
                  onClick={() => {
                    setVideo(videos[8]);
                  }}
                >
                  {' '}
                  <img src={Img8} />{' '}
                </Button>
              </Grid>
              <Grid sm={12} md={4}>
                <Button
                  onClick={() => {
                    setVideo(videos[9]);
                  }}
                >
                  {' '}
                  <img src={Img9} />{' '}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        );
      </div>
    );
  };
}
