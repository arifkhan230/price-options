import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option
    console.log(option)
    return (
        <div className='flex flex-col bg-blue-300 rounded-lg mx-6 p-4'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-2xl text-center my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx}
                        feature={feature}
                    ></Feature>)
                }

            </div>
                <button className='btn btn-primary w-full mt-6 text-white'>Buy Now</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object

};

export default PriceOption;