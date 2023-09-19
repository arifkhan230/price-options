import PropTypes from 'prop-types';


const Link = ({route}) => {
    return (
        <div>
        
        <li className="mr-10 hover:bg-yellow-500 rounded px-4 " >
        <a href={route.path}></a>{route.name}</li>
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object
};

export default Link;