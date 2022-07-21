const Switch = ({ setIsLight, isAbacaxi }) => {

    function handleBulb() {
        setIsLight(
            (oldIsLight) => !oldIsLight
        );
    }

    return (
        <button onClick={handleBulb}>ON/OFF</button>
    )
};

export default Switch;