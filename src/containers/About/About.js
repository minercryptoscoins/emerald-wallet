import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { Logo as EtcLogo } from 'emerald-js-ui/lib/icons';
import { Button } from 'emerald-js-ui';
import version from '../../version';

const year = new Date().getFullYear();

class AboutClass extends React.Component {
  render() {
    const { muiTheme, onButtonClick, onHelpClick, onLicenseClick } = this.props;
    const styles = {
      links: {
        color: muiTheme.palette.textColor,
      },
    };
    return (
      <div style={{ padding: '30px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-160px' }}>
          <EtcLogo height="300px" width="300px" />
        </div>
        <h2 style={{ color: muiTheme.palette.primary1Color, fontWeight: '200', paddingBottom: '0px', marginBottom: '5px' }}>Emerald Wallet</h2>
        <div style={{ marginBottom: '20px' }}>{version}</div>
        <div style={{ color: muiTheme.palette.secondaryTextColor }}>ETCDEVTEAM: Igor Artamonov, Isaac Ardis, Constantine Kryvomaz, Yury Gagarin, Tomasz Zdybal, Shane Jonas, Richard Schumann, Darcy Reno</div>
        <div style={{ paddingTop: '40px', marginBottom: '60px' }}>
          <Button onClick={onButtonClick} primary label="Buy us a Pizza" />
        </div>
        <div style={{ paddingBottom: '5px' }}>Copyright &copy; 2017-{year} ETCDEVTeam</div>
        <div> Licensed under <a onClick={onLicenseClick} style={styles.links} href="#">Apache License 2.0</a>
          <span style={{ float: 'right', textAlign: 'right' }}>
            <a onClick={onHelpClick} style={styles.links} href="#">Help & Support</a>
          </span>
        </div>
      </div>
    );
  }
}

const About = muiThemeable()(AboutClass);

export default About;

