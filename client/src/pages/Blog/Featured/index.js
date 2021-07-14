import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';
import FeaturedDataInput from '../../../components/Inputs/featuredDataInput';
import FeaturedButton from '../../../components/APIButtons/featured';
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

const Featured = ({ featured, index, loggedIn, edit }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    function cardBackgroundRender() {
        if (featured.index % 2 === 0) {
            return "grey-background"
        } return "green-background"
    }

    return (
        <div>
            {loggedIn && edit === true ? (
                <div className="card-container">
                    <Card className="card">
                        <section className="featured-card" >
                            <FeaturedDataInput {...featured} index={index} id={featured.id} className="admin-blog-input featured-title-input" path="name" />
                            <img src={featured.img_src} alt={featured.name} className={`featured-img ${cardBackgroundRender(featured.index)}`}></img>
                            <FeaturedDataInput {...featured} index={index} id={featured.id} className="admin-blog-input card-subtitle-text" path="img_src" />
                            <CardContent>
                                <Typography color="textSecondary" component="p" className="card-subtitle" >
                                        <WorkIcon />
                                        <FeaturedDataInput {...featured} index={index} id={featured.id} className="admin-blog-input card-subtitle-text" path="job" />
                                </Typography>
                                <Typography color="textSecondary" component="p" className="card-subtitle" >
                                        <LocationOnIcon />
                                        <FeaturedDataInput {...featured} index={index} id={featured.id} className="admin-blog-input card-subtitle-text" path="place" />
                                </Typography>
                                <FeaturedDataInput {...featured} index={index} id={featured.id} className="admin-blog-input full-width" path="description" inputType="textarea" />
                                <div className="delete-row">
                                    <FeaturedButton.Delete id={featured._id} />
                                    <p>Delete Card</p>
                                </div>
                            </CardContent>
                        </section>
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
                                <FeaturedDataInput {...featured} index={index} id={featured.id} className="admin-blog-input full-width" path="body" inputType="textarea" />
                                <a href={featured.external_link} target="_blank" rel="noreferrer">
                                    See more about {featured.name}
                                </a>
                                <FeaturedDataInput {...featured} index={index} id={featured.id} className="admin-blog-input card-subtitle-text" path="external_link" />
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>

            ) : (
                <div className="card-container" >
                    <Card className="card">
                        <section className="featured-card">
                            <CardHeader title={featured.name} ></CardHeader>
                            <img src={featured.img_src} alt={featured.name} className={`featured-img ${cardBackgroundRender(featured.index)}`}></img>
                            <CardContent >
                                {featured.job ? (
                                    <Typography color="textSecondary" className="card-subtitle-text" >
                                        <WorkIcon />
                                        {featured.job}
                                    </Typography>

                                ) : (featured.place ? (
                                    <Typography color="textSecondary" className="card-subtitle-text" >
                                        <LocationOnIcon />
                                        {featured.place}
                                    </Typography>
                                ) : (null)
                                )}
                                <Typography variant="body2" component="p" style={{width:'94%', margin:"5% 3%"}}>
                                    {featured.description}
                                </Typography>
                            </CardContent>
                        </section>
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
                                    {featured.body}
                                </Typography>
                                <a href={featured.external_link} target="_blank" rel="noreferrer">
                                    See more about {featured.name}
                                </a>
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
            )}

        </div>
    )
}

export default Featured