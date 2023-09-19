import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({ feature }) => {
    return (


        <p className='flex items-center gap-2'><AiFillCheckCircle className='text-blue-700'></AiFillCheckCircle>{feature}</p>

    );
};

Feature.propTypes = {
    feature: PropTypes.string

};

export default Feature;