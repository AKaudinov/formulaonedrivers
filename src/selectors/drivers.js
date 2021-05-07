const getFilteredDrivers = (drivers, {text}) => {
    return drivers.filter(driver => {
        const driverName = `${driver.givenName} ${driver.driverId}`;
            return driverName.toLowerCase().includes(text.toLowerCase()) || driver.nationality.toLowerCase().includes(text.toLowerCase());
    });
};

export default getFilteredDrivers;
