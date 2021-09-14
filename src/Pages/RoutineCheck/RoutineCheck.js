import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Col } from 'reactstrap';
import Container from '@material-ui/core/Container';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../Sidebar/sidebar';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

const active = [
    {
        title: 'Pharmacy 1',
        subheader: 'Active',
        description: ['Login 2 min ago', 'Update 2 Mdicine', 'Active', ''],
        buttonText: 'See Detail',
        buttonVariant: 'contained',
    },
    {
        title: 'Pharmacy 2',
        subheader: 'Active',
        description: ['Login 2 days ago', 'Update 1 Mdicine', 'Active', ''],
        buttonText: 'See Detail',
        buttonVariant: 'contained',
    },
    {
        title: 'Pharmacy 3',
        subheader: 'Active',
        description: ['Login 2 mdays ago', 'Update 5 Mdicine', 'Active', ''],
        buttonText: 'See Detail',
        buttonVariant: 'contained',
    },
];
const tiers = [
    {
        title: 'Pharmacy 4',
        subheader: 'Not Active',
        description: ['Login 1 month ago', 'Update 0 Mdicine', 'Not Active', ''],
        buttonText: 'See Detail',
        buttonVariant: 'contained',
    },
    {
        title: 'Pharmacy 5',
        subheader: 'Not Active',
        description: ['Login 2 week ago', 'Update 1 Mdicine', 'Not Active', ''],
        buttonText: 'See Detail',
        buttonVariant: 'contained',
    },
    {
        title: 'Pharmacy 6',
        subheader: 'Not Active',
        description: ['Login 7 days ago', 'Update 5 Mdicine', 'Not Active', ''],
        buttonText: 'See Detail',
        buttonVariant: 'contained',
    },
];


export default function RoutineCheck() {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <div className="home1">
                <div className="side" > <Sidebar /></div>
                <div className="home">
                    <React.Fragment>

                        <Col sm={4} lg={10}>
                            <CssBaseline />
                            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>

                            </AppBar>
                            {/* Hero unit */}
                            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                                <Typography component="h5" variant="h4" align="center" color="textPrimary" gutterBottom>
                                    Recently Active Pharmacies
                                </Typography>

                            </Container>
                            <Container maxWidth="md" component="main">
                                <Grid container spacing={5} alignItems="flex-end">
                                    {active.map((active) => (
                                        <Grid item key={active.title} xs={12} sm={active.title === 'Pharmacy 1' ? 12 : 6} md={4}>
                                            <Card>
                                                <CardHeader
                                                    title={active.title}
                                                    subheader={active.subheader}
                                                    titleTypographyProps={{ align: 'center' }}
                                                    subheaderTypographyProps={{ align: 'center' }}
                                                    action={active.title === 'Prarmacy 1' ? <StarIcon /> : null}
                                                    className={classes.cardHeader}
                                                />
                                                <CardContent>

                                                    <ul>
                                                        {active.description.map((line) => (
                                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                                {line}
                                                            </Typography>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                                <CardActions>
                                                    <Button fullWidth variant={active.buttonVariant} color="primary">
                                                        {active.buttonText}
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Container>
                            {/* Footer */}
                            <Container maxWidth="md" component="footer" className={classes.footer}>

                                <Container maxWidth="sm" component="main" className={classes.heroContent}>
                                    <Typography component="h5" variant="h4" align="center" color="textPrimary" gutterBottom>
                                        InActive Pharmacies
                                    </Typography>

                                </Container>

                                <Container maxWidth="md" component="main">
                                    <Grid container spacing={5} alignItems="flex-end">
                                        {tiers.map((tier) => (
                                            // Enterprise card is full width at sm breakpoint
                                            <Grid item key={tier.title} xs={12} sm={tier.title === 'Pharmacy 4' ? 12 : 6} md={4}>
                                                <Card>
                                                    <CardHeader
                                                        title={tier.title}
                                                        subheader={tier.subheader}
                                                        titleTypographyProps={{ align: 'center' }}
                                                        subheaderTypographyProps={{ align: 'center' }}
                                                        action={tier.title === 'Pro' ? <StarIcon /> : null}
                                                        className={classes.cardHeader}
                                                    />
                                                    <CardContent>

                                                        <ul>
                                                            {tier.description.map((line) => (
                                                                <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                                    {line}
                                                                </Typography>
                                                            ))}
                                                        </ul>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button fullWidth variant={tier.buttonVariant} color="primary">
                                                            {tier.buttonText}
                                                        </Button>
                                                    </CardActions>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Container>


                            </Container>
                            {/* End footer */}
                        </Col>
                    </React.Fragment>
                </div>
            </div>
        </div >
    );
}