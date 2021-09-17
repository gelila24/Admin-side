import { React, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/sidebar";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Col } from 'reactstrap';
import "../style.css"
import { Bar } from 'react-chartjs-2';

// const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//         {
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',

//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//         },
//     ],
// };

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        marginLeft: '5px',
        maxWidth: '200px',
        textAlign: 'center',
        maxHeight: '180px'

    },
    image: {
        width: 'max-width',
        height: "60px",
        // textAlign: 'center',
        // marginLeft: '40px',
    },

    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    chart: {
        width: '600px',
    }
}));

function Home() {
    const classes = useStyles();
    const [numbers, setNumbers] = useState({ pharmaCount: 0, adminCount: 0, requestCount: 0 })
    const [data, setData] = useState({

        labels: ['Pharmacy Users', 'Admin User', 'New Requests'],
        datasets: [
            {
                label: '# of Votes',
                data: [],
                backgroundColor: 'rgba(0, 170, 219, 0.2)',
                borderColor: 'rgba(0, 170, 219, 1)',
                borderWidth: 1,
            },
        ],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const { data: numbers } = await axios.get("http://localhost:4000/admin/numbers")
        const numbersArr = [numbers.pharmaCount, numbers.adminCount, numbers.requestCount]
        //const values = pharmaCount.map(q => q.count)
        setData({ ...data, datasets: [{ ...data.datasets[0], data: numbersArr }] })
        setNumbers({ ...numbers })
    }, [])
    return (
        <div>
            <Navbar />
            <div className="home1">
                <div className="side">
                    {" "}
                    <Sidebar />
                </div>
                <div className="home">
                    <br /><div>

                        <Col sm={4} lg={10}>
                            {/* <h1> WELCOME {userName}</h1> */}
                            <Grid container spacing={3}>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper} item xs={3} style={{ border: '1px solid #000' }}>
                                        <Grid container spacing={2} >
                                            <div className={classes.image} >
                                                <h4 >Pharmacy Users</h4>
                                                <Typography >
                                                    <i class="fa fa-users  fa-4x" aria-hidden="true" ></i>
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <br /> <br /><br />
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Typography gutterBottom variant="subtitle1">
                                                        <h4 style={{ textAlign: 'center' }}>{numbers.pharmaCount}</h4>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item xs={3}>
                                    <Paper className={classes.paper} item xs={3} style={{ border: '1px solid #000' }}>
                                        <Grid container spacing={2}>
                                            <div className={classes.image} style={{ marginLeft: '30px' }}>
                                                <h4>Admin Users</h4>
                                                <span style={{ color: "#00AADB" }}>
                                                    <i class="fas fa-user-shield fa-4x"></i>
                                                </span>
                                            </div>
                                        </Grid>
                                        <br /> <br /><br />
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Typography gutterBottom variant="subtitle1">
                                                        <h4 style={{ textAlign: 'center' }}>{numbers.adminCount}</h4>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <br />
                                <Grid item xs={5}>
                                    <Paper className={classes.paper} style={{ border: '1px solid #000' }}>
                                        <Grid container spacing={2}>
                                            <div className={classes.image}>
                                                <h5>New Pharmacy Request</h5>
                                                <Typography >
                                                    <i class="fa fa-bell fa-4x" aria-hidden="true"></i>
                                                </Typography>
                                            </div>
                                        </Grid>
                                        <br /> <br /><br />
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item xs>
                                                    <Typography gutterBottom variant="subtitle1">
                                                        <h5 style={{ textAlign: 'center' }}>{numbers.requestCount}</h5>
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Col>
                    </div>
                    <div className='chart'>
                        <Col sm={4} lg={10}>
                            <br /> <br />
                            <Col lg="12">
                                <Bar data={data} options={options} />
                            </Col>
                        </Col>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home
