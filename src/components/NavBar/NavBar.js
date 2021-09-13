import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PopularIcon from '@material-ui/icons/Whatshot';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import MovieIcon from '@material-ui/icons/Movie';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    root: {
        width: 1920,
        resiazable: true,
        position: "fixed",
        bottom: 0,
        backgroundColor: "#F1F1F1",
        zIndex: 100,
        color: "white"
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    useEffect(() => {
        if (value === 0) history.push("/");
        else if (value === 1) history.push("/pesquisar")
        else if (value === 2) history.push("/login")
        else if (value === 3) history.push("/todos-filmes")
    }, [value, history]);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                style={{
                    color: "#4BA2E7"
                }}
                label="Populares"
                icon={<PopularIcon />}
            />

            <BottomNavigationAction
                style={{
                    color: "#4BA2E7"
                }}
                label="Pesquisar"
                icon={<SearchIcon />}
            />

            <BottomNavigationAction
                style={{
                    color: "#4BA2E7"
                }}
                label="Log-in"
                icon={<PersonIcon />}
            />


            <BottomNavigationAction
                style={{
                    color: "#4BA2E7"
                }}
                label="Todos os filmes"
                icon={<MovieIcon />}
            />
        </BottomNavigation>
    );
}