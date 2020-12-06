const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432,
})

const getAllCountry = async() => {
    const sql = `SELECT "Province/State" as State , "Country/Region" as Country from covid19_confirmed_csv`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getAllConfirmed = async() => {
    const sql = `select "3/23/20" as Confirmed from covid19_confirmed_csv`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getAllRecovered = async() => {
    const sql = `select "3/23/20" as Confirmed from covid19_recovered_csv`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getAllDeath = async() => {
    const sql = `select "3/23/20" as Confirmed from covid19_death_csv`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getTotalConfirm = async() => {
    const sql = `select sum("3/23/20") as confirmed from covid19_confirmed_csv`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getTotalRecovered = async() => {
    const sql = `select sum("3/23/20") as recovered from covid19_recovered_csv`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getTotalDeath = async() => {
    const sql = `select sum("3/23/20") as death from covid19_death_csv`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getLatLong = async() => {
    const sql = `select "Province/State" as State , "Country/Region" as Country, lat , long from covid19_death_csv`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

//Thailand//
const getAllCountryTH = async() => {
    const sql = `SELECT "Province/State" as State , "Country/Region" as Country from covid19_confirmed_csv where "Country/Region" like 'Thailand'`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getAllConfirmedTH = async() => {
    const sql = `select "3/23/20" as Confirmed from covid19_confirmed_csv where "Country/Region" like 'Thailand'`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getAllRecoveredTH = async() => {
    const sql = `select "3/23/20" as Confirmed from covid19_recovered_csv where "Country/Region" like 'Thailand'`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getAllDeathTH = async() => {
    const sql = `select "3/23/20" as Confirmed from covid19_death_csv where "Country/Region" like 'Thailand'`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getTotalConfirmTH = async() => {
    const sql = `select sum("3/23/20") as confirmed from covid19_confirmed_csv where "Country/Region" like 'Thailand'`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getTotalRecoveredTH = async() => {
    const sql = `select sum("3/23/20") as recovered from covid19_recovered_csv where "Country/Region" like 'Thailand'`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getTotalDeathTH = async() => {
    const sql = `select sum("3/23/20") as death from covid19_death_csv where "Country/Region" like 'Thailand'`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

const getLatLongTH = async() => {
    const sql = `select "Province/State" as State , "Country/Region" as Country, lat , long from covid19_death_csv where "Country/Region" like 'Thailand'`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}
module.exports = {
    getAllCountry,
    getAllConfirmed,
    getAllRecovered,
    getAllDeath,
    getTotalConfirm,
    getTotalRecovered,
    getTotalDeath,
    getLatLong,

    getAllCountryTH,
    getAllConfirmedTH,
    getAllRecoveredTH,
    getAllDeathTH,
    getTotalConfirmTH,
    getTotalRecoveredTH,
    getTotalDeathTH,
    getLatLongTH,

}