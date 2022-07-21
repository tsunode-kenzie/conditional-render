import { AiFillBulb } from 'react-icons/ai';

const Bulb = ({ isLight }) => {
    // kebab-case
    // camelCase
    // const style = {
    //     fontSize: '24px',
    //     backgroundColor: 'yellow'
    // }

    return (
        <div>
            {/* {
                isLight ?
                    <AiFillBulb style={{ color: 'yellow', fontSize: '250px' }} />
                    :
                    <AiFillBulb style={{ color: 'gray', fontSize: '250px' }} />
            } */}



            {/* <AiFillBulb
                style={{ color: isLight ? 'yellow' : 'gray', fontSize: '250px' }}
            /> */}

            {
                isLight &&
                <AiFillBulb
                    style={{ color: 'yellow', fontSize: '250px' }} />
            }
        </div>
    )
};

export default Bulb;