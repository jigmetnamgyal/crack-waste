import React, {Component} from 'react'
import styles from './geo.module.css';
import imgHappy from './happy.svg';
import {Typography, Card, CardContent} from '@material-ui/core';
import {Button} from '@material-ui/core';

class GeoLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            long: null,
            flag: false
        };
        this.getLocation = this
            .getLocation
            .bind(this)

        this.getCoordinate = this
            .getCoordinate
            .bind(this);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator
                .geolocation
                .getCurrentPosition(this.getCoordinate);
        } else {
            alert('invalid')
        }

    }

    getCoordinate(position) {
        this.setState(
            {lat: position.coords.latitude, long: position.coords.longitude, flag: true}
        )
    }

    render() {
        return (
            <div className={styles.geolocation}>
                 <Card className={styles.geolocation__app}>
                <CardContent>
                    <Typography
                        className={styles.textH1}
                        variant="body2"
                        color="textSecondary"
                        component="h1">Click To Check-in
                    </Typography>

                    <Button className={styles.btn} onClick={this.getLocation}>Check-In</Button>

                    <img className={styles.happyimg} src={imgHappy} alt="Happy"/>

                   

                </CardContent>
                {
                        this.state.flag && (
                            <div className={styles.location}>
                                <p>Latitude: {this.state.lat}</p>
                                <p>Longitude: {this.state.long}</p>
                            </div>
                        )
                    }
            </Card>
            </div>
           
        )
    }
}

export default GeoLocation 


{/* <Card className={styles.geolocation__app}>
                <CardContent>
                    <Typography className={styles.textH1} variant="body2" color="textSecondary" component="h1">You Location is updated in the Database, You are checked-In!
                    </Typography>
                    <img className={styles.happyimg} src={imgHappy} alt="Happy"/>
                </CardContent>
            </Card> */
}
