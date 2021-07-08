import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';
import './style.css'

const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

const Featured = (props) => {
    const firstName = (props.name.split(' ').slice(0, -1).join(' '))
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    function cardBackgroundRender() {
        if (props.index % 2 === 0) {
            return "grey-background"
        } return "green-background"
    }

    return (
        <div style={{ padding: "10px 0", borderBottom: "1.5px solid #2E343C", borderRadius: "3px" }}>
            <Card className="card">
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <CardHeader title={props.name} color="#2E343C" ></CardHeader>
                    <img src={props.img_src} className={`featured-img ${cardBackgroundRender(props.index)}`}></img>
                    <CardContent>
                    <Typography color="textSecondary" component="p" className="card-subtitle" >
                            {props.job ? (
                                <>
                                <WorkIcon />
                                <div className="card-subtitle-text">  {props.job} </div>
                                </>
                            ):( props.place ? (
                                <div><LocationOnIcon/> {props.place}</div>
                            ):( null )
                            )}
                        </Typography>
                        <Typography variant="body2" color="#2E343C" component="p">
                            {props.description}
                        </Typography>
                    </CardContent>
                </div>
                <CardActions disableSpacing>
                    <IconButton
                        className={clsx(classes.expand, { [classes.expandOpen]: expanded, })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {props.body}
                        </Typography>
                        <a href={props.link} target="_blank">
                            See more about {props.name}
                        </a>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

export default Featured