import { React, Component } from 'react';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';


class Landing extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Banner />
                <Grid />
                <Footer />
            </>
        );
    }
}

export default Landing;