import classes from './Callout.module.css';

const Callout = (props) => {
    return (
        <div className={classes.callout}>{props.children}</div>
    );
};

export default Callout;