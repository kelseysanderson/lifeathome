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
                <div className="card-container" style={{ padding: "5px 0", borderBottom: "1.5px solid #2E343C", borderRadius: "3px" }}>
                    <Card className="card">
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <FeaturedDataInput {...featured} index={index} id={featured.id} className="admin-blog-input featured-title-input" path="name" />
                            <img src={featured.img_src} alt={featured.name} className={`featured-img ${cardBackgroundRender(featured.index)}`}></img>
                            <FeaturedDataInput {...featured} index={index} id={featured.id} className="admin-blog-input card-subtitle-text" path="img_src" />
                            <CardContent>
                                <Typography color="textSecondary" component="p" className="card-subtitle" >
                                    {featured.job ? (
                                        <>
                                            <WorkIcon />
                                            <FeaturedDataInput {...featured} index={index} id={featured.id} className="admin-blog-input card-subtitle-text" path="job" />
                                        </>
                                    ) : (featured.place ? (
                                        <>
                                            <LocationOnIcon />
                                            <FeaturedDataInput {...featured} index={index} id={featured.id} className="admin-blog-input card-subtitle-text" path="place" />
                                        </>
                                    ) : (null)
                                    )}
                                </Typography>
                                <FeaturedDataInput {...featured} index={index} id={featured.id} className="admin-blog-input full-width" path="description" inputType="textarea" />
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
                                <FeaturedDataInput {...featured} index={index} id={featured.id} className="admin-blog-input full-width" path="body" inputType="textarea" />
                                <a href={featured.link} target="_blank" rel="noreferrer">
                                    See more about {featured.name}
                                </a>
                                <FeaturedDataInput {...featured} index={index} id={featured.id} className="admin-blog-input card-subtitle-text" path="external_link" />
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>

            ) : (
                <div  className="card-container" style={{ padding: "5px 0", borderBottom: "1.5px solid #2E343C", borderRadius: "3px" }}>
                    <Card className="card">
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <CardHeader title={featured.name} ></CardHeader>
                            <img src={featured.img_src} alt={featured.name} className={`featured-img ${cardBackgroundRender(featured.index)}`}></img>
                            <CardContent>
                                <Typography color="textSecondary" className="card-subtitle-text" component="p" className="card-subtitle" >
                                    {featured.job ? (
                                        <>
                                            <WorkIcon />
                                             {featured.job} 
                                        </>
                                    ) : (featured.place ? (
                                        <>
                                        <LocationOnIcon /> 
                                        {featured.place}
                                        </>
                                    ) : (null)
                                    )}
                                </Typography>
                                <Typography variant="body2" component="p" className="featured-description">
                                    {featured.description}
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
                                    {featured.body}
                                </Typography>
                                <a href={featured.link} target="_blank" rel="noreferrer">
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