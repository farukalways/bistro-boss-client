import PropTypes from 'prop-types';
const SectionTitle = ({Heading, subHeading}) => {
    return (
        <div className='text-center md:w-4/12 mx-auto my-8'>
            <p className='text-yellow-600 mb-2'>--- {subHeading} ---</p>
            <h3 className='text-3xl uppercase border-y-2 py-4'>{Heading}</h3>
        </div>
    );
};
SectionTitle.propTypes = {
    Heading: PropTypes.string,
    subHeading: PropTypes.string,
};
export default SectionTitle;