import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import memeShareFrontImage from '../assets/images/o79EML.jpg'
import { Link } from 'react-router-dom'

const styles=theme=>({
    card:{
        maxWidth:600,
        margin:'auto',
        marginTop:theme.spacing.unit*5
    },
    title:{
        padding:`${theme.spacing.unit*3}px ${theme.spacing.unit*2.5}px ${theme.spacing.unit*2}px`,
        color:theme.palette.text.secondry
    },
    media:{
        minHeight:330
    }
})

class Home extends Component{
    render(){
        const {classes}=this.props
        return(
            <div>
                <Card className={classes.card}>
                    <Typography component="h2" type="headline" className={classes.title}>
                        Home
                    </Typography>
                    <CardMedia className={classes.media} image={memeShareFrontImage}>
                        <CardContent>
                        <Typography type="body1" component="p">
                            Welcome to MemesShare 
                        </Typography>
                        </CardContent>
                    </CardMedia>
                </Card>
                <Link to="/users">
                    <button>Users</button>
                </Link>
                <Link to="/signup">
                    <button>signup</button>
                </Link>
            </div>
        )
    }
}
Home.propTypes={
    classes:PropTypes.object.isRequired
} 

export default withStyles(styles)(Home)